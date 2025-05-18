
"use client";

import React, { useState } from "react";
import { api } from "~/trpc/react";
import { useParams, useRouter } from "next/navigation";

export default function OrderPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const [declineReason, setDeclineReason] = useState("");
  const [error, setError] = useState("");

  const { data: order, isLoading, isError } = api.order.getOrder.useQuery(
    { orderId: id },
    { enabled: !!id }
  );

  const issueOrderMutation = api.order.issueOrder.useMutation();
  const declineOrderMutation = api.order.declineOrder.useMutation();

  const handleIssueOrder = () => {
    setError("");
    issueOrderMutation.mutate(
      { orderId: id },
      {
        onSuccess: () => {
          router.push("/productDelivery");
        },
        onError: (err) => {
          setError(err.message);
        },
      }
    );
  };

  const handleDeclineOrder = () => {
    if (declineReason.length < 5) {
      setError("Укажите причину отказа (минимум 5 символов)");
      return;
    }
    
    setError("");
    declineOrderMutation.mutate(
      { orderId: id, reason: declineReason },
      {
        onSuccess: () => {
          router.push("/productDelivery");
        },
        onError: (err) => {
          setError(err.message);
        },
      }
    );
  };

  if (isLoading) {
    return (
      <div className="p-6 flex justify-center">
        <p>Загрузка данных о заказе...</p>
      </div>
    );
  }

  if (isError || !order) {
    return (
      <div className="p-6 text-red-500">
        Ошибка при загрузке данных заказа
      </div>
    );
  }

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Заказ №{order.id} - {order.user.surname} {order.user.name}
      </h1>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Товары в заказе</h2>
        
        <div className="divide-y">
          {order.items.map((item) => (
            <div key={item.product.id} className="py-3 flex justify-between">
              <div>
                <p className="font-medium">{item.product.name}</p>
                <p className="text-sm text-gray-600">
                  {item.quantity} × {item.product.price} ₽ = {item.quantity * item.product.price} ₽
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-3">
          <button
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 disabled:bg-gray-400"
            onClick={handleIssueOrder}
            
          >Выдан заказ
          </button>

          <div className="mt-4">
            <textarea
              className="w-full p-3 border rounded"
              placeholder="Причина отказа (минимум 5 символов)"
              value={declineReason}
              onChange={(e) => setDeclineReason(e.target.value)}
              rows={3}
            />
            <button
              className="w-full mt-2 bg-red-600 text-white py-2 rounded hover:bg-red-700 disabled:bg-gray-400"
              onClick={handleDeclineOrder}
            > Отказ от заказа
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}