export type Level = "All" | "Foundation" | "High School" | "Intermediate" | "NEET/JEE";

export interface Course {
  id: number;
  title: string;
  subtitle: string;
  level: Exclude<Level, "All">[];
  tag: string;
  subjects: string[];
  duration: string;
  highlight?: boolean;
}