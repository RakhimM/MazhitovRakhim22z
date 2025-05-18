import { db } from "~/server/db";
import { notFound } from "next/navigation";
import ProductDetails from "~/app/_components/producList/productUI";
import AddToCartButton from "~/app/_components/producList/addToCartButton";
import Reviews from "~/app/_components/rerwies/reviews";
import EditProductWrapper from "~/app/_components/producList/editProductWrapper";
import DeleteButton from "~/app/_components/producList/deleteProduct";
import { auth } from "~/server/auth";
import AddReview from "~/app/_components/rerwies/addreview";


export default async function ProductPage(
  props: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  const currentUser = await db.user.findUnique({ where: { id: session?.user?.id } });
  const params = await props.params;

  const user = currentUser
    ? await db.user.findUnique({
        where: { id: currentUser.id },
        select: {
          name: true,
          surname: true,
          image: true,
        },
      })
    : null;
  const product = await db.product.findUnique({
    where: { id: params.id },
    include: {
      category: true,
      images: true, 
    },
  });
const reviews = await db.review.findMany({
  where: { id: params.id },
  include: {
    user: { select: { name: true, surname: true, image: true } },
    replies: {
      include: {
        user: { select: { name: true, surname: true, image: true } },
      },
    },
  },
});
  const categories = await db.category.findMany();

  if (!product) return notFound();
  const role = (await auth())?.user.role;
  const isAuthorized = role === "ADMIN" || role === "WORKER";
  const safeUser = currentUser
  ? {
      ...currentUser,
      totalSpent: currentUser.totalSpent.toString(), 
    }
  : null;
  
  return (
    <div className="p-4">
      {isAuthorized && (
      <EditProductWrapper product={product} categories={categories}   availableImages={product.images} 
      />

        )}
      
      <ProductDetails product={product} />
      {!isAuthorized && (
      <AddToCartButton productId={product.id} stock = {product.stock} />

        )}
        {isAuthorized && (
        <DeleteButton productId={product.id} />

        )}
      <AddReview productId={product.id} />

    <Reviews
  currentUser={safeUser}
  productId={product.id}
  initialReviews={reviews}
/>
    </div>
  );
}

