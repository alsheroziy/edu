"use client";

import { CheckCircle2, ChevronDown, Star } from "lucide-react";
import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import type { CourseModule, Lesson } from "../../types";

interface CourseSidebarProps {
  modules: CourseModule[];
  totalScore: string;
  activeLessonId: string;
  onSelectLesson: (module: CourseModule, lesson: Lesson) => void;
}

export default function CourseSidebar({
  modules,
  totalScore,
  onSelectLesson,
}: CourseSidebarProps) {
  // Har doim akkordeonlar yopiq holda boshlanadi
  const [openModuleIds, setOpenModuleIds] = useState<string[]>([]);

  const toggleModule = (id: string) => {
    setOpenModuleIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <Sidebar
      collapsible="none"
      className="w-[280px] sm:w-[300px] lg:w-[320px] shrink-0 border-r border-border bg-white dark:bg-[#191919] text-foreground p-3 select-none"
    >
      {/* 1. Jarayon qismi (Yumaloq yashil ixcham kartochka, soyasiz) */}
      <SidebarHeader className="p-0 mb-2">
        <div className="flex items-center justify-between rounded-[16px] bg-[#cde4cb] dark:bg-[#1a382b] px-4 py-2.5">
          <span className="text-xs font-bold text-neutral-800 dark:text-neutral-100">
            Jarayon
          </span>
          <div className="rounded-full bg-[#48bb78] px-2.5 py-0.5 text-[11px] font-bold text-white font-mono">
            {totalScore}
          </div>
        </div>
      </SidebarHeader>

      {/* 2. Modullar ro'yxati (Soyasiz va chaqmoq GIF bilan) */}
      <SidebarContent className="p-0 overflow-y-auto space-y-2">
        <SidebarGroup className="p-0">
          <SidebarGroupContent className="space-y-2">
            {modules.map((mod) => {
              const isOpen = openModuleIds.includes(mod.id);
              const allCompleted = mod.lessons.every((l) => l.isCompleted);

              return (
                <div
                  key={mod.id}
                  className="rounded-[18px] bg-card border border-neutral-200/90 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 overflow-hidden"
                >
                  {/* Modul boshi / Barqaror o'lchamli Trigger */}
                  <button
                    type="button"
                    onClick={() => toggleModule(mod.id)}
                    className="w-full px-3.5 py-2.5 flex items-center justify-between text-left select-none cursor-pointer transition-colors hover:bg-neutral-50/50 dark:hover:bg-neutral-800/30"
                  >
                    <div className="min-w-0 flex-1 pr-2">
                      <h3 className="text-[13px] font-bold tracking-tight line-clamp-1 leading-tight text-foreground">
                        {mod.title}
                      </h3>
                      <p className="text-[11px] text-muted-foreground font-normal mt-0.5 leading-tight">
                        Modul {mod.moduleNumber}
                      </p>
                    </div>

                    {/* O'ng tomon: Chaqmoq GIF + Check yoki Silliq aylanuvchi Ko'k Strelka */}
                    <div className="flex items-center gap-2 shrink-0">
                      {allCompleted && mod.moduleNumber === 1 ? (
                        <>
                          <div className="flex items-center gap-1 text-[11px] font-semibold text-foreground font-mono">
                            <Star className="size-3.5 fill-amber-400 text-amber-400" />
                            <span>1 / 1</span>
                          </div>
                          <CheckCircle2 className="size-4 text-[#3ecf6a]" />
                        </>
                      ) : (
                        <div className="flex size-5.5 items-center justify-center rounded-full bg-[#0081f2] text-white">
                          <ChevronDown
                            className={cn(
                              "size-3.5 stroke-[2.5] transition-transform duration-300 ease-out",
                              isOpen && "rotate-180",
                            )}
                          />
                        </div>
                      )}
                    </div>
                  </button>

                  {/* Silliq ochilib-yopiluvchi Panel */}
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden min-h-0">
                      <div className="px-2.5 pb-2.5 pt-1.5 space-y-1.5 border-t border-neutral-100 dark:border-neutral-800/80">
                        {mod.lessons.map((lesson) => {
                          return (
                            <button
                              key={lesson.id}
                              type="button"
                              onClick={() => onSelectLesson(mod, lesson)}
                              className="w-full rounded-[14px] bg-card dark:bg-[#252525] px-3 py-2 flex items-center justify-between select-none cursor-pointer text-left transition-all border border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700"
                            >
                              {/* Chap: Dars nomi va Dars raqami + Vaqti */}
                              <div className="min-w-0 flex-1 pr-2">
                                <h4 className="text-[12px] font-bold text-foreground line-clamp-1 leading-tight">
                                  {lesson.title}
                                </h4>
                                <div className="mt-1 flex items-center gap-1.5 text-[10.5px] text-muted-foreground font-medium">
                                  <span>{lesson.lessonNumber}</span>
                                  {lesson.duration && (
                                    <span className="rounded-full border border-neutral-200 dark:border-neutral-700 bg-card px-2 py-0.5 text-[10px] font-mono text-muted-foreground font-medium leading-none">
                                      {lesson.duration}
                                    </span>
                                  )}
                                </div>
                              </div>

                              {/* O'ng: ⭐ 1 / 1 va Yashil check */}
                              <div className="flex items-center gap-2 shrink-0">
                                <div className="flex items-center gap-1 text-[11px] font-semibold text-foreground font-mono">
                                  <Star className="size-3.5 fill-amber-400 text-amber-400" />
                                  <span>{lesson.score || "1 / 1"}</span>
                                </div>

                                <CheckCircle2
                                  className={cn(
                                    "size-4 shrink-0",
                                    lesson.isCompleted
                                      ? "text-[#3ecf6a]"
                                      : "text-muted-foreground/40",
                                  )}
                                />
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
