"use client";

import { useTransition } from "react";
import { updateCartItemQuantity } from "~/app/api/action/cart";

export default function QuantityControl({
  itemId,
  quantity,
  stock,
}: {itemId: string,
  quantity: number,
  stock: number}) {
  const [isPending, startTransition] = useTransition();

  const handleChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity < 1 || newQuantity > stock) return;

    startTransition(() => {
      updateCartItemQuantity(itemId, newQuantity);
    });
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleChange(-1)}
        disabled={quantity <= 1 || isPending}
        className="px-2 py-1 bg-red-200 text-gray-800 rounded hover:bg-gray-300 disabled:opacity-50"
      >
        –
      </button>
      <span className="min-w-[24px] text-center">{quantity}</span>
      <button
        onClick={() => handleChange(1)}
        disabled={quantity >= stock || isPending}
        className="px-2 py-1 bg-red-200 text-gray-800 rounded hover:bg-gray-300 disabled:opacity-50"
      >
        +
      </button>
    </div>
  );
}
