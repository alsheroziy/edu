"use client";

import { ChevronDown, MessageCircle, Smile, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import type { Lesson } from "../../types";

interface CompletionContentProps {
  lesson: Lesson;
}

export default function CompletionContent({ lesson }: CompletionContentProps) {
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [comment, setComment] = useState("");

  return (
    <div className="w-full space-y-6">
      {/* Katta Sarlavha (Skrinshotdagi kabi) */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-neutral-100 tracking-tight">
        {lesson.title}
      </h1>

      {/* 1. Yulduzlar yig'ildi kartochkasi */}
      <div className="rounded-2xl border border-neutral-200/80 bg-white dark:bg-[#202020] p-4 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-sky-300 bg-[#e7f3fd] px-3 py-1 text-xs font-bold text-[#0081f2] dark:bg-blue-950/40 dark:border-blue-800">
            <Star className="size-3.5 fill-amber-400 text-amber-400" />
            <span>1 / 1</span>
          </div>
          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Dars uchun yulduzlar yig&apos;ildi
          </span>
        </div>

        <ChevronDown className="size-4 text-neutral-400" />
      </div>

      {/* 2. Kurator bilan suhbatlashish kartochkasi */}
      <div className="rounded-2xl border border-neutral-200/80 bg-white dark:bg-[#202020] p-4 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-3.5">
          {/* Kurator avatari */}
          <div className="relative size-10 rounded-full overflow-hidden border border-neutral-200 dark:border-neutral-700 shrink-0 bg-neutral-900">
            <Image
              src="/team.png"
              alt="Kurator"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
              Kurator bilan suhbatlashish
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              Istalgan savolni bering • Amaliyotni tekshirish
            </p>
          </div>
        </div>

        <button
          type="button"
          className="text-[#0081f2] hover:opacity-80 transition-opacity p-2"
          aria-label="Kuratorga yozish"
        >
          <MessageCircle className="size-5 stroke-[2]" />
        </button>
      </div>

      {/* 3. Siz ta'limni tamomladingiz kartochkasi */}
      <div className="rounded-3xl border border-neutral-200/80 bg-white dark:bg-[#202020] p-6 sm:p-12 text-center space-y-6 shadow-xs">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Siz ta&apos;limni tamomladingiz
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            Yangi narsalar izlash uchun bosing
          </p>
        </div>

        {/* Moviy quti va yurakcha illyustratsiyasi */}
        <div className="flex justify-center py-2">
          <div className="relative size-24 flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              className="size-20 text-[#38bdf8]"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              role="img"
              aria-label="Tamomlandi nishoni"
            >
              <title>Tamomlandi nishoni</title>
              {/* Box container */}
              <path d="M50 20 L85 38 L50 56 L15 38 Z" fill="#e0f2fe" />
              <path d="M15 38 L50 56 L50 90 L15 72 Z" fill="#bae6fd" />
              <path d="M85 38 L50 56 L50 90 L85 72 Z" fill="#7dd3fc" />
              {/* Heart floating above */}
              <path
                d="M50 32 C50 24 40 16 32 22 C24 28 32 40 50 50 C68 40 76 28 68 22 C60 16 50 24 50 32 Z"
                fill="#38bdf8"
                stroke="#0284c7"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        {/* Baholash qismi */}
        <div className="space-y-3">
          <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
            Kursni baholang
          </h3>

          <div className="flex items-center justify-center gap-1.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="p-1 transition-transform hover:scale-110"
              >
                <Star
                  className={`size-7 transition-colors ${
                    (hoverRating || rating) >= star
                      ? "fill-amber-400 text-amber-400"
                      : "text-neutral-200 fill-neutral-100 dark:text-neutral-700 dark:fill-neutral-800"
                  }`}
                />
              </button>
            ))}
          </div>

          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            Baholashingizni kutamiz
          </p>
        </div>

        {/* Sharh qoldirish maydoni */}
        <div className="relative rounded-2xl border border-neutral-200/80 bg-white dark:bg-[#181818] p-4 text-left shadow-xs focus-within:border-sky-400 transition-colors">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Siz ochiq sharh qoldiryapsiz"
            rows={3}
            className="w-full resize-none bg-transparent text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none pr-8"
          />
          <Smile className="size-5 text-neutral-400 absolute bottom-3.5 right-3.5 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
