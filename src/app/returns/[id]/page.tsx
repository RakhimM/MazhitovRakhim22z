
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { api } from "~/trpc/react";
import { toast } from "sonner";

export default function NewReturnPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: session, status } = useSession();
  const [reason, setReason] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const orderId = searchParams.get("orderId");
  const utils = api.useUtils();
  const createReturn = api.return.create.useMutation({
    onSuccess: () => {
      toast.success("Заявка на возврат успешно создана");
      utils.return.getMyReturns.invalidate();
      router.push("/returns");
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!orderId) {
      toast.error("Не указан заказ для возврата");
      return;
    }

    if (reason.length < 10) {
      toast.error("Причина должна содержать минимум 10 символов");
      return;
    }

    setIsSubmitting(true);
   createReturn.mutate({ orderId, reason, quantity });

  };

  if (status === "loading") return <div>Загрузка...</div>;
  if (status === "unauthenticated") {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold mb-4">Необходима авторизация</h2>
        <button 
          onClick={() => router.push(`/auth/signin?callbackUrl=/returns/new?orderId=${orderId}`)}
          className="btn btn-primary"
        >
          Войти в аккаунт
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        {orderId ? `Возврат для заказа #${orderId}` : "Новый возврат"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Причина возврата*</span>
          </label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="textarea textarea-bordered h-32"
            placeholder="Опишите подробно причину возврата (минимум 10 символов)..."
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

        <div className="flex gap-4 pt-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="btn btn-outline flex-1"
          >
            Назад
          </button>
          <button
            type="submit"
            className={`btn btn-primary flex-1 ${isSubmitting ? "loading" : ""}`}
            disabled={isSubmitting || !orderId}
          >
            {isSubmitting ? "Отправка..." : "Подать заявку"}
          </button>
        </div>
      </form>
    </div>
  );
}