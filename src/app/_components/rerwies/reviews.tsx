"use client";

import { useState } from "react";
import { api } from "~/trpc/react";
import Review from "./review";

export default function Reviews(
  {
    productId,
    currentUser,
    initialReviews,
  }: {
    productId: string;
    currentUser: { id: string } | null;
    initialReviews: {
      productId: string;
      id: string;
      userId: string;
      createdAt: Date;
      rating: number;
      comment: string | null;
      parentId: string | null;
      user: {
        name: string | null;
        surname: string | null;
        image: string | null;
      };
      replies: {
        productId: string;
        id: string;
        userId: string;
        createdAt: Date;
        rating: number;
        comment: string | null;
        parentId: string | null;
        user: {
          name: string | null;
          surname: string | null;
          image: string | null;
        };
      }[];
    }[];
  }
) {
  const { data: reviews = initialReviews, isLoading, refetch } = api.review.getByProduct.useQuery(
    { productId },
    { initialData: initialReviews }
  );

  const deleteMutation = api.review.delete.useMutation({ onSuccess: () => refetch() });
  const createReplyMutation = api.review.create.useMutation({ onSuccess: () => refetch() });
  const updateMutation = api.review.update.useMutation({ onSuccess: () => refetch() });

  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState<string>("");
  const [editingReviewId, setEditingReviewId] = useState<string | null>(null);
  const [editText, setEditText] = useState<string>("");

  if (isLoading) return <div className="text-center py-4">Загрузка отзывов...</div>;
  if (!reviews || reviews.length === 0) return <div className="text-center py-4">Отзывов пока нет</div>;

  return (
    <div className="mt-8 space-y-6">
      <h2 className="text-2xl font-bold">Отзывы</h2>
      {reviews.map((review) => (
        <Review
          key={review.id}
          review={review}
          currentUser={currentUser}
          replyingTo={replyingTo}
          setReplyingTo={setReplyingTo}
          replyText={replyText}
          setReplyText={setReplyText}
          editingReviewId={editingReviewId}
          setEditingReviewId={setEditingReviewId}
          editText={editText}
          setEditText={setEditText}
          deleteMutation={deleteMutation}
          createReplyMutation={createReplyMutation}
          updateMutation={updateMutation}
          productId={productId}
        />
      ))}
    </div>
  );
}
