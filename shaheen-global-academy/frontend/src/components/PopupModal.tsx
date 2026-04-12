import type { ReactNode } from "react";

interface PopupModalProps {
  isOpen: boolean;
  title?: string;
  children: ReactNode;
  onClose: () => void;
  onConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
  size?: "small" | "medium" | "large";
}

export default function PopupModal({
  isOpen,
  title,
  children,
  onClose,
  onConfirm,
  confirmText = "Confirm",
  cancelText = "Cancel",
  size = "medium",
}: PopupModalProps) {
  if (!isOpen) return null;

  const sizeClasses: Record<NonNullable<PopupModalProps["size"]>, string> = {
    small: "max-w-md",
    medium: "max-w-xl",
    large: "max-w-3xl",
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-2 py-2 animate-fade-in"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        className={`w-full rounded-2xl border border-gray-200 bg-white shadow-2xl overflow-hidden ${sizeClasses[size]}`}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
            <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
            <button
              type="button"
              className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
              onClick={onClose}
              aria-label="Close popup"
            >
              &times;
            </button>
          </div>
        )}

        <div className="max-h-[70vh] overflow-y-auto px-5 py-4 text-gray-700">
          {children}
        </div>

        <div className="flex justify-end gap-3 border-t border-gray-100 px-5 py-4">
          <button
            type="button"
            className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
            onClick={onClose}
          >
            {cancelText}
          </button>

          {onConfirm && (
            <button
              type="button"
              className="rounded-lg bg-lime-500 px-4 py-2 text-sm font-semibold text-gray-900 transition-colors hover:bg-lime-400"
              onClick={onConfirm}
            >
              {confirmText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
