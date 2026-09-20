import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { User, ThumbsUp, ChevronRight, Video, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

export interface CourseCardItem {
  id: string | number;
  title: string;
  slug?: string;
  badge?: string;
  students?: number | string; // e.g. 599, 76, 4, "-"
  rating?: number | string; // e.g. 5.0
  logo?: string; // e.g. Kali dragon, hacker mask
  modules?: {
    count: number;
    type?: "video" | "book";
  };
  progress?: {
    current: number;
    total: number;
    percentage: number;
    lastTopic?: string;
  };
  bgClass?: string;
}

export default function CourseCard({ course }: { course: CourseCardItem }) {
  return (
    <Card
      className={cn(
        "group relative flex flex-col justify-between h-[168px] w-full rounded-[20px] p-5 border-0 bg-[#f7f6f5] dark:bg-[#1f1f1f] cursor-pointer select-none",
        course.bgClass
      )}
    >
      <Link
        href={`/courses/${course.slug || course.id}`}
        className="absolute inset-0 z-10"
      />

      {/* 1. Tepa qator: Nishonlar (Badge, O'quvchi, Baho) va O'ngdagi Logotip */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          {/* Ko'k Badge (chaqmoqcha + raqam) */}
          {course.badge && (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#0081f2] text-white shadow-xs">
              <Image
                src="/ZapIcon-64.gif"
                alt="Zap"
                width={14}
                height={14}
                className="size-3.5 object-contain shrink-0 select-none pointer-events-none"
                unoptimized
              />
              <span>{course.badge}</span>
            </div>
          )}

          {/* O'quvchilar soni */}
          {course.students !== undefined && (
            <div className="flex items-center gap-1 font-medium text-neutral-600 dark:text-neutral-300 text-[12.5px]">
              <User className="size-3.5 stroke-[2] text-neutral-500 dark:text-neutral-400" />
              <span>{course.students}</span>
            </div>
          )}

          {/* Baholash / Like */}
          {course.rating !== undefined && (
            <div className="flex items-center gap-1 font-medium text-neutral-600 dark:text-neutral-300 text-[12.5px]">
              <ThumbsUp className="size-3.5 stroke-[2] text-neutral-500 dark:text-neutral-400" />
              <span>{course.rating}</span>
            </div>
          )}
        </div>

        {/* O'ng tomondagi logotip */}
        {course.logo && (
          <div className="relative w-8 h-8 shrink-0 flex items-center justify-center">
            <Image
              src={course.logo}
              alt={course.title}
              width={32}
              height={32}
              className="size-full object-contain pointer-events-none select-none"
            />
          </div>
        )}
      </div>

      {/* 2. O'rta qism: Kurs nomi */}
      <div className="my-auto py-1">
        <h3 className="text-[17px] font-bold tracking-tight text-neutral-900 dark:text-neutral-100 line-clamp-1">
          {course.title}
        </h3>
      </div>

      {/* 3. Pastki qism: Progress bar yoki Modul soni */}
      <div className="mt-auto">
        {course.progress ? (
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-[11.5px] text-neutral-600 dark:text-neutral-300 font-medium">
              <span className="text-amber-500 dark:text-amber-400 font-semibold text-[11px]">⚡</span>
              <span>
                {course.progress.current} / {course.progress.total}
              </span>
              <span className="text-neutral-400">•</span>
              <span>{course.progress.percentage}%</span>
              {course.progress.lastTopic && (
                <>
                  <span className="text-neutral-400">•</span>
                  <span className="truncate max-w-[210px] text-neutral-500 dark:text-neutral-400 font-normal">
                    {course.progress.lastTopic}
                  </span>
                </>
              )}
            </div>
            {/* Yashil progress bar */}
            <div className="h-1.5 w-full bg-neutral-200/80 dark:bg-neutral-700/80 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#3ecf6a] rounded-full transition-all duration-300"
                style={{ width: `${course.progress.percentage}%` }}
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between text-neutral-600 dark:text-neutral-300 text-[12.5px] font-medium">
            <div className="flex items-center gap-1.5">
              {course.modules?.type === "book" ? (
                <BookOpen className="size-3.5 stroke-[1.8] text-neutral-500 dark:text-neutral-400" />
              ) : (
                <Video className="size-3.5 stroke-[1.8] text-neutral-500 dark:text-neutral-400" />
              )}
              <span>{course.modules?.count} modul</span>
            </div>

            <ChevronRight className="size-4 stroke-[2] text-neutral-400" />
          </div>
        )}
      </div>
    </Card>
  );
}
