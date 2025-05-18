import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const reviewRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({
      productId: z.string(),
      userId: z.string(),
      rating: z.number().min(0).max(5),
      comment: z.string().min(1),
      parentId: z.string().optional(),
    }))
    .mutation(async ({ input, ctx }) => {
      return ctx.db.review.create({
        data: {
          productId: input.productId,
          userId: input.userId,
          rating: input.rating,
          comment: input.comment,
          parentId: input.parentId ?? null,
        },
        include: {
          user: {
            select: {
              name: true,
              surname: true,
            },
          },
        },
      });
    }),

  getByProduct: protectedProcedure
    .input(z.object({ productId: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.db.review.findMany({
        where: {
          productId: input.productId,
          parentId: null,
        },
        include: {
          user: {
            select: {
              name: true,
              surname: true,
              image: true, 
            },
          },
          replies: {
            include: {
              user: {
                select: {
                  name: true,
                  surname: true,
                  image: true,
                },
              },
            },
            orderBy: {
              createdAt: 'asc',
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      });
    }),

  update: protectedProcedure
    .input(z.object({
      reviewId: z.string(),
      comment: z.string().min(1),
      rating: z.number().min(1).max(5),
    }))
    .mutation(async ({ input, ctx }) => {
      const review = await ctx.db.review.findUnique({
        where: { id: input.reviewId },
      });

      if (!review || review.userId !== ctx.session.user.id) {
        throw new Error("Недостаточно прав для редактирования отзыва");
      }

      return ctx.db.review.update({
        where: { id: input.reviewId },
        data: {
          comment: input.comment,
          rating: input.rating,
        },
      });
    }),

  delete: protectedProcedure
    .input(z.object({ reviewId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const review = await ctx.db.review.findUnique({
        where: { id: input.reviewId },
      });

      if (!review || review.userId !== ctx.session.user.id) {
        throw new Error("Недостаточно прав для удаления отзыва");
      }

      return ctx.db.review.delete({
        where: { id: input.reviewId },
      });
    }),

  longPollNewReviews: protectedProcedure
    .input(z.object({
      productId: z.string(),
      lastReviewTimestamp: z.string().optional(), 
    }))
    .query(async ({ input, ctx }) => {
      const timeoutMs = 15 * 60 * 1000;
      const startTime = Date.now();
      const lastTimestamp = input.lastReviewTimestamp ? new Date(input.lastReviewTimestamp) : null;

      return await new Promise(async (resolve) => {
        const checkForNewReviews = async () => {
          const reviews = await ctx.db.review.findMany({
            where: {
              productId: input.productId,
              parentId: null,
              ...(lastTimestamp ? { createdAt: { gt: lastTimestamp } } : {}),
            },
            include: {
              user: {
                select: { name: true, surname: true, image: true },
              },
              replies: {
                include: {
                  user: {
                    select: { name: true, surname: true, image: true },
                  },
                },
                orderBy: { createdAt: "asc" },
              },
            },
            orderBy: { createdAt: "desc" },
          });

          if (reviews.length > 0) {
            resolve({ reviews });
          } else if (Date.now() - startTime > timeoutMs) {
            resolve({ reviews: [] });
          } else {
            setTimeout(checkForNewReviews, 1000);
          }
        };

        checkForNewReviews();
      });
    }),
});
