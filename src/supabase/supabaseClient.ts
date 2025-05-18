const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

export async function getImagesFromSupabase() {
  const supabase = createServerComponentClient({ cookies });

  let folder = '';
  console.log(`Попытка получить файлы из папки: "${folder || 'корень'}"`);
  let { data, error } = await supabase
    .storage
    .from('product-images')
    .list(folder, { limit: 100 });

  if (error) {
    console.error(`Ошибка получения изображений из папки "${folder || 'корень'}":`, error.message);
  }
  console.log(`Файлы из папки "${folder || 'корень'}":`, data);

  if (!data || data.length === 0) {
    folder = 'uploads';
    console.log(`Файлы не найдены в папке корня, пытаемся из папки: "${folder}"`);
    ({ data, error } = await supabase
      .storage
      .from('product-images')
      .list(folder, { limit: 100 }));

    if (error) {
      console.error(`Ошибка получения изображений из папки "${folder}":`, error.message);
      return [];
    }
    console.log(`Файлы из папки "${folder}":`, data);
  }

  if (!data) {
    console.log(`Файлы не найдены в бакете и папке: "${folder}"`);
    return [];
  }

  const images = data.map((item) => ({
    name: item.name,
    url: `https://wsfwukshetdvuhbghnjj.supabase.co/storage/v1/object/public/product-images/${folder ? folder + '/' : ''}${item.name}`,
  }));

  return images;
}
