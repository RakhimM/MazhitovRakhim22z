import { db } from "~/server/db";
import Link from "next/link"; 
import { montserrat, pacifico } from "~/lib/font";
import { ProductCard } from "../_components/producList/productCard";

export default async function Page({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query || "";

  const products = await db.product.findMany({
    where: {
      name: {
        contains: query,
        mode: "insensitive",
      },
    },
    include: {
      images: true,
    },
  });

  return (
    <main className={`${montserrat.variable} font-sans p-4`}>
      <h1 className={`${pacifico.className} text-4xl text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600`}>
        Результаты поиска: {query}
      </h1>
      {products.length === 0 && <p>Ничего не найдено</p>}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          // <li key={product.id} className="border p-4 rounded-md">
          //   <Link href={`/product/${product.id}`} passHref>
          //     <div className="cursor-pointer">
          //       <h2 className="font-semibold">{product.name}</h2>
          //       <p className="text-2xl font-semibold text-blue-600">
          //         {Number(product.price).toLocaleString("ru-RU", {
          //           style: "currency",
          //           currency: "RUB",
          //         })}
          //       </p>
          //       <p>{product.description}</p>
          //     </div>
          //   </Link>
          // </li>
          <ProductCard key={product.id} product={product} pacifico={pacifico} />
        ))}
      </div>
    </main>
  );
  // return (
  //   <div className={`${montserrat.variable} font-sans p-4`}>
  //     <h1
  //       className={`${pacifico.className} text-4xl text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600`}
  //     >
  //       Наши Товары
  //     </h1>

  //     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  //     {products.map((product: any) => (
  //         <ProductCard key={product.id} product={product} pacifico={pacifico} />
  //       ))}
  //     </div>
  //     {/* {page > 1 && <Pagination totalPages={pages} />} */}
  //   </div>
  // );
}
