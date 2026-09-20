"use client";

import { CheckCircle2, ChevronDown, Play } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { Lesson } from "../../types";

interface VideoPlayerProps {
  lesson: Lesson;
  onToggleComplete?: () => void;
  isCompleted?: boolean;
}

export default function VideoPlayer({
  lesson,
  onToggleComplete,
  isCompleted,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full space-y-3">
      {/* 16:9 Video Player (Skrinshotdagi kabi) */}
      <div className="relative aspect-video w-full overflow-hidden rounded-[20px] bg-black shadow-md border border-neutral-200/80 dark:border-neutral-800">
        {isPlaying && lesson.videoUrl ? (
          <iframe
            src={`${lesson.videoUrl}?autoplay=1`}
            title={lesson.title}
            className="size-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="relative flex size-full items-center justify-center bg-neutral-950">
            {/* O'rtadagi binafsha play tugmasi */}
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              className="group flex size-20 items-center justify-center rounded-full bg-[#8c8eff] text-white shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
              aria-label="Videoni ijro etish"
            >
              <Play className="size-9 fill-white translate-x-0.5" />
            </button>
          </div>
        )}
      </div>

      {/* Video ostidagi status qatori (Skrinshot 1 dagi kabi) */}
      <div className="flex items-center justify-between text-xs text-neutral-600 dark:text-neutral-400 px-1">
        <button
          type="button"
          className="flex items-center gap-1 font-medium hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
        >
          <span>Mening video ko&apos;rishim</span>
          <ChevronDown className="size-3.5" />
        </button>

        <div className="flex items-center gap-3">
          <span className="font-semibold text-neutral-700 dark:text-neutral-300 font-mono">
            0% ko&apos;rilgan
          </span>

          {onToggleComplete && (
            <Button
              variant={isCompleted ? "secondary" : "outline"}
              size="sm"
              onClick={onToggleComplete}
              className="h-7 px-2.5 text-xs gap-1.5 rounded-lg"
            >
              <CheckCircle2
                className={`size-3.5 ${
                  isCompleted
                    ? "text-emerald-500 fill-emerald-500/20"
                    : "text-muted-foreground"
                }`}
              />
              <span>
                {isCompleted ? "Tugatildi" : "Tugatildi deb belgilash"}
              </span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
