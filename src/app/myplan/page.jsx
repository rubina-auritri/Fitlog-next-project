"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import {
    FaClock,
    FaFire,
    FaStar,
    FaCheck,
    FaTimes,
} from "react-icons/fa";

import { useFitLog } from "@/context/FitlogContext";

const MyPlan = () => {
    const {
        plan,
        saved,
        setPlan,
        setSaved,
    } = useFitLog();

    const [activeTab, setActiveTab] = useState("plan");

    // Show plan or saved
    const workouts = activeTab === "plan" ? plan : saved;

    // Calculate metrics
    const exercises = workouts.length;

    const minutes = workouts.reduce(
        (total, workout) =>
            total + Number(workout.duration || 0),
        0
    );

    const calories = workouts.reduce(
        (total, workout) =>
            total + Number(workout.caloriesBurned || 0),
        0
    );

    // Remove workout
    const handleRemove = (id) => {
        if (activeTab === "plan") {
            setPlan((prev) =>
                prev.filter((workout) => workout.id !== id)
            );
        } else {
            setSaved((prev) =>
                prev.filter((workout) => workout.id !== id)
            );
        }
    };

    // Mark as done
    const handleDone = (id) => {
        setPlan((prev) =>
            prev.filter((workout) => workout.id !== id)
        );
    };

    return (
        <main className="min-h-screen bg-[#111111] px-4 py-12 text-white">

            <div className="mx-auto max-w-6xl">

                {/* Heading */}
                <h1 className="text-5xl font-bold uppercase">
                    MY PLAN
                </h1>

                <p className="mt-3 text-gray-400">
                    Cap of five lifts for today. Finish them, then load more.
                </p>


                {/* Metrics */}
                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">

                    <div className="rounded-xl bg-[#1c1c1c] p-6">
                        <p className="text-sm text-gray-400">
                            Exercises
                        </p>

                        <h2 className="mt-2 text-4xl font-bold">
                            {exercises}
                        </h2>
                    </div>

                    <div className="rounded-xl bg-[#1c1c1c] p-6">
                        <p className="text-sm text-gray-400">
                            Minutes
                        </p>

                        <h2 className="mt-2 text-4xl font-bold">
                            {minutes}
                        </h2>
                    </div>

                    <div className="rounded-xl bg-[#1c1c1c] p-6">
                        <p className="text-sm text-gray-400">
                            Calories
                        </p>

                        <h2 className="mt-2 text-4xl font-bold">
                            {calories}
                        </h2>
                    </div>

                </div>


                {/* Tabs */}
                <div className="mt-12 flex gap-8 border-b border-gray-700">

                    <button
                        onClick={() => setActiveTab("plan")}
                        className={`pb-4 font-semibold ${activeTab === "plan"
                                ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                                : "text-gray-400"
                            }`}
                    >
                        Today&apos;s Plan
                    </button>

                    <button
                        onClick={() => setActiveTab("saved")}
                        className={`pb-4 font-semibold ${activeTab === "saved"
                                ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                                : "text-gray-400"
                            }`}
                    >
                        Saved
                    </button>

                </div>


                {/* Empty */}
                {workouts.length === 0 ? (

                    <div className="py-20 text-center">

                        <h2 className="text-3xl font-bold uppercase">
                            NOTHING HERE YET
                        </h2>

                        <p className="mx-auto mt-3 max-w-md text-gray-400">
                            Browse the library and add a lift to get today moving.
                        </p>

                        <Link
                            href="/"
                            className="mt-6 inline-block rounded-xl bg-[#ccff00] px-6 py-3 font-bold text-black"
                        >
                            Go to workouts
                        </Link>

                    </div>

                ) : (

                    /* Workout list */
                    <div className="mt-8 space-y-4">

                        {workouts.map((workout) => (

                            <div
                                key={workout.id}
                                className="flex flex-col gap-5 rounded-xl bg-[#1c1c1c] p-4 md:flex-row"
                            >

                                {/* Image */}
                                <Image
                                    src={workout.image}
                                    alt={workout.name}
                                    width={400}
                                    height={300}
                                    className="h-40 w-full rounded-lg object-cover md:w-48"
                                />

                                {/* Info */}
                                <div className="flex-1">

                                    <h2 className="text-xl font-bold uppercase">
                                        {workout.name}
                                    </h2>

                                    <p className="mt-2 text-gray-400">
                                        {Array.isArray(workout.equipment)
                                            ? workout.equipment.join(", ")
                                            : workout.equipment}
                                    </p>


                                    {/* Stats */}
                                    <div className="mt-5 flex flex-wrap gap-5 text-sm text-gray-400">

                                        <span className="flex items-center gap-2">
                                            <FaClock />
                                            {workout.duration} min
                                        </span>

                                        <span className="flex items-center gap-2">
                                            <FaFire />
                                            {workout.calories} kcal
                                        </span>

                                        <span className="flex items-center gap-2">
                                            <FaStar />
                                            {workout.rating}
                                        </span>

                                    </div>

                                </div>


                                {/* Buttons */}
                                <div className="flex flex-col gap-2 md:w-40">

                                    <Link
                                        href={`/workouts/${workout.id}`}
                                        className="rounded-lg border border-gray-600 px-4 py-2 text-center text-sm"
                                    >
                                        View Details
                                    </Link>

                                    {activeTab === "plan" && (
                                        <button
                                            onClick={() =>
                                                handleDone(workout.id)
                                            }
                                            className="flex items-center justify-center gap-2 rounded-lg bg-[#ccff00] px-4 py-2 text-sm font-bold text-black"
                                        >
                                            <FaCheck />
                                            Mark as Done
                                        </button>
                                    )}

                                    <button
                                        onClick={() =>
                                            handleRemove(workout.id)
                                        }
                                        className="flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm text-red-400"
                                    >
                                        <FaTimes />
                                        Remove
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </main>
    );
};

export default MyPlan;