"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import RatingSelector from "./ratingSelector";
import { api } from "~/trpc/react";

export default function AddReview({ productId }:{ productId: string}) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const utils = api.useUtils();
  const createReview = api.review.create.useMutation({
    onSuccess: () => {
      setRating(0);
      setComment("");
      setError(null);
      void utils.review.getByProduct.invalidate({ productId });
    },
    onError: (error) => {
      setError(error.message);
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (status === "unauthenticated") {
      router.push("/auth/signin");
      return;
    }

    if (!session?.user?.id) {
      setError("Ошибка авторизации. Пожалуйста, войдите снова.");
      return;
    }

    if (!comment.trim()) {
      setError("Пожалуйста, оставьте комментарий");
      return;
    }

    if (rating === 0) {
      setError("Пожалуйста, укажите рейтинг");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    await createReview.mutateAsync({
      productId,
      userId: session.user.id,
      rating,
      comment,
    });
  };

  if (status === "unauthenticated") {
    return (
      <div className="my-8 p-4 max-w-xl mx-auto bg-base-200 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Оставить отзыв</h3>
        <p className="mb-4">Чтобы оставить отзыв, пожалуйста, войдите в систему.</p>
        <button onClick={() => router.push("/auth/signin")} className="btn btn-primary">
          Войти
        </button>
      </div>
    );
  }

  return (
    <div className="my-8 p-4 max-w-xl mx-auto bg-base-200 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Оставить отзыв</h3>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Ваша оценка</span>
          </label>
          <RatingSelector rating={rating} setRating={setRating} />
        </div>

        <div className="form-control">
          <label htmlFor="comment" className="label">
            <span className="label-text">Ваш отзыв</span>
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Расскажите о вашем опыте..."
            className="textarea textarea-bordered h-24"
            required
          />
        </div>

        <div className="form-control mt-6">
          <button
            type="submit"
            className={`btn btn-primary ${isSubmitting ? "loading" : ""}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Отправка..." : "Опубликовать отзыв"}
          </button>
        </div>
      </form>
    </div>
  );
}
