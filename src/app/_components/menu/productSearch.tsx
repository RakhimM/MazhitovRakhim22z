"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductSearch() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/product?query=${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="ml-4 flex items-center gap-2">
      <input
        type="text"
        placeholder="Поиск товаров..."
        className="input input-bordered w-48 md:w-64"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-neutral">
        🔍
      </button>
    </form>
  );
}
