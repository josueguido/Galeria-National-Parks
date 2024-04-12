
"use client";
import { TypewriterEffectSmooth } from "../Components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Galería",
    },
    {
      text: "Parques Nacionales de",
    },
    {
      text: "Estados Unidos y",
    },
    {
      text: "Canadá",
    },
  
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}


export default TypewriterEffectSmoothDemo;
