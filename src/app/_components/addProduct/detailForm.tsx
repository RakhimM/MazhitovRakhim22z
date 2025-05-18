"use client"
import { useState } from "react";
import { createProduct } from "~/app/api/action/product";

export function AddProductForm({ images, catalog }: { images: { name: string, url: string }[], catalog: any[] }) {
    const [selectedImages, setSelectedImages] = useState<string[]>([]);

    const toggleImage = (url: string) => {
      setSelectedImages((prev: string[]) =>
        prev.includes(url)
          ? prev.filter((u) => u !== url)
          : [...prev, url]
      );
    };
    console.log('Images from Supabase:', images);
  
    return (
        <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold mb-6 text-center">Добавить новый товар</h1>
    
          <form className="space-y-6" action={createProduct}>
            <div>
              <label htmlFor="name" className="label font-semibold">Название товара</label>
              <input
                id="name"
                name="name"
                required
                className="input input-bordered w-full p-3 rounded-md border-gray-300 focus:ring-2 focus:ring-purple-400"
                placeholder="Введите название товара"
              />
            </div>
            <div>
              <label htmlFor="description" className="label font-semibold">Описание</label>
              <textarea
                id="description"
                name="description"
                required
                className="textarea textarea-bordered w-full p-3 rounded-md border-gray-300 focus:ring-2 focus:ring-purple-400"
                placeholder="Введите описание товара"
                rows={4}
              />
            </div>
    
            <div>
              <label htmlFor="price" className="label font-semibold">Цена</label>
              <input
                id="price"
                name="price"
                type="number"
                required
                className="input input-bordered w-full p-3 rounded-md border-gray-300 focus:ring-2 focus:ring-purple-400"
                placeholder="Введите цену товара"
              />
            </div>
                  {/* Изображения */}
                  <div>
              <label className="label font-semibold">Выберите изображения</label>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {images.map((img) => {
                  const isSelected = selectedImages.includes(img.url);
                  return (
                    <div
                      key={img.url}
                      className={`cursor-pointer border-2 rounded-md ${isSelected ? 'border-purple-600' : 'border-gray-300'}`}
                      onClick={() => toggleImage(img.url)}
                    >
                      <img src={img.url} alt={img.name} className="w-full h-24 object-cover rounded-md" />
                    </div>
                  );
                })}
              </div>
    
              {/* Скрытые поля для отправки */}
              {selectedImages.map((url, idx) => (
                <input key={idx} type="hidden" name="imageUrls" value={url} />
              ))}
            </div>
    <div>
      <label htmlFor="stock" className="label font-semibold">Количество на складе</label>
      <input
        id="stock"
        name="stock"
        type="number"
        min={0}
        required
        className="input input-bordered w-full p-3 rounded-md border-gray-300 focus:ring-2 focus:ring-purple-400"
        placeholder="Введите количество товара"
      />
    </div>
            <div>
              <label htmlFor="categoryId" className="label font-semibold">Категория товара</label>
              <select
                id="categoryId"
                name="categoryId"
                required
                className="select select-bordered w-full p-3 rounded-md border-gray-300 focus:ring-2 focus:ring-purple-400"
              >
                <option value="">Выберите категорию</option>
                {catalog.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
    
            <button
              type="submit"
              className="btn btn-primary w-full py-3 rounded-md text-white bg-purple-600 hover:bg-purple-700 transition duration-300"
            >
              Добавить товар
            </button>
          </form>
        </div>
      );
    }