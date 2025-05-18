// // import { z } from "zod";
// // import { createTRPCRouter, protectedProcedure } from "../trpc";
// // import { TicketStatus } from "@prisma/client";

// // export const ticketRouter = createTRPCRouter({
// //   createTicket: protectedProcedure
// //     .input(
// //       z.object({
// //         subject: z.string().min(1, "Тема обязательна"),
// //         description: z.string().min(1, "Описание обязательно"),
// //       })
// //     )
// //     .mutation(async ({ ctx, input }) => {
// //       return ctx.db.supportTicket.create({
// //         data: {
// //           userId: ctx.session.user.id,
// //           subject: input.subject,
// //           description: input.description,
// //           status: "Sent",
// //         },
// //       });
// //     }),

// //   // Добавить сообщение в тикет
// // addMessage: protectedProcedure
// //   .input(
// //     z.object({
// //       ticketId: z.string().optional(),
// //       message: z.string(),
// //       subject: z.string().optional(),
// //       description: z.string().optional(),
// //     })
// //   )
// //   .mutation(async ({ ctx, input }) => {
// //     let ticketId = input.ticketId;

// //     // Проверка: существует ли тикет
// //     if (ticketId) {
// //       const existing = await ctx.db.supportTicket.findUnique({
// //         where: { id: ticketId },
// //       });

// //       if (!existing) {
// //         ticketId = undefined; // сбрасываем, чтобы создать новый
// //       }
// //     }

// //     // Если тикета нет — создаём его
// //     if (!ticketId) {
// //       const newTicket = await ctx.db.supportTicket.create({
// //         data: {
// //           userId: ctx.session.user.id,
// //           subject: input.subject ?? 'Без темы',
// //           description: input.description ?? '',
// //           status: 'Sent',
// //         },
// //       });

// //       ticketId = newTicket.id;
// //     }

// //     // Создаём сообщение
// //     const newMessage = await ctx.db.supportTicketMessage.create({
// //       data: {
// //         ticketId,
// //         userId: ctx.session.user.id,
// //         message: input.message,
// //         supportAgent: false,
// //       },
// //     });

// //     return {
// //       message: newMessage,
// //       ticketId,
// //     };
// //   }),

// //   // Получить тикет по ID
// //   getTicketById: protectedProcedure
// //     .input(z.object({ ticketId: z.string() }))
// //     .query(async ({ ctx, input }) => {
// //       return ctx.db.supportTicket.findUnique({
// //         where: { id: input.ticketId },
// //         include: {
// //           messages: {
// //             orderBy: { createdAt: "asc" },
// //             include: {
// //               user: {
// //                 select: {
// //                   id: true,
// //                   name: true,
// //                   image: true,
// //                 },
// //               },
// //             },
// //           },
// //           user: {
// //             select: {
// //               id: true,
// //               name: true,
// //               image: true,
// //             },
// //           },
// //         },
// //       });
// //     }),

// //   // Получить все тикеты пользователя
// //   getUserTickets: protectedProcedure.query(async ({ ctx }) => {
// //     return ctx.db.supportTicket.findMany({
// //       where: { userId: ctx.session.user.id },
// //       orderBy: { createdAt: "desc" },
// //     });
// //   }),

// //   // Административные методы

// //   // Получить все тикеты (для админов)
// //   getAllTickets: protectedProcedure
// //     .input(
// //       z.object({
// //         status: z.nativeEnum(TicketStatus).optional(),
// //       })
// //     )
// //     .query(async ({ ctx, input }) => {
// //       // Здесь должна быть проверка на админа
// //       return ctx.db.supportTicket.findMany({
// //         where: {
// //           status: input.status,
// //         },
// //         orderBy: { createdAt: "desc" },
// //         include: {
// //           user: {
// //             select: {
// //               id: true,
// //               name: true,
// //             },
// //           },
// //         },
// //       });
// //     }),

