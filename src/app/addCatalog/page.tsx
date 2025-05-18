"use client"; 
import React from "react";
import { createCatalog } from "../api/action/catalog";

export default function AddCatalogPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Добавить каталог</h1>
      <form action={createCatalog} className="space-y-4">
        <div>
          <label className="block mb-1" htmlFor="name">Название</label>
          <input
          id="name"
          type="text"
          name="name"
          required className="input input-bordered w-full border border-gray-300 rounded px-3 py-2"
          placeholder="Введите название"
        />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Добавить
        </button>
      </form>
    </div>
  );
}
