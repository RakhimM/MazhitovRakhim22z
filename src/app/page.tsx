import { ProductList } from "./_components/producList/productList";

export default async function Home() {

  return (
    <div className="container mx-auto py-8">
      {/* <h1 className="text-2xl font-bold text-center mb-6">Товары</h1> */}
      <ProductList />
    </div>
  );
}