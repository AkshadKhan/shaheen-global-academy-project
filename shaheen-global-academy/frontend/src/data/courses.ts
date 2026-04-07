import type { Course, Level } from "../types/course";

export const LEVELS: Level[] = [
  "All",
  "Foundation",
  "High School",
  "Intermediate",
  "NEET/JEE",
];

export const COURSES: Course[] = [
  {
    id: 1,
    title: "Hifzul-Qur'an Plus Programme",
    subtitle:
      "The Hifzul Quran Plus (or Hifz Plus) is a flagship program of the Shaheen Group of Institutions designed to integrate students who have completed memorizing the Quran (Huffaz) into mainstream modern education.",
    level: ["Foundation"],
    tag: "Foundation Course",
    subjects: ["AICU- Special"],
    duration: "6-7 Years",
    highlight: true,
  },
  {
    id: 2,
    title: "11th & 12th Integrated with NEET/JEE",
    subtitle:
      "The Shaheen Academy 11th and 12th integrated program is a two-year residential course designed to combine standard board education with intensive competitive exam preparation.",
    level: ["Intermediate"],
    tag: "Intermediate with NEET/JEE",
    subjects: ["Intermediate", "NEET/JEE Preparation"],
    duration: "2 Years",
  },
  {
    id: 3,
    title: "Three Year NEET Integrated Program",
    subtitle:
      "A comprehensive three-year residential program that integrates NEET/JEE preparation with a strong foundation course, designed for students starting after Class 9 or 10 to build concepts early and excel in medical entrance exams.",
    level: ["Intermediate", "High School"],
    tag: "High School/Intermediate with NEET/JEE",
    subjects: ["High School/Intermediate", "NEET/JEE Preparation"],
    duration: "3 Years",
    highlight: true,
  },
  {
    id: 4,
    title: "Four Year NEET/JEE Integrated Program",
    subtitle:
      "A rigorous four-year residential program designed for students who have passed Class VIII, integrating NEET/JEE preparation with foundational academic excellence from an early stage.",
    level: ["High School", "Intermediate"],
    tag: "High School/Intermediate with NEET/JEE",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Complete High School and Intermediate Curriculum", "NEET/JEE Preparation"],
    duration: "4 Years",
  },
  {
    id: 5,
    title: "NEET Repeater Program",
    subtitle:
      "A one-year intensive training program for students who have completed Class 12 and are dedicated to clearing the medical entrance exam.",
    level: ["NEET/JEE"],
    tag: "NEET Dropper/Repeater",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "NEET Preparation"],
    duration: "Full Year",
    highlight: true,
  },
  {
    id: 6,
    title: "Special Class Sessions",
    subtitle: "Dedicated doubt-clearing, revision, and topic-based sessions to ensure no student is left behind. Personalized attention for every learner.",
    level: ["NEET/JEE"],
    tag: "Special Class Sessions",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    duration: "Twice in a week",
  },
];
