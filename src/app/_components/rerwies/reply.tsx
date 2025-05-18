import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
export default function Reply(
    {
      reply,
      currentUser,
      editingReviewId,
      setEditingReviewId,
      editText,
      setEditText,
      deleteMutation,
      updateMutation,
    }: {
      reply: {
        id: string;
        userId: string;
        createdAt: Date;
        comment: string | null;
        user: {
          name: string | null;
          surname: string | null;
          image: string | null;
        };
      };
      currentUser: { id: string } | null;
      editingReviewId: string | null;
      setEditingReviewId: (id: string | null) => void;
      editText: string;
      setEditText: (text: string) => void;
      deleteMutation: any;
      updateMutation: any;
    }
  ) {
  const isEditing = editingReviewId === reply.id;
  const canEdit = currentUser?.id === reply.userId;

  return (
    <div className="text-sm text-left relative p-2 border rounded-lg">
      <div className="font-semibold">
        {reply.user.name || "Аноним"} {reply.user.surname || ""}
      </div>

      {isEditing ? (
        <div className="space-y-2 mt-1">
          <textarea
            className="w-full border p-2 rounded"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <div className="flex gap-2">
            <button
              onClick={() => {
                updateMutation.mutate({
                  reviewId: reply.id,
                  comment: editText,
                  rating: 0,
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
        <p className="text-gray-700 mt-1">{reply.comment ?? ""}</p>
      )}

      <div className="text-xs text-gray-500 mt-1">
        {new Date(reply.createdAt).toLocaleDateString()}
      </div>

      {canEdit && !isEditing && (
        <div className="absolute top-2 right-2 flex gap-2">
          <button
            onClick={() => {
              setEditingReviewId(reply.id);
              setEditText(reply.comment ?? "");
            }}
            className="text-blue-600 hover:text-blue-800"
            title="Редактировать"
          >
            <PencilSquareIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => deleteMutation.mutate({ reviewId: reply.id })}
            className="text-red-500 hover:text-red-700"
            title="Удалить"
          >
            <TrashIcon className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
