import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const categories = [
  { name: "Смартфоны" },
  { name: "Ноутбуки" },
  { name: "Аксессуары" },
  { name: "Наушники" },
  { name: "Мышки" },
  { name: "Клавиатуры" },
  { name: "Смартфоны1" },
  { name: "Ноутбуки1" },
  { name: "Аксессуары1" },
  { name: "Наушники1" },
  { name: "Мышки1" },
  { name: "Клавиатуры1" },
  { name: "Аксессуары2" },
  { name: "Наушники2" },
  { name: "Мышки2" },
  { name: "Клавиатуры2" },
  { name: "Аксессуары3" },
  { name: "Наушники3" },
  { name: "Мышки3" },
  { name: "Клавиатуры112" },
  { name: "Аксессуары212" },
  { name: "Наушники212" },
  { name: "Мышки221" },
  { name: "Клавиатуры221" },
  
];

const products = [
  {
    name: "iPhone 15",
    description: "Флагман от Apple",
    price: 999.99,
    imageUrl: "https://example.com/iphone15.jpg",
    category: "Смартфоны",
  },
  {
    name: "iPhone 15",
    description: "iPhone в другой категории",
    price: 999.99,
    imageUrl: "https://example.com/iphone15-alt.jpg",
    category: "Аксессуары",
  },
  {
    name: "MacBook Pro",
    description: "Мощный ноутбук Apple",
    price: 1999.99,
    imageUrl: "https://example.com/macbook.jpg",
    category: "Ноутбуки",
  },
];

async function main() {
  // Очистим таблицы (опционально)
  await prisma.return.deleteMany();
  await prisma.review.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.cartItem.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  // Добавляем категории
  for (const cat of categories) {
    await prisma.category.create({
      data: { name: cat.name },
    });
  }

  const categoriesFromDb = await prisma.category.findMany();

  // Добавляем продукты
  for (const p of products) {
    const category = categoriesFromDb.find((c) => c.name === p.category);
    if (!category) continue;

    await prisma.product.create({
      data: {
        name: p.name,
        description: p.description,
        price: p.price,
        imageUrl: p.imageUrl,
        categoryId: category.id,
      },
    });
  }
}

main()
  .then(async () => {
    console.log("Сид выполнен успешно!");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Ошибка при сидировании:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// const placeholderImages = [
//   { name: "Корзина пустая", imageUrl: "https://i.pinimg.com/originals/82/4b/f6/824bf63dd4dc1a7064ac358248374886.png" },
//    { name: "Пустой список возвратов", imageUrl: "https://www.alteh.ru/upload/medialibrary/46c/_.png" },
//   { name: "История заказов пустая", imageUrl: "https://avatars.mds.yandex.net/i?id=de3dfcc298de9cce3e25549c2d356e20_l-5660145-images-thumbs&n=13" },
//   // { name: "Заглушка для наушников", imageUrl: "https://example.com/placeholder-headphones.jpg" },
//   // { name: "Заглушка для мышек", imageUrl: "https://example.com/placeholder-mouse.jpg" },
//   // { name: "Заглушка для клавиатур", imageUrl: "https://example.com/placeholder-keyboard.jpg" },
// ];

// async function main() {
//   // Очистим таблицу заглушек перед добавлением новых данных
//   await prisma.placeholderImage.deleteMany();

//   // Добавляем заглушки
//   for (const placeholder of placeholderImages) {
//     await prisma.placeholderImage.create({
//       data: {
//         name: placeholder.name,
//         imageUrl: placeholder.imageUrl,
//       },
//     });
//   }

//   console.log("Заглушки добавлены успешно!");
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error("Ошибка при сидировании заглушек:", e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
