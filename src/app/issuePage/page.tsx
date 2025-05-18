"use client";

import { api } from "~/trpc/react";
import { useState } from "react";
import { useSession } from "next-auth/react";



export default function ProductsHistoryPage() {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState<"issued" | "declined">("issued");
  const [searchTerm, setSearchTerm] = useState("");


  const { data: issuedData, isLoading: issuedLoading } = api.product.getIssuedProducts.useQuery({
    search: searchTerm,
  });

  const { data: declinedData, isLoading: declinedLoading } = api.product.getDeclinedProducts.useQuery({
    search: searchTerm,
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">История товаров</h1>

      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded ${activeTab === "issued" ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab("issued")}
          >
            Выданные товары
          </button>
          <button
            className={`px-4 py-2 rounded ${activeTab === "declined" ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab("declined")}
          >
            Отказанные товары
          </button>
        </div>

        <div className="flex space-x-10">
          <input
            type="text"
            placeholder="Поиск по товару или пользователю"
            className="px-10 py-2 border rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {issuedLoading || declinedLoading ? (
        <div className="text-center py-8">Загрузка...</div>
      ) : activeTab === "issued" ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border">Товар</th>
                <th className="py-2 px-4 border">Количество</th>
                <th className="py-2 px-4 border">Получатель</th>
                <th className="py-2 px-4 border">Дата выдачи</th>
                <th className="py-2 px-4 border">Комментарий</th>
              </tr>
            </thead>
            <tbody>
              {issuedData?.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border">{item.product.name}</td>
                  <td className="py-2 px-4 border text-center">{item.quantity}</td>
                  <td className="py-2 px-4 border">{item.user.name} {item.user.name} </td>
                  <td className="py-2 px-4 border">
                    {new Date(item.issuedAt).toLocaleDateString('ru-RU', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </td>
                  <td className="py-2 px-4 border">{item.comment || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border">Товар</th>
                <th className="py-2 px-4 border">Количество</th>
                <th className="py-2 px-4 border">Пользователь</th>
                <th className="py-2 px-4 border">Дата отказа</th>
                <th className="py-2 px-4 border">Причина</th>
              </tr>
            </thead>
            <tbody>
              {declinedData?.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border">{item.product.name}</td>
                  <td className="py-2 px-4 border text-center">{item.quantity}</td>
                  <td className="py-2 px-4 border">{item.user.name}</td>
                  <td className="py-2 px-4 border">
                    {new Date(item.declinedAt).toLocaleDateString('ru-RU', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </td>
                  <td className="py-2 px-4 border">{item.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}