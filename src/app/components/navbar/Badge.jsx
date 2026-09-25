"use client";

import { useFitLog } from "@/context/FitlogContext";
import Link from "next/link";

const Badge = () => {
    const { plan, saved } = useFitLog();

    return (
        <div className="flex gap-2">
            <Link href="/myplan?tab=plan">
                <span className="rounded-full bg-[#CCFF00] px-4 py-2 font-semibold text-black">
                    Plan {plan.length}
                </span>
            </Link>

            <Link href="/myplan?tab=saved">
                <span className="rounded-full border border-white px-4 py-2 font-semibold text-white">
                    Saved {saved.length}
                </span>
            </Link>
        </div>
    );
};

export default Badge;