import Link from "next/link";
import Image from "next/image";
import { db } from "~/server/db";

export default async function EmptyCart() {
  const placeholderImage = await db.placeholderImage.findFirst({
    where: { name: "Корзина пустая" },
  });

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8 text-center">
      {placeholderImage && (
        <div className="relative w-full max-w-[500px] h-[400px]">
          <Image
            src={placeholderImage.imageUrl}
            alt="Пустая корзина"
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
        Корзина пуста.{" "}
        <Link 
          href="/catalog" 
          className="text-blue-600 underline hover:text-blue-800 font-medium"
        >
          Перейти в каталог
        </Link>
      </p>
    </div>
  );
}