
import Hero from "./components/Home/Hero";
import Library from "./components/Home/library/Library";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-black font-sans text-white">
      <Hero/> 
     <Library/>
    </div>
  );
}