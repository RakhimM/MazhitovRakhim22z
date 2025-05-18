"use client";

import { useEffect, useRef } from "react";
import { signOut, useSession } from "next-auth/react";

const IDLE_TIMEOUT = 15 * 60 * 1000; 

export function IdleLogout() {
  const { status } = useSession();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      signOut(); 
    }, IDLE_TIMEOUT);
  };

  useEffect(() => {
    if (status !== "authenticated") return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest('[role="button"]') ||
        target.closest('[onclick]')
      ) {
        resetTimer();
      }
    };

    document.addEventListener("click", handleClick);
    resetTimer(); 

    return () => {
      document.removeEventListener("click", handleClick);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [status]);

  return null;
}
