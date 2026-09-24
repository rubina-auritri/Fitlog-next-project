
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import fitlog from "@/assets/logo.png";
import Badge from "./Badge";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-black text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-3 sm:px-5 md:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 font-semibold tracking-wide"
        >
          <Image
            src={fitlog}
            alt="FitLog"
            width={24}
            height={24}
            className="h-6 w-6"
          />

          <span className="text-sm sm:text-base">
            FITLOG
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-3 text-sm sm:gap-5 sm:text-base md:gap-7">
          <Link
            href="/workouts"
            className={
              pathname === "/workouts"
                ? "font-bold text-[#CCFF00]"
                : "text-white transition hover:text-[#CCFF00]"
            }
          >
            Workout
          </Link>

          <Link
            href="/myplan"
            className={
              pathname === "/myplan"
                ? "font-bold text-[#CCFF00]"
                : "text-white transition hover:text-[#CCFF00]"
            }
          >
            My Plan
          </Link>
        </div>

        {/* Badges */}
        <div className="shrink-0">
          <Badge />
        </div>

      </div>
    </nav>
  );
}

