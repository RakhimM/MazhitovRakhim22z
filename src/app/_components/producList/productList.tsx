
import React from "react";
import Link from "next/link";
import { db } from "~/server/db";
import { montserrat, pacifico } from "~/lib/font";
import { redirect } from "next/navigation";
import { auth } from "~/server/auth";
import Pagination from "~/app/ui/pagination";
import { ProductCard } from "./productCard";

export async function ProductList(searchParams?: { size?: string; page?: string; userId?: string;}) {
  const count = await db.user.count();
  const session = await auth();

  if (!session?.user?.email) {
    redirect("/api/auth/signin");
  }

  const user = await db.user.findUnique({
    where: {
      email: session.user.email,
    },
    select: {
      id: true,
      name: true,
      surname: true,
    },
  });

  if (!user?.name || !user?.surname) {
    redirect(`/profile/${user?.id}`);
  }
  const page = Number(searchParams?.page ?? "1");
  const size = Number(searchParams?.size ?? "1");
  const pages = Math.ceil(count / size);

  const products = await db.product.findMany({
    include: {
      images: true,
    },
  });

  if (products.length === 0) {
    return (
      <p className={`text-center text-gray-500 ${montserrat.className}`}>
        Нет доступных товаров
      </p>
    );
  }

  return (
    <div className={`${montserrat.variable} font-sans p-4`}>
      <h1
        className={`${pacifico.className} text-4xl text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600`}
      >
        Наши Товары
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product: any) => (
          <ProductCard key={product.id} product={product} pacifico={pacifico} />
        ))}
      </div>
      {page > 1 && <Pagination totalPages={pages} />}
    </div>
  );
}
