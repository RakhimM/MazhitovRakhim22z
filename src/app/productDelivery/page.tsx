
import React from "react";
import Link from "next/link";
import { db } from "~/server/db";

export default async function Page() {
  const usersWithOrders = await db.user.findMany({
    where: {
      orders: { some: {} },
    },
    include: {
      orders: {
        include: {
          items: {
            include: {
              product: true,
            },
          },
        },
      },
    },
  });

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Выдача товаров</h1>
      <div className="space-y-4">
        {usersWithOrders.map((user) =>
          user.orders.map((order) => (
            <Link
              key={order.id}
              href={`/productDelivery/${order.id}`}
              className="block border rounded-lg p-4 hover:bg-gray-100 transition"
            >
              <p className="font-semibold">
                {user.surname ?? ""} {user.name ?? ""}
              </p>
              <p className="text-sm text-gray-500">
                Email: {user.email ?? "Не указан"}
              </p>
              <p className="text-sm text-gray-500">Заказ №{order.id}</p>
              <p className="text-sm text-gray-500">
                Товаров: {order.items.reduce((sum, item) => sum + item.quantity, 0)}
              </p>
            </Link>
          ))
        )}
      </div>
    </main>
  );
}
