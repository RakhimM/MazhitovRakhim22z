'use client';

import Link from "next/link";

export default function AddProductButton() {
  
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-outline text-black border-black text-md font-semibold flex items-center gap-2">
        ➕ Добавить . . .
      </div>

      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
          <Link href="/addProduct">Добавить товар</Link>
        </li>
        <li>
          <Link href="/addCatalog">Добавить каталог</Link>
        </li>
      </ul>
    </div>
  );
}
