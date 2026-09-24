
import ButtonAction from "@/app/components/buttonAction/ButtonAction";
import Image from "next/image";
import Link from "next/link";

async function getWorkout(id) {
    const res = await fetch(
        "https://api.abcz.workers.dev/api/fitlog",
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch workouts");
    }

    const workouts = await res.json();

    const workout = workouts.find(
        (item) => String(item.id) === String(id)
    );

    return workout;
}

export default async function WorkoutDetailsPage({ params }) {
    const { id } = await params;

    const workout = await getWorkout(id);

    if (!workout) {
        return (
            <main className="container mx-auto mt-7 flex min-h-screen items-center justify-center bg-[#111111] px-4 text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">
                        Workout Not Found
                    </h1>

                    <p className="mt-3 text-gray-400">
                        The workout you are looking for does not exist.
                    </p>

                    <Link
                        href="/workout"
                        className="mt-6 inline-block rounded-xl bg-[#C7FF00] px-6 py-3 font-bold text-black"
                    >
                        Back to Workouts
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#111111] px-4 py-10 text-white">

            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 mt-10">

                {/* LEFT - IMAGE */}
                <div className="overflow-hidden rounded-2xl bg-[#1c1c1c]">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        width={800}
                        height={800}
                        className="h-full min-h-[500px] w-full object-cover"
                    />
                </div>

                {/* RIGHT - DETAILS */}
                <div className="space-y-7">

                    {/* TITLE */}
                    <div>
                        <h1 className="text-4xl font-bold uppercase md:text-5xl">
                            {workout.name}
                        </h1>

                        <p className="mt-4 leading-7 text-gray-400">
                            {workout.description}
                        </p>
                    </div>

                    {/* MUSCLE GROUPS */}
                    <div className="flex flex-wrap gap-2">
                        {workout.muscleGroups?.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-[#C7FF00] px-4 py-2 text-sm font-semibold text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* WORKOUT INFORMATION */}
                    <div className="rounded-2xl border border-gray-800 bg-[#191919]">

                        {/* EQUIPMENT */}
                        <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
                            <span className="text-sm font-semibold text-gray-500">
                                EQUIPMENT
                            </span>

                            <span className="text-right font-medium">
                                {Array.isArray(workout.equipment)
                                    ? workout.equipment.join(", ")
                                    : workout.equipment}
                            </span>
                        </div>

                        {/* DIFFICULTY */}
                        <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
                            <span className="text-sm font-semibold text-gray-500">
                                DIFFICULTY
                            </span>

                            <span className="font-medium">
                                {workout.difficulty}
                            </span>
                        </div>

                        {/* SETS */}
                        <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
                            <span className="text-sm font-semibold text-gray-500">
                                SETS
                            </span>

                            <span className="font-medium">
                                {workout.sets}
                            </span>
                        </div>

                        {/* REPS */}
                        <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
                            <span className="text-sm font-semibold text-gray-500">
                                REPS
                            </span>

                            <span className="font-medium">
                                {workout.reps}
                            </span>
                        </div>

                        {/* DURATION */}
                        <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
                            <span className="text-sm font-semibold text-gray-500">
                                DURATION
                            </span>

                            <span className="font-medium">
                                {workout.duration}
                            </span>
                        </div>

                        {/* CALORIES */}
                        <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
                            <span className="text-sm font-semibold text-gray-500">
                                CALORIES
                            </span>

                            <span className="font-medium">
                                {workout.calories} kcal
                            </span>
                        </div>

                        {/* RATING */}
                        <div className="flex items-center justify-between px-5 py-4">
                            <span className="text-sm font-semibold text-gray-500">
                                RATING
                            </span>

                            <span className="font-medium">
                                ★ {workout.rating}
                            </span>
                        </div>

                    </div>

                    {/* INSTRUCTIONS */}
                    <div>
                        <h2 className="mb-5 text-xl font-bold">
                            INSTRUCTIONS
                        </h2>

                        <ol className="space-y-4">
                            {workout.instructions?.map(
                                (instruction, index) => (
                                    <li
                                        key={index}
                                        className="flex gap-4 text-gray-300"
                                    >
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C7FF00] font-bold text-black">
                                            {index + 1}
                                        </span>

                                        <span className="leading-7">
                                            {instruction}
                                        </span>
                                    </li>
                                )
                            )}
                        </ol>
                    </div>

                    {/* BUTTONS */}
                    <div >

                        <ButtonAction workout={workout}/> 
                    </div>

                </div>
            </div>

        </main>
    );
}

