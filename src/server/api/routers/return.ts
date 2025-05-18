import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";

export const returnRouter = createTRPCRouter({
  /////////////////////////
  create: protectedProcedure
  .input(z.object({
    orderId: z.string(),
    reason: z.string().min(10, "Причина должна содержать минимум 10 символов"),
    quantity: z.number().min(1, "Количество должно быть не меньше 1"),
  }))
  .mutation(async ({ input, ctx }) => {
    const userId = ctx.session.user.id;

    const orderItems = await ctx.db.orderItem.findMany({
      where: { orderId: input.orderId },
    });

    const totalPurchased = orderItems.reduce((sum, item) => sum + item.quantity, 0);

    const returns = await ctx.db.return.findMany({
      where: { orderId: input.orderId },
    });

    const totalReturned = returns.reduce((sum, r) => sum + r.quantity, 0);

    if (input.quantity + totalReturned > totalPurchased) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: `Нельзя вернуть больше, чем куплено. Вы уже подали заявок на ${totalReturned} из ${totalPurchased} товаров.`,
      });
    }

    return ctx.db.return.create({
      data: {
        userId,
        orderId: input.orderId,
        reason: input.reason,
        quantity: input.quantity,
      },
    });
  }),
/////////////////////////////////////////////////
  getMyReturns: protectedProcedure
    .query(async ({ ctx }) => {
      return ctx.db.return.findMany({
        where: { userId: ctx.session.user.id },
        include: {
          order: {
            select: {
              id: true,
              totalAmount: true,
              createdAt: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
      });
    }),

  getAllReturns: protectedProcedure
    .query(async ({ ctx }) => {
      if (ctx.session.user.role !== "ADMIN") {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }

      return ctx.db.return.findMany({
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
          order: {
            select: {
              id: true,
              totalAmount: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
      });
    }),

  
});