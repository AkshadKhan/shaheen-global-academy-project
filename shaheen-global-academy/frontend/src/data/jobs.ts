import type { Job } from "../types/job";

export const JOBS: Job[] = [
  {
    id: 1,
    title: "Faculty for Class 10th",
    description: "Male/Female - Hindi, English, Mathematics",
    type: "Full Time",
    location: "Lucknow",
    contacts: ["+91-1234567890", "1234567890"],
    open: true,
  },
  {
    id: 2,
    title: "Mathematics Faculty",
    description: "Male/Female - Mathematics",
    type: "Full Time",
    location: "Lucknow",
    contacts: ["+91-1234567890", "1234567890"],
    open: false,
  },
  {
    id: 3,
    title: "Academic Counselor",
    description: "Male/Female - Academic Counseling",
    type: "Full Time",
    location: "Lucknow",
    contacts: ["+91-1234567890", "1234567890"],
    open: false,
  },
];
