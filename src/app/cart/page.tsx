import { auth } from "~/server/auth";
import { db } from "~/server/db";
import Link from "next/link";
import RemoveFromCartButton from "../_components/cart/cardDelete";
import CheckoutButton from "../_components/cart/cardUpdate";
import { pacifico } from "~/lib/font";
import EmptyCart from "../_components/empty/cartEmpty";
import QuantityControl from "../_components/cart/updateQuantity";
import { url } from "inspector";

export default async function CartPage() {
  const session = await auth();

  if (!session?.user) {
    return (
      <p className="p-6">
        Пожалуйста,{" "}
        <Link href="/api/auth/signin" className="text-blue-500 underline">
          войдите в систему
        </Link>
        , чтобы просматривать корзину.
      </p>
    );
  }

  const cartItems = await db.cartItem.findMany({
    where: { userId: session.user.id },
    include: {
      product: {
        include: {
          images: true,
        },
      },
    },
  });

  const total = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.product.price,
    0
  );

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1
        className={`${pacifico.className} text-4xl text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600`}
      >
        Моя корзина
      </h1>

      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row justify-between gap-4 p-6 border border-purple-200 rounded-xl shadow-md hover:shadow-xl transition duration-300 bg-gradient-to-br from-purple-100 via-pink-100 to-pink-200"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.product.images[0]?.url}
                  alt={item.product.name}
                  width={100}
                  height={100}
                  className="rounded"
                />
                <div>
                  <h2 className="text-lg font-semibold text-purple-800">
                    {item.product.name}
                  </h2>
                  <div className="text-sm text-gray-700 flex items-center gap-2">
  Количество:
  <QuantityControl
    itemId={item.id}
    quantity={item.quantity}
    stock={item.product.stock}
  />
</div>
                  <p className="text-sm text-gray-700">
                    Цена за шт: {item.product.price.toString()} ₽
                  </p>
                  <p className="font-medium text-purple-900">
                    Итого: {item.quantity * item.product.price} ₽
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:items-end gap-2 mt-4 md:mt-0">
                <CheckoutButton
                  userId={session.user.id}
                  productId={item.product.id}
                  quantity={item.quantity}
                  price={item.product.price}
                  id={item.id}
                  stock={item.product.stock}
                />
                <RemoveFromCartButton itemId={item.id} />
              </div>
            </div>
          ))}

          <div className="text-right mt-6">
            <h2 className="text-xl font-bold">Общая сумма: {total} ₽</h2>

            {cartItems.length > 1 && (
              <form action="" className="mt-4 inline-block">
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg shadow"
                >
                  Оформить всю корзину
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
