"use client";

import { api } from "~/trpc/react";

export default function AdminReturnsList() {
  const { data: returns, isLoading } = api.return.getAllReturns.useQuery();

  if (isLoading) return <div className="text-center py-4">Загрузка возвратов...</div>;
  if (!returns || returns.length === 0) return <div className="text-center py-4">Нет активных возвратов. Никто не подавал заявку</div>;

  return (
    <div className="mt-8 space-y-6">
      <h2 className="text-2xl font-bold">Все возвраты</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Пользователь</th>
              <th>Заказ</th>
              <th>Причина</th>
              <th>Дата</th>
            </tr>
          </thead>
          <tbody>
            {returns.map((returnItem) => (
              <tr key={returnItem.id}>
                <td>{returnItem.id}</td>
                <td>
                  {returnItem.user.name} ({returnItem.user.email})
                </td>
                <td>№{returnItem.order.id}</td>
                <td className="max-w-xs truncate">{returnItem.reason}</td>
                <td>
          
                </td>
                <td>{new Date(returnItem.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}