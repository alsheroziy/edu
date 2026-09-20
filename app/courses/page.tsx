import Image from "next/image";
import Link from "next/link";
import CourseCard, { type CourseCardItem } from "@/components/card/card";

const coursesData: CourseCardItem[] = [
  {
    id: 1,
    title: "Kali Linux asoslari",
    slug: "kali-linux-asoslari",
    badge: "36 / 36",
    students: 599,
    logo: "/find.webp",
    progress: {
      current: 36,
      total: 36,
      percentage: 100,
      lastTopic: "Kalini Web-serverga aylantirish",
    },
    bgClass: "bg-[#d1d5db] dark:bg-[#2e333d]", // Kulrang
  },
  {
    id: 2,
    title: "Red Code",
    slug: "red-code",
    badge: "223",
    students: 76,
    rating: "5.0",
    logo: "/material.webp",
    modules: {
      count: 14,
      type: "video",
    },
    bgClass: "bg-[#d8b4fe] dark:bg-[#342447]", // Binafsha / Pushti
  },
  {
    id: 3,
    title: "NetSec",
    slug: "net-sec",
    students: 4,
    rating: "5.0",
    modules: {
      count: 6,
      type: "book",
    },
    bgClass: "bg-[#bfdbfe] dark:bg-[#20324f]", // Moviy / Havo rang
  },
  {
    id: 4,
    title: "Python asoslari",
    slug: "python-asoslari",
    badge: "180",
    students: 340,
    rating: "4.9",
    logo: "/material.webp",
    modules: {
      count: 12,
      type: "video",
    },
    bgClass: "bg-[#bbf7d0] dark:bg-[#1a382b]", // Yashil
  },
  {
    id: 5,
    title: "Web dasturlash (Frontend)",
    slug: "web-dasturlash-frontend",
    students: 182,
    rating: "5.0",
    logo: "/find.webp",
    progress: {
      current: 12,
      total: 24,
      percentage: 50,
      lastTopic: "React & Next.js asoslari",
    },
    bgClass: "bg-[#fed7aa] dark:bg-[#3d2c1e]", // To'q sariq
  },
  {
    id: 6,
    title: "Kiberxavfsizlikka kirish",
    slug: "kiberxavfsizlikka-kirish",
    badge: "95",
    students: 215,
    rating: "4.8",
    logo: "/map.webp",
    modules: {
      count: 8,
      type: "book",
    },
    bgClass: "bg-[#fecdd3] dark:bg-[#3d2128]", // Qizil / Pushti
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen w-full container mx-auto ">
      {/* Hero Section (Notion Academy style) */}
      <section className="pt-24 pb-14 md:pt-28 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Chap tomon: Matn va Tugmalar */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-neutral-900 dark:text-neutral-100 leading-[1.08] mb-5">
              Welcome to <br />
              EduHub Academy
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl mb-8 font-normal">
              Qiziqishni mahoratga aylantiring — tizimli kurslarni
              o&apos;rganing, amaliy ko&apos;nikmalarni shakllantiring va
              o&apos;z bilimlaringizni sertifikatlar bilan tasdiqlang.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#courses"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-medium bg-[#0081f2] hover:bg-[#0070d8] text-white transition-colors shadow-xs"
              >
                Barcha darslar
              </Link>
              <Link
                href="/roadmaps"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-medium bg-[#e7f3f8] hover:bg-[#d8ecf5] text-[#0081f2] dark:bg-neutral-800 dark:text-blue-400 dark:hover:bg-neutral-700 transition-colors"
              >
                Yo&apos;l xaritalari
              </Link>
            </div>
          </div>

          {/* O'ng tomon: course.png rasm illyustratsiyasi */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] lg:max-w-[480px]">
              <Image
                src="/course.png"
                alt="EduHub Academy Illustration"
                width={640}
                height={396}
                priority
                className="w-full h-auto object-contain select-none pointer-events-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kurslar qismi */}
      <section
        id="courses"
        className="mt-4 pt-10 pb-24 border-t border-neutral-200/80 dark:border-neutral-800"
      >
        <div className="mb-6">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Kurslar
          </h2>
        </div>

        {/* Kartalar to'plami */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}
