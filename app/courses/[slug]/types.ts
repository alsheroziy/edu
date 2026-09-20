export type LessonType = "video" | "text" | "completion";

export interface Lesson {
  id: string;
  title: string;
  lessonNumber: string; // Masalan: "Dars 2.8"
  type: LessonType; // "video" yoki "text"
  duration?: string; // Masalan: "09:30" yoki "5 daqiqalik mutolaa"
  score?: string; // Masalan: "1 / 1"
  isCompleted?: boolean;
  videoUrl?: string; // Video bo'lsa: youtube, vimeo yoki direct mp4 URL
  contentHtml?: string; // Matn bo'lsa: Rich text / typography maqola
  aiSummary?: string; // "AI dan qisqa qayta bayon" uchun xulosa matni
}

export interface CourseModule {
  id: string;
  title: string;
  moduleNumber: number; // Masalan: 1, 2, 3
  lessons: Lesson[];
}

export interface CourseDetail {
  id: string | number;
  slug: string;
  title: string;
  logo?: string;
  totalScore: string; // Masalan: "36 / 36"
  modules: CourseModule[];
}
