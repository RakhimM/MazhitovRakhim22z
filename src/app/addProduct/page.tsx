import { db } from "~/server/db";
// import { getImagesFromSupabase } from "~/lib/getSupabaseImages";
import { AddProductForm } from "../_components/addProduct/detailForm";
import { getImagesFromSupabase } from "~/supabase/supabaseClient";

export default async function AddProductPage() {
  const catalog = await db.category.findMany();
  const images = await getImagesFromSupabase();
  console.log('❌ ❌ ❌ ❌ ❌ ❌ ❌');


  return <AddProductForm images={images} catalog={catalog} />;
}
