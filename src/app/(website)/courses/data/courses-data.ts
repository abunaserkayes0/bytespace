import { CourseCardProps } from "../../components/course-card";

export interface CourseItem extends CourseCardProps {
  id: number;
  category?: string;
}

export const COURSE_CATEGORIES = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
] as const;

export const BASE_COURSES: CourseItem[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    title: "Learn Figma from Basic",
    author: "purepool studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 69,
    level: "Beginner",
    price: 25,
    studentsText: "+25k",
    category: "UI/UX Design",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    title: "Build Digital Asset",
    author: "purepool studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 69,
    level: "Beginner",
    price: 25,
    studentsText: "+25k",
    category: "Marketing",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    title: "The Power of Big Data",
    author: "purepool studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 69,
    level: "Beginner",
    price: 25,
    studentsText: "+25k",
    category: "Animation",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    title: "Balancing Productivity and...",
    author: "purepool studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 69,
    level: "Beginner",
    price: 25,
    studentsText: "+25k",
    category: "Creative Marketing",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800",
    title: "Mastering Money Manage...",
    author: "purepool studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 69,
    level: "Beginner",
    price: 25,
    studentsText: "+25k",
    category: "Music",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    title: "From Idea to Startup Succ...",
    author: "purepool studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 69,
    level: "Beginner",
    price: 25,
    studentsText: "+25k",
    category: "Social Media",
  },
];

// Generate 18 cards by repeating the 6 cards 3 times, matching the screenshot layout
export const ALL_COURSES: CourseItem[] = [
  ...BASE_COURSES.map((c) => ({ ...c, id: c.id })),
  ...BASE_COURSES.map((c) => ({ ...c, id: c.id + 6 })),
  ...BASE_COURSES.map((c) => ({ ...c, id: c.id + 12 })),
];
