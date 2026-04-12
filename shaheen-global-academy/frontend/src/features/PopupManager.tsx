import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PopupModal from "../components/PopupModal";
import { popupAnnouncements } from "../data/popupAnnouncements";

export default function PopupManager() {
  const [open, setOpen] = useState(false);
  const [announcement] = useState(popupAnnouncements[0]);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") return;

    const EXPIRY_HOURS = 6;
    const lastShown = localStorage.getItem(announcement.id);

    if (
      lastShown &&
      Date.now() - Number(lastShown) < EXPIRY_HOURS * 60 * 60 * 1000
    ) {
      return;
    }

    const hasTriggered = { current: false };

    const triggerPopup = () => {
      if (hasTriggered.current) return;
      hasTriggered.current = true;
      setOpen(true);
    };

    const handleScroll = () => {
      if (window.scrollY > 300) {
        triggerPopup();
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const scrollTimeout = setTimeout(() => {
      triggerPopup();
      window.removeEventListener("scroll", handleScroll);
    }, 10000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [announcement.id, location.pathname]);

  const handleClose = () => {
    localStorage.setItem(announcement.id, Date.now().toString());
    setOpen(false);
  };

  const handleConfirm = () => {
    if (announcement.link) {
      window.open(announcement.link, "_blank", "noopener,noreferrer");
    }
    handleClose();
  };

  return (
    <PopupModal
      isOpen={open}
      title={announcement.title}
      onClose={handleClose}
      onConfirm={handleConfirm}
      confirmText={announcement.confirmText}
      cancelText={announcement.cancelText}
    >
      <div className="space-y-4 text-center">
        {announcement.image && (
          <img
            src={announcement.image}
            alt="Promotion"
            className="w-full rounded-xl object-cover"
          />
        )}

        <p className="text-gray-600">{announcement.description}</p>
      </div>
    </PopupModal>
  );
}
