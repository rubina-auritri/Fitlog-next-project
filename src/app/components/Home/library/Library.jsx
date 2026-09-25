
"use client";

import { useEffect, useState } from "react";
import LibraryCard from "./LibraryCard";
import SortBy from "./SortBy";

export default function Library() {
    const [workouts, setWorkouts] = useState([]);
    const [sortBy, setSortBy] = useState("duration");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getWorkouts() {
            try {
                const res = await fetch(
                    "https://api.abcz.workers.dev/api/fitlog"
                );

                if (!res.ok) {
                    throw new Error("Failed to fetch workouts");
                }

                const data = await res.json();
                setWorkouts(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        getWorkouts();
    }, []);

    const sortedWorkouts = [...workouts].sort((a, b) => {
        if (sortBy === "duration") {
            return Number(a.duration) - Number(b.duration);
        }

        if (sortBy === "calories") {
            return Number(a.calories) - Number(b.calories);
        }

        if (sortBy === "rating") {
            return Number(b.rating) - Number(a.rating);
        }

        return 0;
    });

    return (
        <section
            id="library"
            className="mx-auto max-w-7xl px-6 py-24"
        >
            {/* Heading + Sort */}
            <div className="flex items-end justify-between">
                <div>
                    <h2 className="font-[var(--font-inter)] text-sm font-bold tracking-[0.2em] text-[#C7FF00]">
                        THE LIBRARY
                    </h2>

                    <p className="mt-3 font-[var(--font-oswald)] text-xl">
                        Twelve lifts covering every major muscle group.
                    </p>
                </div>

                <SortBy onSort={setSortBy} />
            </div>

            {/* Loading */}
            {loading ? (
                <div className="mt-10 text-center text-[#C7FF00]">
                    Loading workouts...
                </div>
            ) : (
                /* Workout Grid */
                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {sortedWorkouts.map((workout) => (
                        <LibraryCard
                            key={workout.id}
                            workout={workout}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

