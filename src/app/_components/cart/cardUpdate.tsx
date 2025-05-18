"use client";

import { useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { addProductDelivery } from "~/app/api/action/cart";
import Modal from "./modal";

export default function CheckoutButton({
  id,
  userId,
  productId,
  quantity,
  price,
  stock,
}: {
  id: string;
  userId: string;
  productId: string;
  quantity: number;
  price: number;
  stock: number;
}) {
  const { pending } = useFormStatus();
  const formRef = useRef<HTMLFormElement>(null);
  const [showModal, setShowModal] = useState(false); 
  const [formPending, setFormPending] = useState(false); 
  const [modalMessage, setModalMessage] = useState(""); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    if (stock < quantity) {
      setModalMessage("Недостаточно товара на складе"); 
      setShowModal(true); 
      return;
    }

    setFormPending(true); 

    try {
      await addProductDelivery(new FormData(formRef.current!));
      setFormPending(false);
    } catch (error) {
      setFormPending(false);
      setModalMessage("Вы заказываете больше товара, чем имеется на складе"); 
      setShowModal(true); 
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); 
  };

  return (
    <div>
      {showModal && (
        <Modal message={modalMessage} onClose={handleCloseModal} /> 
      )}

      <form ref={formRef} onSubmit={handleSubmit}>
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="userId" value={userId} />
        <input type="hidden" name="productId" value={productId} />
        <input type="hidden" name="quantity" value={quantity} />
        <input type="hidden" name="price" value={price} />

        <button
          type="submit"
          disabled={pending || formPending}
          className="w-40 py-2 px-4 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition disabled:opacity-50"
        >
          {formPending ? "Оформляется..." : "Оформить заказ"}
        </button>
      </form>
    </div>
  );
}
