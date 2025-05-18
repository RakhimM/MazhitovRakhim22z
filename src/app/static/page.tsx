import { db } from "~/server/db";
import { auth } from "~/server/auth";
import { StatCard } from "../_components/static/statCard";
import { TopUsersTable } from "../_components/static/usersTopTable";

export default async function AdminStatisticsPage() {
    const session = await auth();
    const user = session?.user;

  const [userCount, productCount, orderCount, totalRevenue, returnsCount, reviewCount] = await Promise.all([
    db.user.count(),
    db.product.count(),
    db.order.count(),
    db.order.aggregate({
      _sum: {
        totalAmount: true,
      },
    }),
    db.return.count(),
    db.review.count(),
  ]);

  const topUsers = await db.user.findMany({
    orderBy: { totalSpent: "desc" },
    take: 5,
    select: {
      id: true,
      name: true,
      surname: true,
      totalSpent: true,
      purchasedItems: true,
    },
  });

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Статистика администратора</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <StatCard label="Пользователи" value={userCount} />
        <StatCard label="Товары" value={productCount} />
        <StatCard label="Заказы" value={orderCount} />
        <StatCard label="Общий доход" value={`${totalRevenue._sum.totalAmount ?? 0} ₽`} />
        <StatCard label="Возвраты" value={returnsCount} />
        <StatCard label="Отзывы" value={reviewCount} />
      </div>

 <TopUsersTable users={topUsers} />
    </main>
  );
}
