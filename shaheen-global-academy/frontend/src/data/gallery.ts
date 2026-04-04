export interface GalleryItem {
  id: number;
  src: string;
  category: "Campus" | "Classrooms" | "Events" | "Activities" | "Achievements";
  title?: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    src: "/gallery/auditorium.png",
    category: "Campus",
    title: "Auditorium",
  },
  {
    id: 2,
    src: "/gallery/cafeteria.png",
    category: "Campus",
    title: "Cafeteria",
  },
  {
    id: 4,
    src: "/gallery/library-image.png",
    category: "Campus",
    title: "Library",
  },
  {
    id: 5,
    src: "/gallery/sports-ground.png",
    category: "Campus",
    title: "Sports Ground",
  },
];