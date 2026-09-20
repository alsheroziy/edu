import type { CourseDetail } from "./types";

export const defaultCourseData: CourseDetail = {
  id: 1,
  slug: "kali-linux-asoslari",
  title: "Kali Linux asoslari",
  logo: "/find.webp",
  totalScore: "36 / 36",
  modules: [
    {
      id: "mod-1",
      title: "Kirish",
      moduleNumber: 1,
      lessons: [
        {
          id: "lesson-1-1",
          title: "Kali Linux nima va u kimlar uchun mo'ljallangan?",
          lessonNumber: "Dars 1.1",
          type: "text",
          duration: "4 daqiqalik mutolaa",
          score: "1 / 1",
          isCompleted: true,
          contentHtml: `
            <h2>1. Kali Linux haqida umumiy ma'lumot</h2>
            <p>
              <strong>Kali Linux</strong> — bu kiberxavfsizlik mutaxassislari, axborot xavfsizligi tahlilchilari va penetratsion test (pentest) o'tkazuvchilar uchun mo'ljallangan maxsus operatsion tizimdir. U <em>Debian</em> distributivi asosida yaratilgan bo'lib, Offensive Security jamoasi tomonidan faol ishlab chiqiladi va qo'llab-quvvatlanadi.
            </p>

            <h3>Kali Linux ning asosiy xususiyatlari:</h3>
            <ul>
              <li><strong>600 dan ortiq xavfsizlik vositalari:</strong> Nmap, Wireshark, Metasploit, Burp Suite, Aircrack-ng kabi professional vositalar tizimga oldindan o'rnatilgan holda keladi.</li>
              <li><strong>To'liq bepul va ochiq kodli:</strong> Siz undan istalgan maqsadlarda erkin foydalanishingiz mumkin.</li>
              <li><strong>Ko'p tilli qo'llab-quvvatlash:</strong> Dunyoning ko'plab tillarida interfeys mavjud.</li>
              <li><strong>Moslashuvchanlik:</strong> Maxsus yadrolar (custom kernel) va qo'shimcha drayverlarni osongina sozlash mumkin.</li>
            </ul>

            <blockquote>
              <strong>Eslatma:</strong> Ushbu kurs davomida o'rganiladigan barcha usullar va buyruqlar faqatgina ta'lim hamda o'z tizimlaringiz xavfsizligini ta'minlash maqsadida qo'llanilishi shart. Begona tizimlarga ruxsatsiz kirish qonunan javobgarlikka sabab bo'ladi.
            </blockquote>

            <h3>Kerakli dastlabki buyruqlar:</h3>
            <pre><code># Tizim paketlarini yangilash
sudo apt update && sudo apt upgrade -y

# Hozirgi foydalanuvchini aniqlash
whoami

# Tizim arxitekturasi va yadro versiyasini ko'rish
uname -a</code></pre>

            <p>
              Keyingi darsimizda Kali Linux-ni virtual mashinaga to'g'ri o'rnatish va zarur muhitni sozlashni video qo'llanma orqali o'rganamiz.
            </p>
          `,
          aiSummary:
            "Kali Linux — Debian asosidagi 600+ ta xavfsizlik va tahlil dasturlariga ega bo'lgan operatsion tizim. Ushbu darsda tizimning tarixi, asosiy imkoniyatlari hamda etika va xavfsizlik qoidalari yoritilgan.",
        },
      ],
    },
    {
      id: "mod-2",
      title: "Kerakli dasturlarni o'rnatish sozlash",
      moduleNumber: 2,
      lessons: [
        {
          id: "lesson-2-1",
          title: "Kerakli dasturlarni o'rnatish jarayoni va reja",
          lessonNumber: "Dars 2.1",
          type: "video",
          duration: "01:38",
          score: "1 / 1",
          isCompleted: true,
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          aiSummary:
            "Laboratoriya muhitini tashkil qilishda virtualizatsiya tushunchasi va kerakli ISO tasvirlarni yuklab olish tartibi tushuntirilgan.",
        },
        {
          id: "lesson-2-2",
          title: "Laboratoriya ko'rinishi VirtualBox ni sozlash",
          lessonNumber: "Dars 2.2",
          type: "video",
          duration: "02:52",
          score: "1 / 1",
          isCompleted: true,
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          aiSummary:
            "Oracle VirtualBox dasturini rasmiy veb-saytdan yuklab olish, o'rnatish va tarmoq adapterlarini sozlash ko'rsatilgan.",
        },
        {
          id: "lesson-2-3",
          title: "Virtual muhit talablari va tizim parametrlari (Qo'llanma)",
          lessonNumber: "Dars 2.3",
          type: "text",
          duration: "3 daqiqalik mutolaa",
          score: "1 / 1",
          isCompleted: true,
          contentHtml: `
            <h2>Virtual mashina uchun minimal talablar</h2>
            <p>Kali Linux virtual mashinada qotmasdan, silliq ishlashi uchun kompyuteringiz quyidagi minimal ko'rsatkichlarga ega bo'lishi tavsiya etiladi:</p>

            <div class="overflow-x-auto my-4">
              <table class="min-w-full text-left text-sm border-collapse border border-neutral-200 dark:border-neutral-800">
                <thead>
                  <tr class="bg-neutral-100 dark:bg-neutral-800">
                    <th class="p-2.5 border border-neutral-200 dark:border-neutral-800">Komponent</th>
                    <th class="p-2.5 border border-neutral-200 dark:border-neutral-800">Minimal talab</th>
                    <th class="p-2.5 border border-neutral-200 dark:border-neutral-800">Tavsiya etiladi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="p-2.5 border border-neutral-200 dark:border-neutral-800">Operativ xotira (RAM)</td>
                    <td class="p-2.5 border border-neutral-200 dark:border-neutral-800">2 GB</td>
                    <td class="p-2.5 border border-neutral-200 dark:border-neutral-800">4 GB - 8 GB</td>
                  </tr>
                  <tr>
                    <td class="p-2.5 border border-neutral-200 dark:border-neutral-800">Disk maydoni</td>
                    <td class="p-2.5 border border-neutral-200 dark:border-neutral-800">20 GB</td>
                    <td class="p-2.5 border border-neutral-200 dark:border-neutral-800">40 GB SSD</td>
                  </tr>
                  <tr>
                    <td class="p-2.5 border border-neutral-200 dark:border-neutral-800">Protsessor (CPU)</td>
                    <td class="p-2.5 border border-neutral-200 dark:border-neutral-800">1 Core</td>
                    <td class="p-2.5 border border-neutral-200 dark:border-neutral-800">2+ Core (VT-x / AMD-V)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>BIOS/UEFI sozlamalarida Virtualizatsiyani yoqish</h3>
            <p>Agar virtual mashinani yaratishda 64-bitli tizimlar ro'yxatda chiqmasa, kompyuteringiz BIOS sozlamalarida <code>Intel Virtualization Technology (VT-x)</code> yoki <code>AMD SVM</code> yoqilganligiga ishonch hosil qiling.</p>
          `,
          aiSummary:
            "Virtualizatsiyani ishga tushirish uchun minimal apparat talablari va BIOS sozlamalarida VT-x/AMD-V funksiyasini faollashtirish bo'yicha qo'llanma.",
        },
        {
          id: "lesson-2-8",
          title: "Kali Linux-ni MacOS ga Virtual mashina sifatida o'rnatish",
          lessonNumber: "Dars 2.8",
          type: "video",
          duration: "09:30",
          score: "1 / 1",
          isCompleted: false,
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          aiSummary:
            "Apple Silicon (M1/M2/M3) chipidagi MacOS kompyuterlarida UTM yoki Parallels orqali Kali Linux ARM versiyasini sozlash va to'liq o'rnatish bosqichlari.",
        },
        {
          id: "lesson-2-9",
          title: "Windows-ni Virtual mashina sifatida sozlash",
          lessonNumber: "Dars 2.9",
          type: "video",
          duration: "07:49",
          score: "1 / 1",
          isCompleted: true,
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
      ],
    },
    {
      id: "mod-3",
      title: "Terminal bilan tanishuv va kerakli komandalar",
      moduleNumber: 3,
      lessons: [
        {
          id: "lesson-3-1",
          title: "Kali Linux interfeysi bilan tanishish",
          lessonNumber: "Dars 3.1",
          type: "video",
          duration: "02:54",
          score: "1 / 1",
          isCompleted: true,
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          id: "lesson-3-2",
          title: "Terminal bilan tanishib chiqamiz",
          lessonNumber: "Dars 3.2",
          type: "video",
          duration: "06:23",
          score: "1 / 1",
          isCompleted: true,
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          id: "lesson-3-3",
          title: "Terminalda kombinatsiyalar bilan ishlash",
          lessonNumber: "Dars 3.3",
          type: "video",
          duration: "05:59",
          score: "1 / 1",
          isCompleted: true,
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          id: "lesson-3-4",
          title: "root Kali Linux",
          lessonNumber: "Dars 3.4",
          type: "video",
          duration: "06:49",
          score: "1 / 1",
          isCompleted: true,
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          id: "lesson-3-5",
          title: "Linuxda asosiy komandalar",
          lessonNumber: "Dars 3.5",
          type: "video",
          duration: "10:42",
          score: "1 / 1",
          isCompleted: true,
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          id: "lesson-3-6",
          title: "Kerakli dasturlarni o'rnatish (Terminal)",
          lessonNumber: "Dars 3.6",
          type: "video",
          duration: "04:23",
          score: "1 / 1",
          isCompleted: true,
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          id: "lesson-3-7",
          title: "Fayllarni arxivdan chiqarish (Terminal)",
          lessonNumber: "Dars 3.7",
          type: "video",
          duration: "05:15",
          score: "1 / 1",
          isCompleted: true,
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
      ],
    },
    {
      id: "mod-4",
      title: "Fayl va Directoriyalar bilan ishlash",
      moduleNumber: 4,
      lessons: [
        {
          id: "lesson-4-1",
          title: "Fayllar ustida amallar va ruxsatlar (chmod, chown)",
          lessonNumber: "Dars 4.1",
          type: "video",
          duration: "14:20",
          score: "1 / 1",
          isCompleted: false,
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
      ],
    },
    {
      id: "mod-5",
      title: "Tarmoq asoslari",
      moduleNumber: 5,
      lessons: [
        {
          id: "lesson-5-1",
          title: "Tarmoq asoslari kirish qismi",
          lessonNumber: "Dars 5.1",
          type: "video",
          duration: "02:30",
          score: "1 / 1",
          isCompleted: true,
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          id: "lesson-5-2",
          title: "Tarmoq sozlamalarni ko'rish va diagnostika",
          lessonNumber: "Dars 5.2",
          type: "video",
          duration: "04:37",
          score: "1 / 1",
          isCompleted: true,
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          id: "lesson-5-3",
          title: "VirtualBox-da Kali Linux bilan USB tarmoq adapterini ulash",
          lessonNumber: "Dars 5.3",
          type: "video",
          duration: "02:39",
          score: "1 / 1",
          isCompleted: true,
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          id: "lesson-5-4",
          title: "Monitoring rejimini tekshirish Windows",
          lessonNumber: "Dars 5.4",
          type: "video",
          duration: "02:39",
          score: "1 / 1",
          isCompleted: true,
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          id: "lesson-5-5",
          title: "Monitoring rejimini tekshirish macOS",
          lessonNumber: "Dars 5.5",
          type: "video",
          duration: "01:37",
          score: "1 / 1",
          isCompleted: true,
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          id: "lesson-5-6",
          title: "Nano yordamida fayllarni yaratish va ...",
          lessonNumber: "Dars 5.6",
          type: "video",
          duration: "06:11",
          score: "1 / 1",
          isCompleted: true,
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          id: "lesson-5-7",
          title: "Kalini Web-serverga aylantirish",
          lessonNumber: "Dars 5.7",
          type: "completion",
          duration: "10:00",
          score: "1 / 1",
          isCompleted: true,
        },
      ],
    },
  ],
};

export function getCourseData(slug: string): CourseDetail {
  return {
    ...defaultCourseData,
    slug,
    title:
      slug === "kali-linux-asoslari"
        ? "Kali Linux asoslari"
        : slug
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" "),
  };
}
