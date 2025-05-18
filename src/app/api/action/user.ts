"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { db } from "~/server/db";
import { auth } from "~/server/auth";
import { $Enums } from "@prisma/client";

export async function createUser(formData: FormData) {
  const fd = z
    .object({
      email: z.string().email(),
      name: z.string(),
      surname: z.string(),
    })
    .parse({
      email: formData.get("email"),
      name: formData.get("name"),
      surname: formData.get("surname"),
    });
  await db.user.create({ data: fd });
  revalidatePath("/profile");
}

export async function deleteUser(formData: FormData) {
  const fd = z
    .object({
      id: z.string(),
    })
    .parse({
      id: formData.get("id"),
    });
  await db.user.delete({ where: { id: fd.id } });
  redirect("/profile");
}

  export async function updateUser(formData: FormData) {
    const fd = z
      .object({
        id: z.string(),  
        email: z.string().email(),    
        name: z.string(),
        surname: z.string(),
        role: z.nativeEnum($Enums.Role),
        image: z.string(),

      })
      .parse({
        id: formData.get("id"),  
        image: formData.get("image"),
        email: formData.get("email"),    
        name: formData.get("name"),
        surname: formData.get("surname"),
        role: formData.get("role"),
      });
    await db.user.update({ where: { id: fd.id }, data: fd });
    revalidatePath("/profile");
    redirect("/profile");
  }
