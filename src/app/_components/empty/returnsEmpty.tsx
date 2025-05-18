"use client";

import Link from "next/link";
import Image from "next/image";

export default function EmptyReturns({ placeholderImage }: { placeholderImage?: {
  id: string;
  name: string;
  imageUrl: string;
} | null;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8 text-center">
      {placeholderImage && (
        <div className="relative w-full max-w-[500px] h-[400px]">
          <Image
            src={placeholderImage.imageUrl}
            alt="Пустой список возвратов"
            fill
            style={{
              objectFit: 'contain',
            }}
            className="drop-shadow-lg"
            unoptimized={true}
            priority
          />
        </div>
      )}
      <p className="text-xl text-gray-700 mt-4">
        Список возвратов пуст.{" "}
        <Link 
          href="/cart" 
          className="text-blue-600 underline hover:text-blue-800 font-medium"
        >
          Посмотреть мои заказы
        </Link>
      </p>
    </div>
  );
}