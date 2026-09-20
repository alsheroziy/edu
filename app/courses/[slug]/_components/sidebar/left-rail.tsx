"use client";

import { Activity, Bell, BookOpen, Home, Moon, Newspaper } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function LeftRail() {
  const { theme, setTheme } = useTheme();

  return (
    <Sidebar
      collapsible="none"
      className="w-14 sm:w-16 shrink-0 border-r border-border bg-white dark:bg-[#191919] text-foreground flex flex-col items-center justify-between py-3 select-none"
    >
      {/* Tepa piktogrammalar */}
      <SidebarHeader className="p-0 flex flex-col items-center w-full">
        {/* Yuqori logo / Activity waveform */}
        <Link
          href="/"
          className="flex size-9 items-center justify-center rounded-xl text-sky-500 hover:opacity-80 transition-opacity mb-2"
          title="Bosh sahifa"
        >
          <Activity className="size-6 stroke-[2.5]" />
        </Link>
      </SidebarHeader>

      <SidebarContent className="p-0 flex flex-col items-center w-full gap-2 overflow-y-auto">
        <SidebarMenu className="flex flex-col items-center w-full gap-2">
          {/* 1. Home (Bosh sahifa) */}
          <SidebarMenuItem className="flex justify-center w-full">
            <Tooltip>
              <TooltipTrigger
                render={
                  <SidebarMenuButton
                    render={<Link href="/" />}
                    className="flex size-9 items-center justify-center rounded-xl text-muted-foreground hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  />
                }
              >
                <Home className="size-5 stroke-[1.8]" />
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={8}>
                Bosh sahifa
              </TooltipContent>
            </Tooltip>
          </SidebarMenuItem>

          {/* 2. Maqolalar */}
          <SidebarMenuItem className="flex justify-center w-full">
            <Tooltip>
              <TooltipTrigger
                render={
                  <SidebarMenuButton
                    render={<Link href="/resources" />}
                    className="flex size-9 items-center justify-center rounded-xl text-muted-foreground hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  />
                }
              >
                <BookOpen className="size-5 stroke-[1.8]" />
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={8}>
                Maqolalar
              </TooltipContent>
            </Tooltip>
          </SidebarMenuItem>

          {/* 3. Yangiliklar */}
          <SidebarMenuItem className="flex justify-center w-full">
            <Tooltip>
              <TooltipTrigger
                render={
                  <SidebarMenuButton
                    render={<Link href="/news" />}
                    className="flex size-9 items-center justify-center rounded-xl text-muted-foreground hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  />
                }
              >
                <Newspaper className="size-5 stroke-[1.8]" />
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={8}>
                Yangiliklar
              </TooltipContent>
            </Tooltip>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      {/* Pastki qism */}
      <SidebarFooter className="p-0 flex flex-col items-center w-full gap-3 pt-2">
        {/* Dark/Light mode toggle */}
        <button
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex size-9 items-center justify-center rounded-xl text-muted-foreground hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          title="Mavzuni o'zgartirish"
        >
          <Moon className="size-5 stroke-[1.8]" />
        </button>

        {/* Bildirishnomalar */}
        <button
          type="button"
          className="flex size-9 items-center justify-center rounded-xl text-muted-foreground hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          title="Bildirishnomalar"
        >
          <Bell className="size-5 stroke-[1.8]" />
        </button>

        {/* Foydalanuvchi avatari (S) */}
        <div className="flex size-8 items-center justify-center rounded-full bg-[#38bdf8] text-white font-bold text-xs shadow-xs select-none">
          S
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
