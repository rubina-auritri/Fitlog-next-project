
import Image from "next/image";
import Link from "next/link";
import { FaRegClock, FaFire, FaStar } from "react-icons/fa";

async function getWorkouts() {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch workouts");
    }

    return res.json();
}

export default async function Library() {
    const workouts = await getWorkouts();

    return (
        <section
            id="library"
            className="mx-auto max-w-7xl px-6 py-24"
        >
            {/* Heading */}
            <h2 className="font-[var(--font-inter)] text-sm font-bold tracking-[0.2em] text-[#C7FF00]">
                THE LIBRARY
            </h2>

            <p className="mt-3 font-[var(--font-oswald)] text-xl">
                Twelve lifts covering every major muscle group.
            </p>

            {/* Workout Grid */}
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {workouts.map((workout) => (
                    <Link
                        key={workout.id}
                        href={`/workouts/${workout.id}`}
                        className="group overflow-hidden border border-[#292929] bg-[#111111] transition hover:-translate-y-1 hover:border-[#C7FF00]"
                    >
                        {/* Image */}
                        <div className="relative h-64 overflow-hidden bg-[#1b1b1b]">
                            <Image
                                src={workout.image}
                                alt={workout.name}
                                fill
                                className="object-cover transition duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-5">
                            <div className="flex gap-3">
                                {workout.muscleGroups.map((muscle) => (
                                    <span
                                        key={muscle}
                                        className="rounded bg-[#C7FF00] px-2 py-1 text-xs text-black"
                                    >
                                        {muscle}
                                    </span>
                                ))}
                            </div>
                            <h3 className="mt-4 font-[var(--font-oswald)] text-2xl font-bold uppercase">
                                {workout.name}
                            </h3>

                            <p className="mt-2 font-[var(--font-inter)] text-sm text-gray-400 ">
                                🖇️ {workout.equipment}
                            </p>

                            <div className="mt-5 flex items-center justify-start gap-5 border-t border-[#292929] pt-4 font-[var(--font-inter)] text-xs text-gray-400">

                                <span className="flex items-center gap-1">
                                    <FaRegClock />
                                    {workout.duration} min
                                </span>

                                <span className="flex items-center gap-1">
                                    <FaFire />
                                    {workout.calories} kcal
                                </span>

                                <span className="flex items-center gap-1">
                                    <FaStar />
                                    {workout.rating}
                                </span>

                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

