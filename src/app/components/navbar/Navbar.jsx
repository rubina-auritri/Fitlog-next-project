"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import fitlog from "@/assets/logo.png";
import Badge from "./Badge";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-black px-6 py-4 text-white">
      {/* Logo */}
      <Link href="/" className=" flex font-semibold tracking-wide ">
  <Image
    src={fitlog}
    alt="FitLog"
    width={20}
    height={20}
  />FITLOG
</Link>
      {/* Links */}
      <div className="flex gap-6">
        <Link
          href="/"
          className={pathname === "/workouts" ? "font-bold text-[#CCFF00]" : "text-white"}
        >
          Workout
        </Link>

        <Link
          href="/myplan"
          className={
            pathname === "/myplan"
              ? "font-bold text-[#CCFF00]"
              : "text-white"
          }
        >
          My Plan
        </Link>
      </div>

      {/* Badges */}
      <div >
       <Badge/>
      </div>
    </nav>
  );
}