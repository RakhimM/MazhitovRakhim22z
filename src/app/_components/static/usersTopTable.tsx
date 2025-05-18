import { Decimal } from "@prisma/client/runtime/library";

export function TopUsersTable({
  users,
}: {
  users: {
    id: string;
    name: string | null;
    surname: string | null;
    totalSpent: Decimal;
    purchasedItems: number;
  }[];
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Топ пользователей по покупкам</h2>
      <div className="overflow-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">Имя</th>
              <th className="px-4 py-2 border">Фамилия</th>
              <th className="px-4 py-2 border">Потрачено</th>
              <th className="px-4 py-2 border">Куплено товаров</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="text-center">
                <td className="px-4 py-2 border">{user.name ?? "-"}</td>
                <td className="px-4 py-2 border">{user.surname ?? "-"}</td>
                <td className="px-4 py-2 border">{user.totalSpent.toString()} ₽</td>
                <td className="px-4 py-2 border">{user.purchasedItems}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
