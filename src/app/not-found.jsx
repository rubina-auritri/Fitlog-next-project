
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#111111] text-white">
            <h1 className="text-6xl font-bold text-[#C7FF00]">
                404
            </h1>

            <p className="mt-4 text-xl">
                Workout not found
            </p>

            <Link
                href="/"
                className="mt-6 rounded-lg bg-[#C7FF00] px-6 py-3 font-semibold text-black"
            >
                Back to Home
            </Link>
        </div>
    );
}

