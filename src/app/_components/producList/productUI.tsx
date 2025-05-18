'use client';

import { useState } from "react";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";
import BackButton from "../official/back";

export default function ProductDetails({ product }: { product: any }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter(); 

  if (!product) return notFound();

  const images = product.images?.length
    ? product.images
    : [{ url: product.imageUrl || "/placeholder-product.jpg" }];

  return (
    <div className="container mx-auto py-8 px-6 max-w-3xl">
        <div className="mb-8">
        <BackButton />
      </div>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">{product.name}</h1>

      <div className="relative w-full overflow-hidden rounded-lg bg-gray-100 aspect-[4/3] mb-6">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((img: any, idx: number) => (
            <img
              key={idx}
              src={img.url}
              alt={product.name}
              className="w-full h-full object-cover shrink-0 grow-0 basis-full"
            />
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
              }
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 px-2 py-1 rounded-full shadow"
            >
              ‹
            </button>
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % images.length)
              }
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 px-2 py-1 rounded-full shadow"
            >
              ›
            </button>
          </>
        )}
      </div>

      <p className="text-lg text-gray-800 mb-4">{product.description}</p>

      <div className="flex items-center justify-between mb-6">
        <p className="text-2xl font-semibold text-blue-600">
          {Number(product.price.toString()).toLocaleString("ru-RU", {
            style: "currency",
            currency: "RUB",
          })}
        </p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
        <p className="text-sm text-gray-500 mb-1">
          <strong>Категория:</strong> <span className="font-medium">{product.category.name}</span>
        </p>
        <p className="text-sm text-gray-500 mb-1">
          <strong>На складе:</strong> <span className="font-medium">{product.stock}</span>
        </p>
        <p className="text-sm text-gray-500 mb-1">
          <strong>Создано:</strong>{" "}
          {new Date(product.createdAt).toLocaleDateString("ru-RU", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <p className="text-sm text-gray-500 mb-4">
          <strong>Обновлено:</strong>{" "}
          {new Date(product.updatedAt).toLocaleDateString("ru-RU", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}
