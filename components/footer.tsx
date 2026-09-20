import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-background pt-20 pb-12 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* 1. Yuqori CTA / Call-to-action bo'limi */}
        <div className="text-center flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Sizni qiziqtira oldikmi?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Xalqaro tajribaga ega mutaxassislar bilan birga dasturlashni
            o&apos;rganishni boshlang!
          </p>

          {/* CTA Tugmalari */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2 bg-[#0f172a] dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 font-medium px-6 py-2.5 h-11 rounded-lg transition-all shadow-xs"
            >
              <span className="text-amber-400">⚡</span>
              <span>Ishtirok etish</span>
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-medium px-6 py-2.5 h-11 rounded-lg transition-all shadow-xs"
            >
              Savolingiz bormi?
            </Link>
          </div>

          {/* O'rtadagi katta illustratsiya */}
          <div className="mt-14 w-full flex justify-center items-center select-none">
            <Image
              src="/image.png"
              alt="Talabalar va dars jarayoni illustratsiyasi"
              width={620}
              height={320}
              priority
              className="w-full max-w-md sm:max-w-lg md:max-w-xl h-auto object-contain dark:invert dark:opacity-90 pointer-events-none"
            />
          </div>
        </div>

        {/* 2. O'rta gorizontal havolalar menyusi */}
        <div className="mt-16 pt-10 border-t border-neutral-100 dark:border-neutral-800/80">
          <nav className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-3 text-sm font-medium text-neutral-700 dark:text-neutral-300">
            <Link
              href="/about"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Biz haqimizda
            </Link>
            <Link
              href="/courses"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Kurslar
            </Link>
            <Link
              href="/article"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Maqolalar
            </Link>
            <Link
              href="/news"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Yangiliklar
            </Link>
          </nav>

          {/* Ijtimoiy tarmoqlar ikonkalari */}
          <div className="mt-8 flex items-center justify-center gap-6 text-neutral-600 dark:text-neutral-400">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
              title="Instagram"
            >
              <svg
                className="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                role="img"
                aria-label="Instagram"
              >
                <title>Instagram</title>
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
              title="Telegram"
            >
              <svg
                className="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                role="img"
                aria-label="Telegram"
              >
                <title>Telegram</title>
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
              title="Twitter"
            >
              <svg
                className="size-5 fill-current"
                viewBox="0 0 24 24"
                role="img"
                aria-label="Twitter"
              >
                <title>Twitter</title>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
              title="GitHub"
            >
              <svg
                className="size-5 fill-current"
                viewBox="0 0 24 24"
                role="img"
                aria-label="GitHub"
              >
                <title>GitHub</title>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
              title="YouTube"
            >
              <svg
                className="size-5 fill-current"
                viewBox="0 0 24 24"
                role="img"
                aria-label="YouTube"
              >
                <title>YouTube</title>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

          {/* 3. Eng quyi qism: Copyright & Term / Privacy */}
          <div className="mt-8 text-center text-xs text-neutral-500 dark:text-neutral-400 space-y-2">
            <p>
              © {new Date().getFullYear()} EduHub. Barcha huquqlar himoyalangan.
            </p>
            <div className="flex items-center justify-center gap-3">
              <Link
                href="/terms"
                className="hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                Terms and Conditions
              </Link>
              <span>•</span>
              <Link
                href="/privacy"
                className="hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Pastki markazda joylashgan animatsion GIF mascot */}
          <div className="mt-8 flex justify-center items-center select-none">
            <Image
              src="/2-CcbPJLpa.gif"
              alt="Mascot animation"
              width={100}
              height={77}
              className="w-16 h-auto object-contain pointer-events-none"
              unoptimized
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
