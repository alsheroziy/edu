"use client";

import { ArrowLeft, Star } from "lucide-react";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import ContentRenderer from "./_components/content/content-renderer";
import CourseSidebar from "./_components/sidebar/course-sidebar";
import LeftRail from "./_components/sidebar/left-rail";
import { getCourseData } from "./data";
import type { CourseModule, Lesson } from "./types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function CourseDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams?.slug || "kali-linux-asoslari";

  const [course, setCourse] = useState(() => getCourseData(slug));

  // Orqa fon (body) scroll bo'lib ketmasligi va faqat kurs kontenti silliq scroll bo'lishi uchun
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Boshlang'ich dars: 5-modulning oxirgi darsi (Skrinshotdagi: Kalini Web-serverga aylantirish)
  const initialModule =
    course.modules.find((m) => m.id === "mod-5") ||
    course.modules[course.modules.length - 1] ||
    course.modules[0];

  const initialLesson =
    initialModule?.lessons.find((l) => l.id === "lesson-5-7") ||
    initialModule?.lessons[initialModule.lessons.length - 1] ||
    course.modules[0]?.lessons[0];

  const [activeModule, setActiveModule] = useState<CourseModule>(initialModule);
  const [activeLesson, setActiveLesson] = useState<Lesson>(initialLesson);

  const handleSelectLesson = (mod: CourseModule, les: Lesson) => {
    setActiveModule(mod);
    setActiveLesson(les);
  };

  const handleToggleComplete = () => {
    setCourse((prev) => ({
      ...prev,
      modules: prev.modules.map((m) => ({
        ...m,
        lessons: m.lessons.map((l) =>
          l.id === activeLesson.id ? { ...l, isCompleted: !l.isCompleted } : l,
        ),
      })),
    }));
    setActiveLesson((prev) => ({ ...prev, isCompleted: !prev.isCompleted }));
  };

  return (
    <TooltipProvider>
      <div className="fixed inset-0 z-50 bg-background text-foreground flex h-svh w-screen overflow-hidden">
        <SidebarProvider
          defaultOpen={true}
          className="flex size-full min-h-0 overflow-hidden"
        >
          {/* 1. Eng chapdagi tor Icon Rail (shadcn Sidebar + Home, Maqolalar, Yangiliklar) */}
          <LeftRail />

          {/* 2. O'rtadagi Modullar va Darslar Sidebari (shadcn Sidebar + Notion Style) */}
          <CourseSidebar
            modules={course.modules}
            totalScore={course.totalScore}
            activeLessonId={activeLesson.id}
            onSelectLesson={handleSelectLesson}
          />

          {/* 3. O'ng tomon: Asosiy Darslik Maydoni (shadcn SidebarInset) */}
          <SidebarInset className="flex-1 flex flex-col min-w-0 min-h-0 h-full overflow-hidden bg-background">
            {/* Tepadagi Header: Ortga qaytish ikonka + Breadcrumb + ⭐ 36 / 36 */}
            <header className="h-14 shrink-0 border-b border-border flex items-center justify-between px-6 bg-background z-10">
              <div className="flex items-center gap-3 overflow-hidden text-sm">
                {/* Ortga qaytish icon tugmasi */}
                <Link
                  href="/courses"
                  className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shadow-2xs"
                  title="Kurslarga qaytish"
                >
                  <ArrowLeft className="size-4 stroke-[2.2]" />
                </Link>

                {/* Breadcrumbs */}
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground truncate">
                  <span className="truncate">{activeModule.title}</span>
                  <span className="text-muted-foreground/60">/</span>
                  <span className="truncate text-foreground font-semibold">
                    {activeLesson.title}
                  </span>
                </div>
              </div>

              {/* ⭐ 36 / 36 ko'k nishon */}
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0081f2] px-3.5 py-1 text-xs font-bold text-white shadow-xs shrink-0 font-mono">
                <Star className="size-3.5 fill-amber-300 text-amber-300" />
                <span>{course.totalScore}</span>
              </div>
            </header>

            {/* Asosiy Kontent (To'liq va qotmasdan silliq scroll bo'luvchi qism) */}
            <div className="flex-1 min-h-0 overflow-y-auto p-6 sm:p-10 lg:p-12">
              <div className="w-full pb-20">
                <ContentRenderer
                  lesson={activeLesson}
                  onToggleComplete={handleToggleComplete}
                  isCompleted={activeLesson.isCompleted}
                />
              </div>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </TooltipProvider>
  );
}
