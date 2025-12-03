

import React from "react";
import Profile from "../assets/Profile.png";

export default function Hero() {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-20 flex flex-col md:flex-row items-center justify-between gap-20">
      
      {/* Left Content */}
      <div className="space-y-8 max-w-2xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-tight">
          <span className="text-green-400">Full-Stack</span> <br /> Developer
        </h1>

        <p className="text-gray-300 text-lg lg:text-2xl">
          Building digital experiences that merge creativity with technology.
        </p>

        <p className="text-gray-400 text-lg lg:text-2xl">
          Specializing in modern web development and scalable systems.
        </p>

       <button
  onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
  className="px-7 py-3.5 lg:px-10 lg:py-5 bg-green-500 rounded-lg text-black font-semibold text-lg lg:text-2xl hover:bg-green-400 transition"
>
  Hire Me
</button>
      </div>

      {/* Profile Image with Glow */}
      <div className="relative">
        <div className="absolute inset-0 blur-2xl bg-green-500 rounded-full opacity-30 animate-pulse"></div>
        <img
          src={Profile}
          alt="Profile"
          className="relative w-60 h-60 md:w-72 md:h-72 lg:w-[380px] lg:h-[380px] xl:w-[450px] xl:h-[450px] object-cover rounded-full border-2 border-green-500 shadow-[0_0_35px_#22c55e]"
        />
      </div>
    </section>
  );
}
