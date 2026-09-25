
import Image from "next/image";
import fitlog2 from "@/assets/logo.png";
export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">

        {/* Left - Logo */}
        <div className="flex items-center gap-3">
          <div className=" items-center justify-center  ">
            
            <Image
                src={fitlog2}
                alt="FitLog"
                width={20}
                height={20}
              />
          </div>

          <span className="text-xl font-semibold tracking-wider">
            FITLOG
          </span>
        </div>

        {/* Right - Copyright */}
        <p className="text-center italic text-sm text-gray-400 md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}

