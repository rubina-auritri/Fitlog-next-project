import LibraryCard from "./LibraryCard";

async function getWorkouts() {
    const res = await fetch(
        "https://api.abcz.workers.dev/api/fitlog",
        {
            cache: "no-store",
        }
    );

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
                    <LibraryCard
                        key={workout.id}
                        workout={workout}
                    />
                ))}
            </div>
        </section>
    );
}