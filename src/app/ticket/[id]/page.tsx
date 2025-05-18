import TicketView from "~/app/_components/ticket/TticketView";
import { auth } from "~/server/auth";
import { db } from "~/server/db";

export default async function Page({ params }: { params: { id: string } }) {
  const session = await auth();
  const role = session?.user.role;
  const user = await db.user.findUnique({ where: { id: session?.user?.id } });

  if (!user) {
    return <div>Пользователь не найден</div>;
  }

  let ticket = await db.supportTicket.findUnique({
    where: { id: params.id },
    include: {
      messages: {
        orderBy: { createdAt: "asc" },
      },
    },
  });

  if (!ticket) {
    ticket = await db.supportTicket.create({
      data: {
        userId: user.id,
      },
      include: {
        messages: {
          orderBy: { createdAt: "asc" },
        },
      },
    });
  }

  const simplifiedMessages = ticket.messages.map((msg) => ({
    message: msg.message,
    supportAgent: msg.supportAgent,
    createdAt: msg.createdAt.toISOString(),
    userId: msg.userId,
  }));

  const hasRead = ticket.messages.some((m) => m.statusMessage === "Read");
  const ticketStatus = hasRead ? "Read" : "Sent";

  return (
    <TicketView
      initialMessages={simplifiedMessages}
      ticketId={ticket.id}
      userId={user.id}
      role={role}
      ticketStatus={ticketStatus} 
    />
  );
}
