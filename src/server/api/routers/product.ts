import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { db } from "~/server/db";

export const productRouter = createTRPCRouter({
  getIssuedProducts: protectedProcedure
    .input(
      z.object({
        from: z.date().optional(),
        to: z.date().optional(),
        search: z.string().optional(),
      })
    )
    .query(async ({ input }) => {
      return await db.issuedProduct.findMany({
        where: {
          issuedAt: {
            gte: input.from,
            lte: input.to,
          },
          OR: input.search
            ? [
                { product: { name: { contains: input.search, mode: "insensitive" } } },
                { user: { name: { contains: input.search, mode: "insensitive" } } },
              ]
            : undefined,
        },
        include: {
          product: { select: { name: true } },
          user: { select: { name: true } },
        },
        orderBy: { issuedAt: "desc" },
      });
    }),

  getDeclinedProducts: protectedProcedure
    .input(
      z.object({
        from: z.date().optional(),
        to: z.date().optional(),
        search: z.string().optional(),
      })
    )
    .query(async ({ input }) => {
      return await db.declinedProduct.findMany({
        where: {
          declinedAt: {
            gte: input.from,
            lte: input.to,
          },
          OR: input.search
            ? [
                { product: { name: { contains: input.search, mode: "insensitive" } } },
                { user: { name: { contains: input.search, mode: "insensitive" } } },
              ]
            : undefined,
        },
        include: {
          product: { select: { name: true } },
          user: { select: { name: true } },
        },
        orderBy: { declinedAt: "desc" },
      });
    }),
});