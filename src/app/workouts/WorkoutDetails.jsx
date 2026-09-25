import Image from "next/image";
import ButtonAction from "@/app/components/buttonAction/ButtonAction";

export default function WorkoutDetails({ workout }) {
    return (
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">

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

                {/* INFORMATION */}
                <div className="rounded-2xl border border-gray-800 bg-[#191919]">

                    <InfoRow
                        label="EQUIPMENT"
                        value={
                            Array.isArray(workout.equipment)
                                ? workout.equipment.join(", ")
                                : workout.equipment
                        }
                    />

                    <InfoRow
                        label="DIFFICULTY"
                        value={workout.difficulty}
                    />

                    <InfoRow
                        label="SETS"
                        value={workout.sets}
                    />

                    <InfoRow
                        label="REPS"
                        value={workout.reps}
                    />

                    <InfoRow
                        label="DURATION"
                        value={workout.duration}
                    />

                    <InfoRow
                        label="CALORIES"
                        value={`${workout.calories} kcal`}
                    />

                    <InfoRow
                        label="RATING"
                        value={`★ ${workout.rating}`}
                        last
                    />

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
                <ButtonAction workout={workout} />

            </div>
        </div>
    );
}

function InfoRow({ label, value, last = false }) {
    return (
        <div
            className={`flex items-center justify-between px-5 py-4 ${
                !last ? "border-b border-gray-800" : ""
            }`}
        >
            <span className="text-sm font-semibold text-gray-500">
                {label}
            </span>

            <span className="text-right font-medium">
                {value}
            </span>
        </div>
    );
}