import React from 'react';

export default async function CategoriesList({
  categories,
}: {
  categories: { id: string; name: string }[];
}) {
  return (
    <div>
      <h1 className="text-2xl font-bold">Категории товаров</h1>
      <ul className="mt-4">
        {categories.map((category) => (
          <li key={category.id} className="py-2">
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
