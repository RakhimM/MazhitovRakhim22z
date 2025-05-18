// "use server";

// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
// import { z } from "zod";
// import { auth } from "~/server/auth";
// import { db } from "~/server/db";
// import { createClient } from '@supabase/supabase-js';
// export async function createProduct(formData: FormData) {
//   const fd = z
//     .object({
//       name: z.string(),
//       description: z.string(),
//       price: z.coerce.number().positive(),
//       imageUrl: z.string().url().optional().or(z.literal("")),
//       categoryId: z.string(),
//     })
//     .parse({
//       name: formData.get("name"),
//       description: formData.get("description"),
//       price: formData.get("price"),
//       imageUrl: formData.get("imageUrl"),
//       categoryId: formData.get("categoryId"),
//     });

//   await db.product.create({
//     data: {
//       name: fd.name,
//       description: fd.description,
//       price: fd.price,
//       imageUrl: fd.imageUrl || "",
//       categoryId: fd.categoryId,
//     },
//   });

//   revalidatePath("/product");
//   redirect("/product"); 
// }
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );

// // export async function createProduct(formData: FormData) {
// //   const name = formData.get("name") as string;
// //   const description = formData.get("description") as string;
// //   const price = parseFloat(formData.get("price") as string);
// //   const categoryId = formData.get("categoryId") as string;
// //   const file = formData.get("image") as File;

// //   if (!file || file.size === 0) throw new Error("Файл изображения не выбран");

// //   const filePath = `products/${Date.now()}-${file.name}`;

// //   // Загрузка в Supabase Storage
// //   const { error: uploadError } = await supabase.storage
// //     .from('product-images')
// //     .upload(filePath, file, { upsert: true });

// //   if (uploadError) throw uploadError;

// //   const { data: imageData } = supabase
// //     .storage
// //     .from('product-images')
// //     .getPublicUrl(filePath);

// //   const imageUrl = imageData?.publicUrl;

// //   if (!imageUrl) throw new Error("Не удалось получить URL изображения");

// //   // Сохранение в PostgreSQL
// //   await db.product.create({
// //     data: {
// //       name,
// //       description,
// //       price,
// //       categoryId,
// //       imageUrl,
// //     },
// //   });

// //   redirect('/admin/products'); // или куда тебе нужно
// // }

// export async function updateProduct(formData: FormData) {
//   const data = z
//     .object({
//       id: z.string(),
//       name: z.string(),
//       description: z.string().optional(),
//       price: z.coerce.number().nonnegative(),
//       imageUrl: z.string().url().optional(),
//       categoryId: z.string().optional(),
//     })
//     .parse({
//       id: formData.get("id"),
//       name: formData.get("name"),
//       description: formData.get("description"),
//       price: formData.get("price"),
//       imageUrl: formData.get("imageUrl"),
//       categoryId: formData.get("categoryId"),
//     });

//   await db.product.update({
//     where: { id: data.id },
//     data: {
//       name: data.name,
//       description: data.description,
//       price: data.price,
//       imageUrl: data.imageUrl,
//       categoryId: data.categoryId,
//     },
//   });

//   revalidatePath(`/products/${data.id}`); 
// }

// export async function deleteProduct(formData: FormData) {
//     const fd = z
//       .object({
//         id: z.string(),
//       })
//       .parse({
//         id: formData.get("id"),
//       });
//     await db.product.delete({ where: { id: fd.id } });
//     redirect("/product");
//   }


// export async function addProductCart(formData: FormData) {
//   const session = await auth();

//   if (!session?.user?.id) {
//     throw new Error("Пользователь не авторизован");
//   }

//   const { productId } = z
//     .object({
//       productId: z.string(),
//     })
//     .parse({
//       productId: formData.get("productId"),
//     });

//   const existingCartItem = await db.cartItem.findFirst({
//     where: {
//       userId: session.user.id,
//       productId,
//     },
//   });

//   if (existingCartItem) {
//     await db.cartItem.update({
//       where: { id: existingCartItem.id },
//       data: { quantity: { increment: 1 } },
//     });
//   } else {
//     await db.cartItem.create({
//       data: {
//         userId: session.user.id,
//         productId,
//         quantity: 1,
//       },
//     });
//   }

//    redirect("/cart");
// }
"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { auth } from "~/server/auth";
import { db } from "~/server/db";

