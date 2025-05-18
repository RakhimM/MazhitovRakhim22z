"use client"
import { RefObject } from "react";

interface Props {
  input: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  textareaRef: RefObject<HTMLTextAreaElement>;
}

export default function MessageInput({
  input,
  onChange,
  onSubmit,
  textareaRef,
}: Props) {
  return (
    <form
      onSubmit={onSubmit}
      className="p-4 bg-white border-t flex items-end gap-2"
    >
      <textarea
        ref={textareaRef}
        value={input}
        onChange={onChange}
        rows={1}
        placeholder="Введите сообщение..."
        className="flex-1 resize-none overflow-hidden p-2 border rounded bg-gray-100"
        style={{ minHeight: "40px", maxHeight: "200px" }}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Отправить
      </button>
    </form>
  );
}
