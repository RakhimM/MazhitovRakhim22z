
"use client";

import React, { useState } from "react";
import { deleteProduct } from "~/app/api/action/product";
import ConfirmDialog from "./confirmDialog";

export default function DeleteButton({ productId }: { productId: string }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const confirmSave = async () => {
    setShowConfirm(false);

    const formData = new FormData();
    formData.append("id", productId);

    await deleteProduct(formData);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirm(true);
  };
  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-4">
      <input type="hidden" name="id" value={productId} />
      <button
        type="submit"
        className="btn btn-error py-2 px-6 text-lg"
        style={{
          width: "auto",
          paddingLeft: "calc(1.5rem + 140px)",
          paddingRight: "calc(1.5rem + 140px)",
        }}
      >
        Удалить
      </button>
      {showConfirm && (
        <ConfirmDialog
          message="Вы уверены, что хотите удалить данный товар?"
          onConfirm={confirmSave}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </form>
  );
}
