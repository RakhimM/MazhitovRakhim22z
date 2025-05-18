"use client";
import { useState, useRef, useEffect } from "react";
import MessageList from "./messageList";
import MessageInput from "./messageInput";
import { api } from "~/trpc/react";

export default function TicketView({
  initialMessages,
  ticketId,
  userId,
  role,
  ticketStatus,
}: {
  initialMessages: {
    message: string | null;
    supportAgent?: boolean;
    createdAt: string;
    userId: string;
  }[];
  ticketId: string;
  userId: string;
  role: string | undefined;
  ticketStatus: string | undefined;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    {
      message: string | null;
      supportAgent?: boolean;
      createdAt: string;
      userId: string;
    }[]
  >(initialMessages);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const isSupport = role === "ADMIN" || role === "WORKER";

  const addMessageMutation = api.ticket.addMessage.useMutation();
  const updateTicketStatusMutation = api.ticket.updateTicketStatus.useMutation();

  useEffect(() => {
    if (role !== "USER" && ticketStatus === "Sent") {
      updateTicketStatusMutation.mutate({
        ticketId,
        status: "Read",
      });
    }
  }, [ticketId, role, ticketStatus]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed = input.trim();
    if (!trimmed) return;

    const newMessage = {
      message: trimmed,
      supportAgent: isSupport,
      createdAt: new Date().toISOString(),
      userId: userId || "",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    try {
      await addMessageMutation.mutateAsync({
        ticketId,
        message: trimmed,
      });

      if (!isSupport) {
        updateTicketStatusMutation.mutate({ ticketId, status: "Sent" });
      }
    } catch (error) {
      console.error("Ошибка отправки сообщения:", error);
    } finally {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <MessageList
        messages={{ messages }}
        isError={!!addMessageMutation.error}
        messagesEndRef={messagesEndRef}
        isLoading={false}
        currentUserId={userId || ""}
        role={role}
      />
      <MessageInput
        input={input}
        onChange={(e) => setInput(e.target.value)}
        onSubmit={handleSubmit}
        textareaRef={textareaRef}
      />
    </div>
  );
}
