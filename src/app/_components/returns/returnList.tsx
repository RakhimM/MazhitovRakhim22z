"use client";

import { api } from "~/trpc/react";
import { useState, useEffect } from "react";
import EmptyReturns from "../empty/returnsEmpty";

interface ReturnsListProps {
  placeholderImage: {
    id: string;
    name: string;
    imageUrl: string;
  } | null;
}

export default function ReturnsList({ placeholderImage }: ReturnsListProps) {
  const [isClient, setIsClient] = useState(false);
  const { data: returns, isLoading: isReturnsLoading, refetch: refetchReturns } = api.return.getMyReturns.useQuery();
  const { data: userOrders, isLoading: isOrdersLoading } = api.order.getUserOrders.useQuery();

  const [showForm, setShowForm] = useState(false);
  const [reason, setReason] = useState("");
  const [selectedOrderId, setSelectedOrderId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  const createReturn = api.return.create.useMutation({
    onSuccess: async () => {
      setShowForm(false);
      setReason("");
      setError("");
      await refetchReturns();
    },
    onError: (err) => {
      setError(err.message);
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reason.trim()) {
      setError("Укажите причину возврата");
      return;
    }
    if (!selectedOrderId) {
      setError("Выберите заказ");
      return;
    }

    setIsSubmitting(true);
    createReturn.mutate({
      orderId: selectedOrderId, reason,
      quantity
    });
  };

  if (!isClient || isReturnsLoading || isOrdersLoading) {
    return <div className="text-center py-4">Загрузка...</div>;
  }

  return (
    <div className="mt-8 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Мои возвраты</h2>
        {!showForm && (
          <button 
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Подать заявку на возврат
          </button>
        )}
      </div>

      {showForm && (
        <div className="p-6 border rounded-lg bg-gray-50">
          <h3 className="text-xl font-semibold mb-4">Новая заявка на возврат</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Выберите заказ</span>
              </label>
              <select
                value={selectedOrderId}
                onChange={(e) => setSelectedOrderId(e.target.value)}
                className="select select-bordered w-full"
                required
              >
                <option value="">-- Выберите заказ --</option>
                {userOrders?.map(order => (
                  <option 
                    key={order.id}
                    value={order.id}
                  >
                    Заказ #{order.id} - {new Date(order.createdAt).toLocaleDateString()}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Причина возврата</span>
              </label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="textarea textarea-bordered h-32"
                placeholder="Опишите причину возврата..."
                required
                minLength={10}
              />
              
            </div>
                    <div className="form-control">
  <label className="label">
    <span className="label-text">Количество*</span>
  </label>
  <input
    type="number"
    value={quantity}
    onChange={(e) => setQuantity(Number(e.target.value))}
    min={1}
    className="input input-bordered"
    required
  />
</div>

            {error && <div className="text-red-500">{error}</div>}

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="btn btn-outline flex-1"
              >
                Отмена
              </button>
              <button
                type="submit"
                className={`btn btn-primary flex-1 ${isSubmitting ? "loading" : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Отправка..." : "Отправить заявку"}
              </button>
            </div>
          </form>
        </div>
      )}

      {userOrders?.length === 0 && (
        <EmptyReturns placeholderImage={placeholderImage} />
      )}

      {(!returns || returns.length === 0) && !showForm && userOrders && userOrders.length > 0 ? (

        <EmptyReturns placeholderImage={placeholderImage} />

      ) : (
        returns?.map((returnItem) => (
          <div key={returnItem.id} className="p-4 border rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">Заказ №{returnItem.order.id}</h3>
                <p className="text-sm text-gray-500">
                  Сумма: {returnItem.order.totalAmount.toString()} ₽
                </p>
                <p className="text-sm text-gray-500">
                  Дата: {new Date(returnItem.createdAt).toLocaleDateString()}
                </p>
              </div>

            </div>
            <div className="mt-2">
              <p className="text-gray-700">{returnItem.reason}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}