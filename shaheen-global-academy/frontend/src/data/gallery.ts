export interface GalleryItem {
  id: number;
  src: string;
  category: "Campus" | "Classrooms" | "Events" | "Activities" | "Achievements";
  title?: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    src: "/gallery/inaugration-day-image4.jpg",
    category: "Events",
    title: "Inauguration Day",
  },
  {
    id: 2,
    src: "/gallery/inaugration-day-image2.jpg",
    category: "Events",
    title: "Inauguration Day",
  },
  {
    id: 4,
    src: "/gallery/inaugration-day-image1.jpg",
    category: "Events",
    title: "Inauguration Day",
  },
  {
    id: 5,
    src: "/gallery/chairman-speech-image1.jpg",
    category: "Activities",
    title: "Chairman Dr. Abdul Qadeer's Speech",
  },
  {
    id: 7,
    src: "/gallery/chairman-visit.jpg",
    category: "Campus",
    title: "Chairman Dr. Abdul Qadeer Visiting the Campus",
  },
  {
    id: 8,
    src: "/gallery/chairman-visit-image2.jpg",
    category: "Campus",
    title: "Chairman Dr. Abdul Qadeer Visiting the Campus",
  },
  {
    id: 9,
    src: "/gallery/program-image1.jpg",
    category: "Activities",
    title: "Syed Yunus Al Hussaini, Dr. Abdul Qadeer, Syed Yousuf Al Hussaini, Mr. Fakhrul Islam Azmi Falahi",
  },
  {
    id: 10,
    src: "/gallery/program-image2.jpg",
    category: "Activities",
    title: "Dr Abdul Qadeer and Syed Yousuf Al Hussaini",
  },
  {
    id: 11,
    src: "/gallery/republic-day-image1.jpg",
    category: "Events",
    title: "Mr Fakhrul Islam Azmi Falahi, giving speech at Republic Day Program",
  },
  {
    id: 12,
    src: "/gallery/main-reception.jpg",
    category: "Campus",
    title: "Main Reception and Waiting Area",
  },
  {
    id: 13,
    src: "/gallery/entry-reception.jpg",
    category: "Campus",
    title: "Entry Reception at Academic Block",
  },
  {
    id: 14,
    src: "/gallery/entry-reception-image2.jpg",
    category: "Campus",
    title: "Entry Reception at Academic Block",
  },
  {
    id: 15,
    src: "/gallery/academic-block-entrance.jpg",
    category: "Campus",
    title: "Academic Block Entrance",
  }
];