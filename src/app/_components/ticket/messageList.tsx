"use client";
import { RefObject } from "react";

export default function MessageList(
  {
    messages,
    isLoading,
    isError,
    messagesEndRef,
    currentUserId,
    role,
  }: {
    messages?: { messages: { message: string | null; supportAgent?: boolean; createdAt: string; userId: string; }[] | null } | null;
    isLoading: boolean;
    isError: boolean;
    messagesEndRef: RefObject<HTMLDivElement>;
    currentUserId: string;
    role: string | undefined;
  }
) {
  if (isLoading) {
    return (
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        <div className="text-center text-gray-400">Загрузка сообщений...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        <div className="text-center text-red-600">Ошибка загрузки сообщений</div>
      </div>
    );
  }

  const msgs = messages?.messages ?? [];

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
      {msgs.length === 0 ? (
        <div className="text-gray-500 text-center mt-10">Сообщений пока нет.</div>
      ) : (
        msgs.map((msg, i) => {
          const isCurrentUser = msg.userId === currentUserId;  
          const isSupport = msg.supportAgent === true;

          return (
            <div
              key={i}
              className={`max-w-[80%] p-3 rounded-lg shadow ${
                isCurrentUser
                  ? "bg-blue-100 self-end ml-auto"  
                  : "bg-gray-200 self-start"         
              }`}
            >
              <p className="text-sm">{msg.message}</p>
              <div className="text-xs text-gray-500 mt-1 text-right">
              <div className="flex">
</div>
                {new Date(msg.createdAt).toLocaleString()}
              </div>
            </div>
          );
        })
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}
