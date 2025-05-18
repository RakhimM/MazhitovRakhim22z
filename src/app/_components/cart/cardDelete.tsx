 "use client";

import { deleteCartProduct } from "~/app/api/action/cart";

export default function RemoveFromCartButton({ itemId }: { itemId: string }) {
  return (
    <form action={deleteCartProduct}>
      <input type="hidden" name="id" value={itemId} />
      <button
        type="submit"
        className="w-40 py-2 px-4 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
      >
        Удалить
      </button>
    </form>
  );
}
