import { auth } from "~/server/auth";
import { db } from "~/server/db";
import Image from "next/image";
import Link from "next/link";
import { pacifico } from "~/lib/font";
import Pagination from "../ui/pagination";

export default async function HistoryPage({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    size?: string;
  };
}) {

  const session = await auth();

  if (!session?.user) {
    return (
      <main className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">История заказов</h1>
        <p>Вы не авторизованы. <Link href="/api/auth/signin" className="text-blue-500 underline">Войти</Link></p>
      </main>
    );
  } 
  const page = Number(searchParams?.page ?? "1");
  const size = Number(searchParams?.size ?? "10");

  const orders = await db.order.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
    include: {
      items: {
        include: { product: {
          include: {
            images: true,
          },
        }, },
      },
      
    },
    skip: (page - 1) * size,
    take: size,
  });
  const totalCount = await db.order.count({
    where: { userId: session.user.id },
  });

  const totalPages = Math.ceil(totalCount / size);
  return (
    <div>
      <main className="p-6 max-w-4xl mx-auto">
        <h1 className={`${pacifico.className} text-4xl text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600`}>
        История заказов
      </h1>
        {orders.length === 0 ? (
          <p>У вас пока нет заказов.</p>
        ) : (
          <div className="space-y-8">
            {orders.map((order) => (
              <div key={order.id} className="border rounded-lg shadow p-4">
                <div className="mb-2 text-sm text-gray-500">
                  Заказ от {new Date(order.createdAt).toLocaleDateString()}
                </div>
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <img
                        src={item.product.images[0]?.url }
                        alt={item.product.name}
                        width={64}
                        height={64}
                        className="rounded"
                      />
                      <div className="flex-1">
                        <div className="font-semibold">{item.product.name}</div>
                        <div className="text-sm text-gray-600">
                          Кол-во: {item.quantity} × {item.price.toNumber()} ₽ 
                        </div>
                        <div className="text-sm text-gray-600">
                           Заказ: {item.id}
                        </div>
                       
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-right mt-4 font-bold">
                  Сумма заказа: {order.totalAmount.toNumber().toFixed(2)} ₽
                </div>
              </div>
            ))}
          </div>
        )}
         {totalPages >1 &&<Pagination totalPages={totalPages} /> }
      </main>
    </div>
  );
}
