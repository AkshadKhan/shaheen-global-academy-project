import type { ReactNode } from "react";

export interface PopupAnnouncement {
  id: string;
  title: string;
  content: ReactNode;
  confirmText?: string;
  cancelText?: string;
  link?: string;
}

export const popupAnnouncements: PopupAnnouncement[] = [
  {
    id: "admissions-open",
    title: "Admissions Open",
    content:
      "Admissions for the new academic session at Shaheen Global Academy are now open. Apply early to secure your seat and start your journey towards academic excellence.",
    confirmText: "Apply Now",
    cancelText: "Close",
    link: "/admissions",
  },
  {
    id: "scholarship-test",
    title: "Scholarship Test",
    content:
      "Scholarship entrance tests are now available for deserving students. Perform well in the test and earn tuition fee concessions.",
    confirmText: "Learn More",
    cancelText: "Close",
    link: "/scholarships",
  },
];
