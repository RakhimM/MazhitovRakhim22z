'use client';

import { useState } from "react";
import ConfirmDialog from "./confirmDialog";
import { updateProduct } from "~/app/api/action/product";

export default function EditProductForm({
  product,
  categories,
  availableImages,
}: {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    categoryId: string;
  };
  categories: {
    id: string;
    name: string;
  }[];
  availableImages: {
    name: string;
    url: string;
  }[];
}){
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [imageUrl, setImageUrl] = useState(product.imageUrl);
  const [categoryId, setCategoryId] = useState(product.categoryId);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirm(true);
  };

  const confirmSave = async () => {
    setShowConfirm(false);

    const formData = new FormData();
    formData.append("id", product.id);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price.toString());
    formData.append("imageUrl", imageUrl);
    formData.append("categoryId", categoryId);

    await updateProduct(formData);
  };
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const toggleImage = (url: string) => {
    setSelectedImages((prev: string[]) =>
      prev.includes(url)
        ? prev.filter((u) => u !== url)
        : [...prev, url]
    );
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-md max-w-2xl mx-auto mb-8 space-y-4"
    >
      <h2 className="text-2xl font-bold mb-4">Редактировать товар</h2>

      <div>
        <label htmlFor="name" className="label font-semibold">Название товара</label>
        <input
          id="name"
          className="w-full p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="description" className="label font-semibold">Описание</label>
        <textarea
          id="description"
          className="w-full p-2 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="price" className="label font-semibold">Цена</label>
        <input
          id="price"
          type="number"
          className="w-full p-2 border rounded"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
      </div>

      <div>
              <label className="label font-semibold">Выберите изображения</label>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {availableImages.map((img) => {
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
        <label htmlFor="categoryId" className="label font-semibold">Категория</label>
        <select
          id="categoryId"
          value={categoryId}
          className="w-full p-2 border rounded"
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option value="">Выберите категорию</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Сохранить изменения
      </button>

      {showConfirm && (
        <ConfirmDialog
          message="Вы уверены, что хотите сохранить изменения?"
          onConfirm={confirmSave}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </form>
  );
}
