import Link from "next/link";

export function ProductCard({ product, pacifico }: { product: any; pacifico: any }) {
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
}