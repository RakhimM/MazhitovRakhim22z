"use client";

import { startTransition, useState } from "react";
import { addProductCart } from "~/app/api/action/product";

export default function ProductPage({ productId, stock }: { productId: string, stock: number }) {
  const [quantity, setQuantity] = useState(1);
  const increase = () => {
    if (quantity < stock) {
      startTransition(() => setQuantity((q) => q + 1));
    }
  };
  const decrease = () => {
    if (quantity > 1) {
      startTransition(() => setQuantity((q) => q - 1));
    }
  };

  return (
    <form
      action={addProductCart}
      className="mt-6 flex flex-col items-center gap-6 rounded-xl border p-6 shadow-md"
    >
      <input type="hidden" name="productId" value={productId} />
      <input type="hidden" name="quantity" value={quantity} />

      <div className="flex flex-col items-center gap-2">
        <span className="text-lg font-medium text-gray-700">Количество</span>
        <div className="flex items-center rounded-full border bg-white px-4 py-2 shadow-sm">
          <button
            type="button"
            onClick={decrease}
            className="text-xl font-bold text-gray-600 hover:text-black focus:outline-none"
          >
            −
          </button>
          <span className="mx-4 w-6 text-center text-lg font-medium">{quantity}</span>
          <button
            type="button"
            onClick={increase}
            className="text-xl font-bold text-gray-600 hover:text-black focus:outline-none"
          >
            +
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="rounded-full bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
      >
        Добавить в корзину
      </button>
    </form>
  );
}