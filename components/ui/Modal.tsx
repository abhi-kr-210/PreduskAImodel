"use client";
import { ReactNode, useEffect } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

export function Modal({ open, onClose, title, children }: Props) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === 'Escape') onClose(); }
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center">
      <div className="absolute inset-0 bg-black/50" aria-hidden onClick={onClose} />
      <div role="dialog" aria-modal className="relative w-full max-w-md rounded-lg border bg-white dark:bg-neutral-900 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold">{title}</h3>
          <button className="focus-ring rounded-md border px-2 py-1 text-xs" onClick={onClose} aria-label="Close">Close</button>
        </div>
        <div className="mt-3 text-sm">{children}</div>
      </div>
    </div>
  );
}


