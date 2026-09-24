"use client";

import { useFitLog } from "@/context/FitlogContext";

const Badge = () => {
    const { plan, saved } = useFitLog();

    return (
        <div className="flex gap-2">
            <span className="rounded-full bg-[#CCFF00] px-4 py-2 font-semibold text-black">
                Plan {plan.length}
            </span>

            <span className="rounded-full border border-white px-4 py-2 font-semibold text-white">
                Saved {saved.length}
            </span>
        </div>
    );
};

export default Badge;