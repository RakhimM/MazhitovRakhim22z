import { PencilSquareIcon, TrashIcon, FolderPlusIcon } from "@heroicons/react/24/outline";
import Reply from "./reply";

export default function Review(
  {
    review,
    currentUser,
    replyingTo,
    setReplyingTo,
    replyText,
    setReplyText,
    editingReviewId,
    setEditingReviewId,
    editText,
    setEditText,
    deleteMutation,
    createReplyMutation,
    updateMutation,
    productId,
  }: {
    review: {
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
      replies?: {
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
    };
    currentUser: { id: string } | null;
    replyingTo: string | null;
    setReplyingTo: (id: string | null) => void;
    replyText: string;
    setReplyText: (text: string) => void;
    editingReviewId: string | null;
    setEditingReviewId: (id: string | null) => void;
    editText: string;
    setEditText: (text: string) => void;
    deleteMutation: any;
    createReplyMutation: any;
    updateMutation: any;
    productId: string;
  }
) {
  const isEditing = editingReviewId === review.id;
  const canEdit = currentUser?.id === review.userId;

  return (
    <div className="relative p-4 border rounded-lg">
      {canEdit && (
        <div className="absolute top-2 right-2 flex gap-2">
          <button
            onClick={() => {
              setEditingReviewId(review.id);
              setEditText(review.comment ?? "");
            }}
            className="text-blue-600 hover:text-blue-800"
            title="Редактировать"
          >
            <PencilSquareIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => deleteMutation.mutate({ reviewId: review.id })}
            className="text-red-500 hover:text-red-700"
            title="Удалить"
          >
            <TrashIcon className="w-5 h-5" />
          </button>
        </div>
      )}

      <div className="flex items-center gap-4 mb-2">
        <div>
          <div className="font-semibold">
            {review.user.name || "Аноним"} {review.user.surname || ""}
          </div>
          <div className="text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <span key={i}>{i < review.rating ? "★" : "☆"}</span>
            ))}
          </div>
        </div>
      </div>

      {isEditing ? (
        <div className="space-y-2">
          <textarea
            className="w-full border p-2 rounded"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <div className="flex gap-2">
            <button
              onClick={() => {
                updateMutation.mutate({
                  reviewId: review.id,
                  comment: editText,
                  rating: review.rating,
                });
                setEditingReviewId(null);
              }}
              className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Сохранить
            </button>
            <button
              onClick={() => setEditingReviewId(null)}
              className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
            >
              Отмена
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-700">{review.comment ?? ""}</p>
      )}

      <div className="text-sm text-gray-500 mt-2">
        {new Date(review.createdAt).toLocaleDateString()}
      </div>

      <div className="mt-2">
        <button
          onClick={() => setReplyingTo(replyingTo === review.id ? null : review.id)}
          className="flex items-center text-blue-600 hover:underline gap-1"
        >
          <FolderPlusIcon className="w-4 h-4" />
          Ответить
        </button>
      </div>

      {replyingTo === review.id && (
        <div className="mt-2 space-y-2">
          <textarea
            className="w-full border p-2 rounded"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
          <div className="flex gap-2">
            <button
              onClick={() => {
                if (!currentUser) return;
                createReplyMutation.mutate({
                  productId,
                  comment: replyText,
                  rating: 0,
                  parentId: review.id,
                  userId: currentUser.id,
                });
                setReplyText("");
                setReplyingTo(null);
              }}
              className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Отправить
            </button>
            <button
              onClick={() => setReplyingTo(null)}
              className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
            >
              Отмена
            </button>
          </div>
        </div>
      )}

      <div className="mt-4 space-y-2 pl-4 border-l border-gray-300">
        {review.replies?.map((reply) => (
          <Reply
            key={reply.id}
            reply={reply}
            currentUser={currentUser}
            editingReviewId={editingReviewId}
            setEditingReviewId={setEditingReviewId}
            editText={editText}
            setEditText={setEditText}
            deleteMutation={deleteMutation}
            updateMutation={updateMutation}
          />
        ))}
      </div>
    </div>
  );
}
