// ComingSoonModal.tsx
interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

export default function ComingSoonModal({
  isOpen,
  onClose,
  title = "Coming Soon!",
  message
}: ComingSoonModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          {/* Icon */}
          <div className="mx-auto w-16 h-16 bg-[#9AE600] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-[#9AE600]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {title}
          </h2>

          {/* Message */}
          <p className="text-gray-600 mb-6">
            {message || "This section is currently under development. We'll notify you once it's ready!"}
          </p>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full px-6 py-3 bg-[#9AE600] text-gray-900 rounded-full font-semibold hover:bg-[#8BD500] transition-all duration-300 hover:shadow-lg"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
}