// //   // Ответить на тикет от имени поддержки
// //   addAdminReply: protectedProcedure
// //     .input(
// //       z.object({
// //         ticketId: z.string(),
// //         message: z.string().min(1, "Сообщение не может быть пустым"),
// //       })
// //     )
// //     .mutation(async ({ ctx, input }) => {
// //       // Проверка прав администратора
// //       // if (!ctx.session.user.isAdmin) throw new Error("Недостаточно прав");

// //       // Обновляем статус тикета
// //       await ctx.db.supportTicket.update({
// //         where: { id: input.ticketId },
// //         data: {
// //           status: "Read",
// //           updatedAt: new Date(),
// //         },
// //       });

// //       // Добавляем сообщение от поддержки
// //       return ctx.db.supportTicketMessage.create({
// //         data: {
// //           ticketId: input.ticketId,
// //           userId: ctx.session.user.id,
// //           message: input.message,
// //           supportAgent: true,
// //         },
// //       });
// //     }),

// //   // Изменить статус тикета
// //   updateTicketStatus: protectedProcedure
// //     .input(
// //       z.object({
// //         ticketId: z.string(),
// //         status: z.nativeEnum(TicketStatus),
// //       })
// //     )
// //     .mutation(async ({ ctx, input }) => {
// //       // Проверка прав администратора
// //       // if (!ctx.session.user.isAdmin) throw new Error("Недостаточно прав");

// //       return ctx.db.supportTicket.update({
// //         where: { id: input.ticketId },
// //         data: {
// //           status: input.status,
// //           updatedAt: new Date(),
// //         },
// //       });
// //     }),
// // });
// import { z } from "zod";
// import { createTRPCRouter, protectedProcedure } from "../trpc";
// import { TRPCError } from "@trpc/server";
// import { TicketStatus } from "@prisma/client";

// // Middleware для админов
const adminProcedure = protectedProcedure.use(({ ctx, next }) => {
  if (ctx.session.user.role !== "ADMIN") {
    throw new TRPCError({ code: "FORBIDDEN", message: "Недостаточно прав" });
  }
  return next();
});

// export const ticketRouter = createTRPCRouter({
//   // Создание тикета
//   createTicket: protectedProcedure
//     .input(
//       z.object({
//         subject: z.string().min(1, "Тема обязательна"),
//         description: z.string().min(1, "Описание обязательно"),
//       })
//     )
//     .mutation(async ({ ctx, input }) => {
//       return ctx.db.supportTicket.create({
//         data: {
//           userId: ctx.session.user.id,
//           subject: input.subject,
//           description: input.description,
//           status: TicketStatus.Sent,
//         },
//       });
//     }),

//   // Добавление сообщения
//   addMessage: protectedProcedure
//     .input(
//       z.object({
//         ticketId: z.string().optional(),
//         message: z.string().min(1, "Сообщение обязательно"),
//         subject: z.string().optional(),
//         description: z.string().optional(),
//       })
//     )
//     .mutation(async ({ ctx, input }) => {
//       let ticketId = input.ticketId;

//       if (ticketId) {
//         const existing = await ctx.db.supportTicket.findUnique({
//           where: { id: ticketId },
//         });

//         if (!existing) {
//           ticketId = undefined;
//         }
//       }

//       // Если тикета нет — создаём новый, проверяя наличие темы и описания
//       if (!ticketId) {
//         if (!input.subject || !input.description) {
//           throw new TRPCError({
//             code: "BAD_REQUEST",
//             message: "Тема и описание обязательны при создании нового тикета",
//           });
//         }

//         const newTicket = await ctx.db.supportTicket.create({
//           data: {
//             userId: ctx.session.user.id,
//             subject: input.subject,
//             description: input.description,
//             status: TicketStatus.Sent,
//           },
//         });

//         ticketId = newTicket.id;
//       }

