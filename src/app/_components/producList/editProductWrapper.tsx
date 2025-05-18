 'use client';

import { Category } from "@prisma/client";
import { useState } from "react";
import EditProductForm from "./editProductForm";


export default function EditProductWrapper({
  product,
  categories,
  availableImages,
}: {
  product: any;
  categories: Category[];
  availableImages: any; 
}) {
  const [editing, setEditing] = useState(false);

  return (
    <div className="flex flex-col items-center mb-6">
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setEditing((prev) => !prev)}
          className="btn btn-primary py-2 px-6 text-lg"
        >
          {editing ? "Скрыть форму редактирования" : "Редактировать информацию о товаре"}
        </button>
      </div>

      {editing && (
        <div className="mt-4 w-full max-w-2xl">
  <EditProductForm product={product} categories={categories} availableImages={availableImages} />
        </div>
      )}
    </div>
  );
}
