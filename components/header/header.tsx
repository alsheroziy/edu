import { cn } from "@/lib/utils";
import { ChevronDown, LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

const navLinks = [
    {
        title: "Yangiliklar",
        url: "/news",
    },
    {
        title: "O'rganing",
        url: "/product",
        children: [
            {
                title: "Yo'l xaritalari",
                description:
                    " Qaysi sohani qayerdan boshlash bo'yicha qadamma-qadam yo'riqnoma",
                url: "/roadmaps",
                image: "/map.webp",
                imageScale: "scale-170",
                bgClass: "bg-[#f0f5fa] dark:bg-[#16202c]",
            },
            {
                title: "Kurslar",
                description:
                    "Soha mutaxassislaridan tizimli video va amaliy darslar",
                url: "/courses",
                image: "/find.webp",
                imageScale: "scale-100",
                bgClass: "bg-[#fdf2f2] dark:bg-[#281b1b]",
            },
            {
                title: "Materiallar",
                description:
                    "Imtihonlar va darslar uchun tayyor cheat-sheet va qo'llanmalar",
                url: "/resources",
                image: "/material.webp",
                imageScale: "scale-160",
                bgClass: "bg-[#fbf7ee] dark:bg-[#262217]",
            },
        ],
    },
    {
        title: "Maqolalar",
        url: "/article",
    },
    {
        title: "Biz haqimizda",
        url: "/about",
    },
];

export default function Header() {
    return (
        <header className="fixed inset-x-0 top-0 z-50 h-[10vh] border-b bg-background px-4">
            <div className="container mx-auto flex h-full items-center justify-between">
                {/* logo */}
                <Link href="/" className="text-xl font-bold">
                    Logo
                </Link>

                {/* nav: O'rganing, Pricing, Resources */}
                <nav className="relative flex items-center gap-1.5">
                    {navLinks.map(item => {
                        if (item.children) {
                            return (
                                <div key={item.title} className="group py-2">
                                    <Link
                                        href={item.url}
                                        className="flex items-center gap-1 text-sm font-medium px-3 py-1.5 rounded-md text-foreground group-hover:bg-[#efefed] dark:group-hover:bg-[#2f2f2f] transition-colors"
                                    >
                                        <span>{item.title}</span>
                                        <ChevronDown className="size-3.5 transition-transform duration-200 group-hover:rotate-180" />
                                    </Link>

                                    {/* Notion-style Mega Menu Dropdown: O'rganing, Pricing, Resources markazida */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 hidden group-hover:block z-50 ">
                                        <div className="w-[670px] rounded-[20px] border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-[#202020] p-3.5 shadow-xl/4">
                                            <div className="grid grid-cols-3 gap-3">
                                                {item.children.map(child => (
                                                    <Link
                                                        key={child.title}
                                                        href={child.url}
                                                        className={cn(
                                                            "flex flex-col justify-between rounded-xl p-4 transition-all duration-150 hover:opacity-90 min-h-[240px]",
                                                            child.bgClass,
                                                        )}
                                                    >
                                                        {/* Illustration */}
                                                        <div className="flex items-center justify-center h-28 w-full mb-3 overflow-hidden">
                                                            <Image
                                                                src={
                                                                    child.image
                                                                }
                                                                alt={
                                                                    child.title
                                                                }
                                                                width={130}
                                                                height={100}
                                                                className={cn(
                                                                    "h-24 w-auto object-contain select-none pointer-events-none transition-transform duration-200",
                                                                    child.imageScale,
                                                                )}
                                                            />
                                                        </div>

                                                        {/* Title & Description */}
                                                        <div className="flex flex-col">
                                                            <h3 className="text-[17px] font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                                                                {child.title}
                                                            </h3>
                                                            <p className="text-[12.5px] leading-snug text-neutral-600 dark:text-neutral-300 mt-1.5 font-normal line-clamp-2 min-h-[36px]">
                                                                {
                                                                    child.description
                                                                }
                                                            </p>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={item.title}
                                href={item.url}
                                className="text-sm font-medium px-3 py-1.5 rounded-md text-foreground hover:bg-[#efefed] dark:hover:bg-[#2f2f2f] transition-colors"
                            >
                                {item.title}
                            </Link>
                        );
                    })}
                </nav>

                {/* Login */}
                <div className="flex gap-2 items-center">
                    <Avatar className="hidden">
                        <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                        />
                    </Avatar>
                    <Link href="/">
                        <Button className=" bg-[#0f172a]">
                            <LogIn />
                            Login
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