//       const newMessage = await ctx.db.supportTicketMessage.create({
//         data: {
//           ticketId,
//           userId: ctx.session.user.id,
//           message: input.message,
//           supportAgent: false,
//         },
//       });

//       return {
//         message: newMessage,
//         ticketId,
//       };
//     }),

//   // Получить тикет по ID
//   getTicketById: protectedProcedure
//     .input(z.object({ ticketId: z.string() }))
//     .query(async ({ ctx, input }) => {
//       return ctx.db.supportTicket.findUnique({
//         where: { id: input.ticketId },
//         include: {
//           messages: {
//             orderBy: { createdAt: "asc" },
//             include: {
//               user: {
//                 select: {
//                   id: true,
//                   name: true,
//                   image: true,
//                 },
//               },
//             },
//           },
//           user: {
//             select: {
//               id: true,
//               name: true,
//               image: true,
//             },
//           },
//         },
//       });
//     }),

//   // Получить тикеты текущего пользователя
//   getUserTickets: protectedProcedure.query(async ({ ctx }) => {
//     return ctx.db.supportTicket.findMany({
//       where: { userId: ctx.session.user.id },
//       orderBy: { createdAt: "desc" },
//     });
//   }),

//   // Админ: получить все тикеты
//   getAllTickets: adminProcedure
//     .input(z.object({ status: z.nativeEnum(TicketStatus).optional() }))
//     .query(async ({ ctx, input }) => {
//       return ctx.db.supportTicket.findMany({
//         where: {
//           status: input.status,
//         },
//         orderBy: { createdAt: "desc" },
//         include: {
//           user: {
//             select: {
//               id: true,
//               name: true,
//             },
//           },
//         },
//       });
//     }),

//   // Админ: ответить на тикет
//   addAdminReply: adminProcedure
//     .input(
//       z.object({
//         ticketId: z.string(),
//         message: z.string().min(1, "Сообщение не может быть пустым"),
//       })
//     )
//     .mutation(async ({ ctx, input }) => {
//       await ctx.db.supportTicket.update({
//         where: { id: input.ticketId },
//         data: {
//           status: TicketStatus.Read,
//           updatedAt: new Date(),
//         },
//       });

//       return ctx.db.supportTicketMessage.create({
//         data: {
//           ticketId: input.ticketId,
//           userId: ctx.session.user.id,
//           message: input.message,
//           supportAgent: true,
//         },
//       });
//     }),

//   // Админ: изменить статус тикета
  // updateTicketStatus: adminProcedure
  //   .input(
  //     z.object({
  //       ticketId: z.string(),
  //       status: z.nativeEnum(TicketStatus),
  //     })
  //   )
  //   .mutation(async ({ ctx, input }) => {
  //     return ctx.db.supportTicket.update({
  //       where: { id: input.ticketId },
  //       data: {
  //         status: input.status,
  //         updatedAt: new Date(),
  //       },
  //     });
  //   }),
// // });
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { protectedProcedure } from "../trpc";

export const supportTicketRouter = {
  getTicketById: protectedProcedure
    .input(z.object({ ticketId: z.string() }))
    .query(async ({ ctx, input }) => {
      const ticket = await ctx.db.supportTicket.findUnique({
        where: { id: input.ticketId },
        include: {
          messages: {
            orderBy: { createdAt: "asc" },
            include: {
              user: {
                select: {
                  id: true,
                  name: true,
                  image: true,
                },
              },
            },
          },
          user: {
            select: {
              id: true,
              name: true,
              image: true,
            },
          },
        },
      });

      if (!ticket) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Ticket not found" });
      }

      // Если админ, обновляем сообщения пользователя (supportAgent=false) со статусом Sent на Read
      if (ctx.session.user.role === "ADMIN") {
        await ctx.db.supportTicketMessage.updateMany({
          where: {
            ticketId: ticket.id,
            supportAgent: false,
            statusMessage: "Sent",
          },
          data: {
            statusMessage: "Read",
          },
        });
      }

      return ticket;
    }),

  getAllTickets: adminProcedure.query(async ({ ctx }) => {
    const tickets = await ctx.db.supportTicket.findMany({
      where: {
        messages: {
          some: {
            supportAgent: false,
            statusMessage: "Sent",
          },
        },
      },
      orderBy: { updatedAt: "desc" },
      include: {
        user: {
          select: { id: true, name: true },
        },
        messages: {
          orderBy: { createdAt: "desc" },
          take: 1,
        },
      },
    });

    return tickets;
  }),
};

