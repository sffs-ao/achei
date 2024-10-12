import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
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

export interface CourseDescription {
  course: {
    id: number;
    course_name: string;
    price: string;
    price_registration: string | null;
    description: string;
    level: string;
    prerequisites: {
      id_documentation: string[];
      school: string;
    };
    duration: string;
    open_classes: ClassDetails[];
    contents: CourseContent[];
    obs: string | null;
    status: string | null;
  }
}

export interface ClassDetails {
  class_id: number;
  class_name: string;
  start_date: string;
  end_date: string;
  vacancies: string;
  obs: string | null;
  status: string;
  created_at?: string | null;
  shift?: {
    start_time: string;
    end_time: string;
  };
  teacher?: {
    name: string;
  };
}


export interface QuestionPayload {
  question: string;
  linkUrl: string;
  date: string;
}
