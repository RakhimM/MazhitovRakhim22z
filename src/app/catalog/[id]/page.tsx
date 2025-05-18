
// import { db } from "~/server/db";

// export default async function Page({
//   params,
// }: {
//   params: { categoryId: string };
// }) {

//   if (!params?.categoryId) {
//     return <div>Некорректный ID категории</div>;
//   }

//   const category = await db.category.findUnique({
//     where: { id: params.categoryId },
//   });

//   if (!category) return <div>Категория не найдена</div>;

//   const products = await db.product.findMany({
//     where: { categoryId: params.categoryId },
//   });

//   return (
//     <div>
//       <h1>{category.name}</h1>
//       {products.map((p) => (
//         <div key={p.id}>{p.name}</div>
//       ))}
//     </div>
//   );
// }

// app/catalog/[categoryId]/page.tsx
// app/catalog/[categoryId]/page.tsx
// app/catalog/[categoryId]/page.tsx
 import { db } from "~/server/db";
 import Link from "next/link";
import { montserrat, pacifico } from "~/lib/font";
import BackButton from "~/app/_components/official/back";
// import { Pacifico, Montserrat } from 'next/font/google';
// import { montserrat, pacifico } from "~/lib/font";

// export default async function CategoryProductsPage(  props: { params: Promise<{ id: string }> }) {
//   // Добавим лог для отладки
//   console.log('Received categoryId:', params.categoryId);

//   if (!params?.categoryId) {
//     console.error('Category ID is missing');
//     return (
//       <div className={`${montserrat.className} text-center p-8`}>
//         <h2 className="text-2xl text-red-500 mb-4">ID категории не указан</h2>
//         <Link href="/catalog" className="text-purple-600 underline">
//           Вернуться в каталог
//         </Link>
//       </div>
//     );
//   }

//   try {
//     // Получаем сначала категорию (только для названия)
//     const category = await db.category.findUnique({
//       where: { id: params.categoryId },
//     });

//     if (!category) {
//       console.error('Category not found for ID:', params.categoryId);
//       return (
//         <div className={`${montserrat.className} text-center p-8`}>
//           <h2 className="text-2xl text-red-500 mb-4">Категория не найдена</h2>
//           <Link href="/catalog" className="text-purple-600 underline">
//             Вернуться в каталог
//           </Link>
//         </div>
//       );
//     }

//     // Получаем товары из таблицы Product с фильтрацией по categoryId
//     const products = await db.product.findMany({
//       where: { 
//         categoryId: params.categoryId 
//       },
//       orderBy: {
//         createdAt: 'desc', // Сортировка по дате создания (новые сначала)
//       },
//       include: {
//         category: true, // Включаем информацию о категории
//       },
//     });

//     return (
//       <div className={`${montserrat.variable} font-sans min-h-screen p-4 bg-white`}>
//         <div className="container mx-auto">
//           <div className="mb-8">
//             <Link 
//               href="/catalog" 
//               className="text-purple-600 hover:text-purple-800 transition-colors flex items-center"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
//               </svg>
//               Назад к категориям
//             </Link>
            
//             <h1 className={`${pacifico.className} text-4xl text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600`}>
//               {category.name}
//             </h1>
//           </div>

