"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { db } from "~/server/db";

export async function createCatalog(formData: FormData) {
    const fd = z
      .object({
        name: z.string(),
      })
      .parse({
        name: formData.get("name"),
      });
    await db.category.create({ data: fd });
    revalidatePath("/group");
  }