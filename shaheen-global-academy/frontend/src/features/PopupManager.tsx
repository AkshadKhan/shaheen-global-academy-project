import { useEffect, useState } from "react";
import PopupModal from "../components/PopupModal";
import { popupAnnouncements } from "../data/popupAnnouncements";

export default function PopupManager() {
  const [open, setOpen] = useState(false);
  const [announcement, setAnnouncement] = useState(
    popupAnnouncements[0]
  );

  useEffect(() => {
    const shown = localStorage.getItem(announcement.id);

    if (!shown) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [announcement.id]);

  const handleClose = () => {
    localStorage.setItem(announcement.id, "true");
    setOpen(false);
  };

  const handleConfirm = () => {
    if (announcement.link) {
      window.location.href = announcement.link;
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
      {announcement.content}
    </PopupModal>
  );
}