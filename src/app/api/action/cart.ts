"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { db } from "~/server/db";

export async function deleteCartProduct(formData: FormData) {
    const fd = z
      .object({
        id: z.string(),
      })
      .parse({
        id: formData.get("id"),
      });
    await db.cartItem.delete({ where: { id: fd.id } });
    redirect("/cart");
  }


  export async function updateCartItemQuantity(itemId: string, newQuantity: number) {
    try {
      await db.cartItem.update({
        where: { id: itemId },
        data: { quantity: newQuantity },
      });
  
      revalidatePath("/cart"); // или точный путь, если используется динамика
    } catch (error) {
      console.error("Ошибка при обновлении количества:", error);
      throw new Error("Не удалось обновить количество");
    }
  }
  // export async function addProductDelivery(formData: FormData) {
  //   const fd = z.object({
  //       id: z.string(),
  //     userId: z.string(),
  //     productId: z.string(),
  //     quantity: z.string().transform(Number), 
  //     price: z.string().transform(Number),
  //   }).parse({
  //     userId: formData.get("userId"),
  //     productId: formData.get("productId"),
  //     quantity: formData.get("quantity"),
  //     price: formData.get("price"),
  //     id: formData.get("id"),
  //   });
  
    // const order = await db.order.create({
    //   data: {
    //     userId: fd.userId,
    //     totalAmount: fd.price * fd.quantity,
    //   },
    // });
  
    // await db.orderItem.create({
    //   data: {
    //     orderId: order.id,
    //     productId: fd.productId,
    //     quantity: fd.quantity,
    //     price: fd.price,
    //   },
    // });
  //   await db.cartItem.delete({ where: { id: fd.id } });
  //   redirect("/cart");
  // }


export async function addProductDelivery(formData: FormData) {
  // Парсим данные из формы
  const fd = z.object({
    id: z.string(),
    userId: z.string(),
    productId: z.string(),
    quantity: z.string().transform(Number),
    price: z.string().transform(Number),
  }).parse({
    userId: formData.get("userId"),
    productId: formData.get("productId"),
    quantity: formData.get("quantity"),
    price: formData.get("price"),
    id: formData.get("id"),
  });

  // Получаем информацию о товаре из базы данных
  const product = await db.product.findUnique({
    where: { id: fd.productId },
  });

  if (product) {
    // Убедитесь, что product не равно null
    const updatedStock = product.stock - fd.quantity;
  
    // Обновляем количество товара в базе данных, если оно больше или равно 0
    if (updatedStock >= 0) {
      await db.product.update({
        where: { id: fd.productId },
        data: {
          stock: updatedStock,
        },
      });
  
      // Оформление заказа и удаление товара из корзины
      const order =  await db.order.create({
        data: {
          userId: fd.userId,
          totalAmount: fd.price * fd.quantity,
        },
      });
  
      await db.orderItem.create({
        data: {
          orderId: order.id,
          productId: fd.productId,
          quantity: fd.quantity,
          price: fd.price,
        },
      });
  
      await db.cartItem.delete({ where: { id: fd.id } });
      redirect("/cart");
    } else {
      throw new Error("Недостаточно товара на складе");
    }
  } else {
    throw new Error("Товар не найден");
  }
}