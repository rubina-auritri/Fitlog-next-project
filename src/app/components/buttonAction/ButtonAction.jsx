
"use client";

import React from "react";
import { FaPlus, FaRegBookmark } from "react-icons/fa";
import { useFitLog } from "@/context/FitlogContext";
import { toast } from "react-toastify";

const ButtonAction = ({ workout }) => {
    const { plan, saved, setPlan, setSaved } = useFitLog();

    // Check whether this workout is already in Plan
    const alreadyAdded = plan.some(
        (item) => item.id === workout.id
    );

    // Check whether this workout is already Saved
    const alreadySaved = saved.some(
        (item) => item.id === workout.id
    );

    // Add workout to Plan
    const handleAddToPlan = () => {
        if (alreadyAdded) {
            toast.info("This workout is already in your plan!");
            return;
        }

        setPlan((previousPlan) => [
            ...previousPlan,
            workout,
        ]);
        toast.success("Workout added to your plan!");
    };

    // Save workout for later
    const handleSave = () => {
        if (alreadySaved) {
            toast.info("This workout is already saved!");
            return;
        }

        setSaved((previousSaved) => [
            ...previousSaved,
            workout,
        ]);
        toast.success("Workout saved for later!");
    };

    return (
        <div className="flex flex-row gap-3">

            {/* Add to Plan Button */}
            <button
                type="button"
                onClick={handleAddToPlan}
                disabled={alreadyAdded}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-6 py-4 font-bold transition ${alreadyAdded
                    ? "cursor-not-allowed bg-gray-300 text-gray-600"
                    : "bg-[#C7FF00] text-black hover:bg-[#b5eb00]"
                    }`}
            >
                <FaPlus />

                {alreadyAdded
                    ? "Added to plan"
                    : "Add to plan"}
            </button>

            {/* Save Button */}
            <button
                type="button"
                onClick={handleSave}
                disabled={alreadySaved}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl border px-6 py-4 font-bold transition ${alreadySaved
                    ? "cursor-not-allowed bg-gray-300 text-white-600"
                    : "bg-[#C7FF00] text-black hover:bg-[#b5eb00]"
                    }`}
            >
                <FaRegBookmark />

                {alreadySaved
                    ? "Saved"
                    : "Save for later"}
            </button>

        </div>
    );
};

export default ButtonAction;
