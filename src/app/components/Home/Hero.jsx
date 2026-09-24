import React from 'react';
import Image from 'next/image';
import Banner from "@/assets/banner.png";
import { FiArrowDownRight } from "react-icons/fi";

const Hero = () => {
    return (
        <main className="bg-black text-white">
      {/* Hero / Banner */}
      <section className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        
        {/* Left Content */}
        <div>
          <p className="mb-5 font-[var(--font-inter)] text-sm font-bold tracking-[0.25em] text-[#C7FF00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="max-w-2xl font-[var(--font-oswald)] text-2xl font-bold uppercase leading-[0.95] tracking-tight sm:text-2xl lg:text-4xl">
            TRAIN WITH INTENT.
            
            LOG <br />EVERY SET.
          </h1>

          <p className="mt-7 max-w-xl font-[var(--font-inter)] text-base leading-7 text-gray-400 sm:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today&apos;s plan, and watch the week&apos;s work
            add up.
          </p>

          {/* CTA */}
          <a
            href="#library"
            className="mt-9 inline-flex items-center gap-3 bg-[#C7FF00] px-6 py-3 font-[var(--font-inter)] text-sm font-bold uppercase tracking-wide text-black transition hover:bg-white"
          >
            <span><FiArrowDownRight/></span>
            Browse Workouts
          </a>
        </div>

        {/* Right Banner Image */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative h-[380px] w-full max-w-[520px] overflow-hidden ">
            <Image
              src={Banner}
              alt="Workout training"
              fill
              priority
              className="object-contain"
            />

            

            
          </div>
        </div>
      </section>

     
    </main>
    );
};

export default Hero;