// export async function createProduct(formData: FormData) {
//   const fd = z
//     .object({
//       name: z.string(),
//       description: z.string(),
//       price: z.coerce.number().positive(),
//       imageUrl: z.string().url().optional().or(z.literal("")),
//       categoryId: z.string(),
//     })
//     .parse({
//       name: formData.get("name"),
//       description: formData.get("description"),
//       price: formData.get("price"),
//       imageUrl: formData.get("imageUrl"),
//       categoryId: formData.get("categoryId"),
//     });

//   await db.product.create({
//     data: {
//       name: fd.name,
//       description: fd.description,
//       price: fd.price,
//       imageUrl: fd.imageUrl || "",
//       categoryId: fd.categoryId,
//     },
//   });

//   revalidatePath("/product");
//   redirect("/product"); 
// }
// export async function createProduct(formData: FormData) {
//   const name = formData.get("name") as string;
//   const description = formData.get("description") as string;
//   const price = Number(formData.get("price"));
//   const categoryId = formData.get("categoryId") as string;
//   const imageUrl = formData.get("imageUrl") as string;

//   if (!imageUrl) throw new Error("Изображение не выбрано");

//   await db.product.create({
//     data: {
//       name,
//       description,
//       price,
//       categoryId,
//       imageUrl,
//     },
//   });

//   redirect("/product");
// }
export async function createProduct(formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = Number(formData.get("price"));
  const stock = Number(formData.get("stock"));
  const categoryId = formData.get("categoryId") as string;
  const imageUrls = formData.getAll("imageUrls") as string[];

  if (!imageUrls.length) throw new Error("Не выбраны изображения");

  const product = await db.product.create({
    data: {
      name,
      description,
      price,
      stock,
      categoryId,
      images: {
        create: imageUrls.map((url) => ({ url })),
      },
    },
  });

  redirect(`/product/${product.id}`);
}

const productUpdateSchema = z.object({
  id: z.string().cuid(),
  name: z.string().min(1),
  description: z.string().optional(),
  price: z.number().nonnegative(),
  imageUrl: z.string().url().optional(),
  categoryId: z.string().cuid(),
});

 export async function updateProduct(data: unknown) {
  // Валидируем входные данные, чтобы получить типизированный объект
  const parsedData = productUpdateSchema.parse(data);

  // Формируем массив для создания изображений, если URL валиден
  const imagesData = parsedData.imageUrl ? [{ url: parsedData.imageUrl }] : [];

  await db.product.update({
    where: { id: parsedData.id },
    data: {
      name: parsedData.name,
      description: parsedData.description,
      price: parsedData.price,
      images: {
        deleteMany: {},
        create: imagesData,
      },
      categoryId: parsedData.categoryId,
    },
  });
}
export async function deleteProduct(formData: FormData) {
    const fd = z
      .object({
        id: z.string(),
      })
      .parse({
        id: formData.get("id"),
      });
    await db.product.delete({ where: { id: fd.id } });
    redirect("/product");
  }


// export async function addProductCart(formData: FormData) {
//   const session = await auth();

//   if (!session?.user?.id) {
//     throw new Error("Пользователь не авторизован");
//   }

//   const { productId } = z
//     .object({
//       productId: z.string(),
//     })
//     .parse({
//       productId: formData.get("productId"),
//     });

//   const existingCartItem = await db.cartItem.findFirst({
//     where: {
//       userId: session.user.id,
//       productId,
//     },
//   });

//   if (existingCartItem) {
//     await db.cartItem.update({
//       where: { id: existingCartItem.id },
//       data: { quantity: { increment: 1 } },
//     });
//   } else {
//     await db.cartItem.create({
//       data: {
//         userId: session.user.id,
//         productId,
//         quantity: 1,
//       },
//     });
//   }

//    redirect("/cart");
// }
export async function addProductCart(formData: FormData) {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Пользователь не авторизован");
  }

  const { productId, quantity } = z
    .object({
      productId: z.string(),
      quantity: z.string().transform((val) => parseInt(val, 10)),
    })
    .parse({
      productId: formData.get("productId"),
      quantity: formData.get("quantity"),
    });

  const existingCartItem = await db.cartItem.findFirst({
    where: {
      userId: session.user.id,
      productId,
    },
  });

  if (existingCartItem) {
    await db.cartItem.update({
      where: { id: existingCartItem.id },
      data: { quantity: { increment: quantity } },
    });
  } else {
    await db.cartItem.create({
      data: {
        userId: session.user.id,
        productId,
        quantity,
      },
    });
  }

  redirect("/cart");
}
