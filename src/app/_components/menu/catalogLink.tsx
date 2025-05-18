import Link from "next/link";

export default function CatalogLink() {
  return (
    <Link
      href="/catalog"
      className="btn btn-outline text-black border-black text-md font-semibold flex items-center gap-2"
    >
      Каталог товаров
    </Link>
  );
}
