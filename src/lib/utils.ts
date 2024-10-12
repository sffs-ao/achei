import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface CourseContent {
  title: string;
  contents: string[];
  obsarvations: string;
}

export interface Course {
  id: number;
  course_name: string;
  contents: CourseContent[];
}