//           {products.length === 0 ? (
//             <div className="text-center py-12">
//               <p className="text-gray-500 text-lg">В этой категории пока нет товаров</p>
//               <Link 
//                 href="/catalog" 
//                 className="mt-4 inline-block text-purple-600 underline hover:text-purple-800"
//               >
//                 Вернуться в каталог
//               </Link>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//               {products.map((product) => (
//                 <div
//                   key={product.id}
//                   className="rounded-xl border-2 border-gray-100 p-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-purple-200"
//                 >
//                   <Link href={`/product/${product.id}`} className="block">
//                     <div className="aspect-square relative w-full mb-4 rounded-lg overflow-hidden bg-gray-50">
//                       <img
//                         src={product.imageUrl || "/placeholder-product.jpg"}
//                         alt={product.name}
//                         className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//                       />
//                     </div>
//                     <h2 className={`text-xl font-bold line-clamp-2 hover:text-purple-600 transition-colors font-serif`}>
//                       {product.name}
//                     </h2>
//                     <p className={`text-sm text-gray-600 line-clamp-3 mb-3 mt-2 italic`}>
//                       {product.description}
//                     </p>
//                     <p className={`font-bold text-purple-600 text-lg ${pacifico.className}`}>
//                       {product.price.toFixed(2)} ₽
//                     </p>
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   } catch (error) {
//     console.error("Ошибка при загрузке категории:", error);
//     return (
//       <div className={`${montserrat.className} text-center p-8`}>
//         <h2 className="text-2xl text-red-500 mb-4">Произошла ошибка при загрузке категории</h2>
//         <Link href="/catalog" className="text-purple-600 underline">
//           Вернуться в каталог
//         </Link>
//       </div>
//     );
//   }
// }
// export default async function CategoryProductsPage(
//   props: { params: Promise<{ id: string }> }
// ) {
//   const params = await props.params;

//   if (!params?.id) {
//     console.error('Category ID is missing');
//   }

//   const category = await db.category.findUnique({
//     where: { id: params.id },
//   });

//   const products = await db.product.findMany({
//     where: {
//       categoryId: params.id,
//     },
//   });

//   return (
//     <div className={`${montserrat.variable} font-sans min-h-screen p-4 bg-white`}>
//       <div className="container mx-auto">
//         <div className="mb-8">
//           <Link 
//             href="/catalog" 
//             className="text-purple-600 hover:text-purple-800 transition-colors flex items-center"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
//               <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
//             </svg>
//             Назад к категориям
//           </Link>
          
//           <h1 className={`${pacifico.className} text-4xl text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600`}>
//           </h1>
//         </div>
//         <h1 className={`${pacifico.className} text-4xl text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600`}>
//         {category?.name}
//       </h1>
//         {products.length === 0 ? (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">В этой категории пока нет товаров</p>
//             <Link 
//               href="/catalog" 
//               className="mt-4 inline-block text-purple-600 underline hover:text-purple-800"
//             >
//               Вернуться в каталог
//             </Link>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//             {products.map((product) => (
//               <div
//                 key={product.id}
//                 className="rounded-xl border-2 border-gray-100 p-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-purple-200"
//               >
//                 <Link href={`/product/${product.id}`} className="block">
//                   <div className="aspect-square relative w-full mb-4 rounded-lg overflow-hidden bg-gray-50">
//                     <img
//                       src={product.imageUrl || "/placeholder-product.jpg"}
//                       alt={product.name}
//                       className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//                     />
//                   </div>
//                   <h2 className={`text-xl font-bold line-clamp-2 hover:text-purple-600 transition-colors font-serif`}>
//                     {product.name}
//                   </h2>
//                   <p className={`text-sm text-gray-600 line-clamp-3 mb-3 mt-2 italic`}>
//                     {product.description}
//                   </p>
//                   <p className={`font-bold text-purple-600 text-lg ${pacifico.className}`}>
//                     {product.price.toFixed(2)} ₽
//                   </p>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// } 
export default async function CategoryProductsPage(
  props: { params: { id: string } }
) {
  const { id } = props.params;

  if (!id) {
    console.error('Category ID is missing');
    return null; // Return early to avoid fetching with undefined
  }

  const category = await db.category.findUnique({
    where: { id },
  });

  const products = await db.product.findMany({
    where: {
      categoryId: id,
    },
    include: {
      images: true,
    },
  });
  // const router = useRouter(); // ✅ useRouter из next/navigation

  return (
    <div className={`${montserrat.variable} font-sans min-h-screen p-4 bg-white`}>
      <div className="container mx-auto">
      <div className="mb-8">
        <BackButton />
      </div>
      {/* <div className="mb-8">
        <button
          onClick={() => router.back()} // <== заменяем Link на кнопку
          className="text-purple-600 hover:text-purple-800 transition-colors flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Назад
        </button>
      </div> */}

        <h1 className={`${pacifico.className} text-4xl text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600`}>
          {category?.name ?? "Категория не найдена"}
        </h1>

        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">В этой категории пока нет товаров</p>
            <Link 
              href="/catalog" 
              className="mt-4 inline-block text-purple-600 underline hover:text-purple-800"
            >
              Вернуться в каталог
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* {products.map((product) => (
              <div
                key={product.id}
                className="rounded-xl border-2 border-gray-100 p-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-purple-200"
              >
                <Link href={`/product/${product.id}`} className="block">
                  <div className="aspect-square relative w-full mb-4 rounded-lg overflow-hidden bg-gray-50">
                    <img
                      src={imageUrl }
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <h2 className="text-xl font-bold line-clamp-2 hover:text-purple-600 transition-colors font-serif">
                    {product.name}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-3 mb-3 mt-2 italic">
                    {product.description}
                  </p>
                  <p className={`font-bold text-purple-600 text-lg ${pacifico.className}`}>
                    {product.price.toFixed(2)} ₽
                  </p>
                </Link>
              </div>
            ))} */}
                  {products.map((product) => {
  const imageUrl = product.images[0]?.url || "/placeholder-product.jpg";
  const isOutOfStock = product.stock === 0;

  return (
    <Link
      key={product.id}
      href={`/product/${product.id}`}
      className={`
        rounded-xl border border-gray-200 p-5 shadow-sm transition-all duration-300 block 
        hover:shadow-lg hover:border-purple-200
        ${isOutOfStock ? "opacity-50 bg-gray-100" : ""}
      `}
    >
      <div className="aspect-square relative w-full mb-4 rounded-lg overflow-hidden bg-gray-50">
        <img
          src={imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <h2 className="text-xl font-bold line-clamp-2 hover:text-purple-600 transition-colors font-serif">
        {product.name}
      </h2>
      <p className="text-sm text-gray-600 line-clamp-3 mb-3 mt-2 italic">
        {product.description}
      </p>
      <p className={`font-bold text-purple-600 text-lg ${pacifico.className}`}>
        {product.price.toFixed(2)} ₽
      </p>
      {isOutOfStock && (
        <p className="text-sm text-red-500 font-semibold mt-1">Нет в наличии</p>
      )}
    </Link>
  );
})}
          </div>
        )}
      </div>
    </div>
  );
}
