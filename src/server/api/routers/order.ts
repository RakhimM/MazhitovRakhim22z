import { createTRPCRouter, protectedProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

export const orderRouter = createTRPCRouter({
  //////////////////////////////////////
  getUserOrders: protectedProcedure
    .query(async ({ ctx }) => {
      if (!ctx.session?.user?.id) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Необходима авторизация",
        });
      }

      return ctx.db.order.findMany({
        where: { userId: ctx.session.user.id },
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          totalAmount: true,
          createdAt: true,
        },
      });
    }),
    //////////////////////////////
  getOrder: protectedProcedure
    .input(z.object({ orderId: z.string() }))
    .query(async ({ ctx, input }) => {
      const order = await ctx.db.order.findUnique({
        where: { id: input.orderId },
        include: {
          user: true,
          items: {
            include: { product: true },
          },
        },
      });

      if (!order || !order.user) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Заказ не найден" });
      }

      return order;
    }),
  issueOrder: protectedProcedure
  .input(z.object({ orderId: z.string() }))
  .mutation(async ({ ctx, input }) => {
    const order = await ctx.db.order.findUnique({
      where: { id: input.orderId },
      include: {
        user: true,
        items: {
          include: { product: true },
        },
      },
    });

    if (!order || !order.user) {
      throw new TRPCError({ code: "NOT_FOUND", message: "Заказ не найден" });
    }

    const issuedItems = order.items.map((item) => ({
      userId: order.userId,
      productId: item.productId,
      quantity: item.quantity,
      comment: `Выдан из заказа №${order.id}`,
    }));

    const totalQuantity = order.items.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

    const totalAmount = order.items.reduce(
      (sum, item) => sum + item.quantity * item.product.price,
      0
    );

    await ctx.db.$transaction([
      ctx.db.issuedProduct.createMany({
        data: issuedItems,
      }),
      ctx.db.user.update({
        where: { id: order.userId },
        data: {
          purchasedItems: {
            increment: totalQuantity,
          },
          totalSpent: {
            increment: totalAmount,
          },
        },
      }),
      ctx.db.order.delete({
        where: { id: order.id },
      }),
    ]);

    

    return { success: true };
  }),


  declineOrder: protectedProcedure
    .input(z.object({ orderId: z.string(), reason: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const order = await ctx.db.order.findUnique({
        where: { id: input.orderId },
        include: {
          user: true,
          items: true,
        },
      });

      if (!order || !order.user) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Заказ не найден" });
      }

      const declinedItems = order.items.map((item) => ({
        userId: order.userId,
        productId: item.productId,
        quantity: item.quantity,
        reason: input.reason,
      }));

      await ctx.db.declinedProduct.createMany({
        data: declinedItems,
      });

      return { success: true, redirect: "/productDeleviry"  };
    }),
});
