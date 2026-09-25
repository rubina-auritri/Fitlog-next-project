import Image from "next/image";
import Link from "next/link";
import { FaRegClock, FaFire, FaStar, FaDumbbell } from "react-icons/fa";

export default function LibraryCard({ workout }) {
    return (
        <Link
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

                <p className="flex gap-1 mt-2 font-[var(--font-inter)] text-sm text-gray-400">
                    <FaDumbbell/> {workout.equipment}
                </p>

                <div className="mt-5 flex items-center justify-start gap-5 border-t border-[#292929] pt-4 font-[var(--font-inter)] text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                        <FaRegClock />
                        {workout.duration} min
                    </span>

                    <span className="flex items-center gap-1">
                        <FaFire />
                        {workout.caloriesBurned} kcal
                    </span>

                    <span className="flex items-center gap-1">
                        <FaStar />
                        {workout.rating}
                    </span>
                </div>
            </div>
        </Link>
    );
}