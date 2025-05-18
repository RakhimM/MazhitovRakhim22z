import { db } from "~/server/db";
import Link from "next/link";
import { pacifico } from "~/lib/font";
import { auth } from "~/server/auth";
import { redirect } from "next/navigation";

export default async function CategoriesPage() {
  const categories = await db.category.findMany();
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
  return (
<div className="min-h-screen bg-white py-12 px-4">
  <div className="container mx-auto">
    <div className="flex justify-center items-center mb-10 gap-2">
      <span className="text-4xl">🛍️</span>
      <h1
        className={`${pacifico.className} text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600`}
      >
        Каталог категорий товара
      </h1>
    </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/catalog/${category.id}`}
              className="block rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center border border-purple-200 hover:border-purple-400
              bg-gradient-to-br from-purple-100 via-pink-100 to-pink-200"
            >
              <div className="text-2xl font-semibold text-purple-800 mb-2">
                {category.name}
              </div>
              <p className="text-sm text-gray-700">Посмотреть товары</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
