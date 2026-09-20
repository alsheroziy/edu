import { BookOpen, CheckCircle2, Clock } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Lesson } from "../../types";

interface ArticleContentProps {
  lesson: Lesson;
  onToggleComplete?: () => void;
  isCompleted?: boolean;
}

export default function ArticleContent({
  lesson,
  onToggleComplete,
  isCompleted,
}: ArticleContentProps) {
  return (
    <div className="w-full space-y-6">
      {/* Tepa meta ma'lumotlar va Notion illustration cover */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-100 dark:border-neutral-800">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#e7f3f8] dark:bg-[#1f313e] text-[#2383e2] text-xs font-semibold">
              <BookOpen className="size-3.5" />
              <span>Matnli darslik</span>
            </span>
            {lesson.duration && (
              <span className="flex items-center gap-1 text-xs text-neutral-500 font-mono">
                <Clock className="size-3" />
                <span>{lesson.duration}</span>
              </span>
            )}
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            {lesson.title}
          </h1>
        </div>

        {/* Notion uslubidagi illyustratsiya */}
        <div className="relative size-16 shrink-0 select-none">
          <Image
            src="/material.webp"
            alt="Notion illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Notion uslubidagi Typography maqola matni */}
      <article
        className="prose prose-neutral max-w-none dark:prose-invert
          prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-neutral-900 dark:prose-headings:text-neutral-100
          prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3
          prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2
          prose-p:leading-relaxed prose-p:text-neutral-700 dark:prose-p:text-neutral-300 prose-p:text-[15px]
          prose-strong:text-neutral-900 dark:prose-strong:text-neutral-100
          prose-pre:bg-neutral-950 prose-pre:border prose-pre:border-neutral-800 prose-pre:rounded-xl prose-pre:p-4
          prose-code:text-[#0081f2] prose-code:font-mono prose-code:text-[13px] prose-code:bg-neutral-100 dark:prose-code:bg-neutral-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
          prose-blockquote:border-l-4 prose-blockquote:border-[#0081f2] prose-blockquote:bg-[#e7f3f8]/50 dark:prose-blockquote:bg-[#1f313e]/40 prose-blockquote:py-3 prose-blockquote:px-4 prose-blockquote:rounded-r-xl prose-blockquote:not-italic"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Trusted rich text editor content
        dangerouslySetInnerHTML={{ __html: lesson.contentHtml || "" }}
      />

      {/* Tugatildi deb belgilash */}
      {onToggleComplete && (
        <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
          <span className="text-xs text-neutral-500">
            Mavzuni o&apos;qib bo&apos;ldingizmi?
          </span>
          <Button
            variant={isCompleted ? "secondary" : "outline"}
            size="sm"
            onClick={onToggleComplete}
            className="h-8 px-3 text-xs gap-1.5 rounded-xl"
          >
            <CheckCircle2
              className={`size-3.5 ${
                isCompleted
                  ? "text-emerald-500 fill-emerald-500/20"
                  : "text-neutral-400"
              }`}
            />
            <span>{isCompleted ? "Tugatildi" : "Tugatildi deb belgilash"}</span>
          </Button>
        </div>
      )}
    </div>
  );
}