// import { z } from "zod";
// import { protectedProcedure } from "../trpc";
// import { TRPCError } from "@trpc/server";

// export const supportTicketRouter = {
//   // ✔️ Получение тикета
  
//   getTicketById: protectedProcedure
//     .input(z.object({ ticketId: z.string() }))
//     .query(async ({ ctx, input }) => {
//       const ticket = await ctx.db.supportTicket.findUnique({
//         where: { id: input.ticketId },
//         include: {
//           messages: {
//             orderBy: { createdAt: "asc" },
//             include: {
//               user: { select: { id: true, name: true, image: true } },
//             },
//           },
//           user: { select: { id: true, name: true, image: true } },
//         },
//       });

//       if (!ticket) {
//         throw new TRPCError({ code: "NOT_FOUND", message: "Ticket not found" });
//       }

//       if (ctx.session.user.role === "ADMIN") {
//         await ctx.db.supportTicketMessage.updateMany({
//           where: {
//             ticketId: ticket.id,
//             supportAgent: false,
//             statusMessage: "Sent",
//           },
//           data: { statusMessage: "Read" },
//         });
//       }

//       return ticket;
//     }),

//   // ✔️ Добавление нового сообщения
//   addMessage: protectedProcedure
//     .input(
//       z.object({
//         ticketId: z.string(),
//         message: z.string().min(1),
//       })
//     )
//     .mutation(async ({ ctx, input }) => {
//       const userId = ctx.session.user.id;
//       const role = ctx.session.user.role;
//       const supportAgent = role === "ADMIN" || role === "WORKER";

//       await ctx.db.supportTicketMessage.create({
//         data: {
//           ticketId: input.ticketId,
//           userId,
//           message: input.message,
//           supportAgent,
//           statusMessage: supportAgent ? "Read" : "Sent",
//         },
//       });

//       await ctx.db.supportTicket.update({
//         where: { id: input.ticketId },
//         data: {
//           updatedAt: new Date(),
//         },
//       });

//       return { success: true };
//     }),

//   // ✔️ Обновление статуса тикета
//   updateTicketStatus: protectedProcedure
//     .input(
//       z.object({
//         ticketId: z.string(),
//         status: z.enum(["Sent", "Read"]),
//       })
//     )
//     .mutation(async ({ ctx, input }) => {
//       const role = ctx.session.user.role;
//       const supportAgent = role === "ADMIN" || role === "WORKER";

//       await ctx.db.supportTicketMessage.updateMany({
//         where: {
//           ticketId: input.ticketId,
//           supportAgent: !supportAgent,
//           statusMessage: input.status === "Read" ? "Sent" : "Read",
//         },
//         data: {
//           statusMessage: input.status,
//         },
//       });

//       return { success: true };
//     }),

//   // ✔️ Получение всех тикетов
//   getAllTickets: adminProcedure.query(async ({ ctx }) => {
//     const tickets = await ctx.db.supportTicket.findMany({
//       where: {
//         messages: {
//           some: {
//             supportAgent: false,
//             statusMessage: "Sent",
//           },
//         },
//       },
//       orderBy: { updatedAt: "desc" },
//       include: {
//         user: { select: { id: true, name: true } },
//         messages: { orderBy: { createdAt: "desc" }, take: 1 },
//       },
//     });

//     return tickets;
//   }),
// };
