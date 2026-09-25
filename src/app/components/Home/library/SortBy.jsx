
"use client";

import { FaChevronDown } from "react-icons/fa";

export default function SortBy({ onSort }) {
    return (
        <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-400">
                Sort By
            </span>

            <div className="relative">
                <select
                    defaultValue="duration"
                    onChange={(e) => onSort(e.target.value)}
                    className="appearance-none rounded-lg border border-gray-700 bg-[#1a1a1a] px-4 py-2.5 pr-10 text-sm font-semibold text-white outline-none focus:border-[#C7FF00]"
                >
                    <option value="duration">
                        Duration
                    </option>

                    <option value="calories">
                        Calories
                    </option>

                    <option value="rating">
                        Rating
                    </option>
                </select>

                <FaChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#C7FF00]" />
            </div>
        </div>
    );
}

