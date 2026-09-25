import Link from "next/link";
import WorkoutDetails from "@/app/workouts/WorkoutDetails";

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

    return workouts.find(
        (item) => String(item.id) === String(id)
    );
}

export default async function WorkoutDetailsPage({ params }) {
    const { id } = await params;

    const workout = await getWorkout(id);

    if (!workout) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#111111] px-4 text-white">
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
            <div className="mt-10">
                <WorkoutDetails workout={workout} />
            </div>
        </main>
    );
}