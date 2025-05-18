import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "~/server/auth";
import { db } from "~/server/db";

export default async function TicketListPage() {

  const session = await auth();
  const user = await db.user.findUnique({ where: { id: session?.user?.id } });
  if (!user) return <div>Unauthorized</div>;
  if (user.role === "USER") {
    const ticket = await db.supportTicket.findFirst({
      where: { userId: user.id },
      orderBy: { createdAt: "asc" },
    });

    redirect(ticket ? `/ticket/${ticket.id}` : "/ticket/new");
  }
  
  const tickets = await db.supportTicket.findMany({
    include: {
      user: true,
      messages: {
        orderBy: { createdAt: "desc" },
        take: 1,
      },
    },
  });
  const unread = tickets.filter(
    (t) => t.messages[0]?.statusMessage === "Sent" && !t.messages[0]?.supportAgent
  );
  const read = tickets.filter((t) => !unread.includes(t));

  const sortedTickets = [...unread, ...read];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Обращения пользователей</h1>
      <ul className="space-y-4">
        {sortedTickets.map((ticket) => {
          const lastMessage = ticket.messages[0];
          return (
            <li key={ticket.id}>
              <Link
                href={`/ticket/${ticket.id}`}
                className={`flex items-start justify-between gap-4 p-4 shadow-md rounded-lg transition w-full ${
                  lastMessage?.statusMessage === "Sent" && !lastMessage.supportAgent
                    ? "bg-yellow-100 hover:bg-yellow-200"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1">
                  </div>
                  <p className="text-sm text-gray-600 truncate">
                    {lastMessage?.message || "Нет сообщений"}
                  </p>
                  <span className="text-xs text-gray-400">
                    {new Date(lastMessage?.createdAt ?? ticket.createdAt).toLocaleString()}
                  </span>
                </div>
                <div className="text-right text-sm text-gray-500 whitespace-nowrap ml-2">
                  {ticket.user?.name || "Пользователь магазина"}
                </div>
                <div className="text-right text-sm text-gray-500 whitespace-nowrap ml-2">
                     {ticket.user.name   }
                </div>
                <div className="text-right text-sm text-gray-500 whitespace-nowrap ml-2">
                     {ticket.user.email  }
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
