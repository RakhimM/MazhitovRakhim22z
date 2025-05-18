import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { orderRouter } from "./routers/order";
import { reviewRouter } from "./routers/reviews";
import { returnRouter } from "./routers/return";
import { productRouter } from "./routers/product";
import { supportTicketRouter } from "./routers/ticket";
// import { ticketRouter } from "./routers/ticket";
// import { uploadRouter } from "./routers/image";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  order: orderRouter,
  review: reviewRouter,
  return: returnRouter,
  product: productRouter,
  ticket: supportTicketRouter,
  // upload: uploadRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
