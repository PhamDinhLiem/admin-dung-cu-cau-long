// components/ui/toast-provider.tsx
"use client";

import * as Toast from "@radix-ui/react-toast";
import { useState, createContext, useContext, useCallback } from "react";

type ToastContextType = {
  showToast: (message: string, title?: string, duration?: number) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [toastContent, setToastContent] = useState<{
    title?: string;
    message: string;
    duration?: number;
  }>({ message: "" });

  const showToast = useCallback((message: string, title?: string, duration = 3000) => {
    setToastContent({ message, title, duration });
    setOpen(false); // reset để mở lại toast
    setTimeout(() => setOpen(true), 10);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      <Toast.Provider swipeDirection="right" duration={toastContent.duration}>
        {children}

        <Toast.Root open={open} onOpenChange={setOpen} className="bg-black text-white rounded px-4 py-3 shadow-lg">
          {toastContent.title && <Toast.Title className="font-bold">{toastContent.title}</Toast.Title>}
          <Toast.Description>{toastContent.message}</Toast.Description>
        </Toast.Root>

        <Toast.Viewport className="fixed bottom-4 right-4 w-[300px] z-50" />
      </Toast.Provider>
    </ToastContext.Provider>
  );
}

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used inside <ToastProvider>");
  return context;
};
