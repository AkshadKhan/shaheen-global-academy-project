export interface Job {
  id: number;
  title: string;
  description?: string;
  type: string;
  location: string;
  open: boolean;
}