

import React from "react";
import Project1 from "../assets/FreakFitweb.png";
import Project2 from "../assets/lordson.png";
const projects = [
  {
    title: "Client Management System",
    desc: "A freelancing-based full-stack client management system, currently under development. It includes secure user login with OTP verification, subscription plan management, and Razorpay payment integration. The backend is built using Django and REST API with PostgreSQL on Railway, while OTP handling is powered by Twilio. The frontend is developed using React, Vite, and Tailwind CSS, and the project is being deployed on Vercel.",
    img: Project1,
    link: "https://www.freakfithub.com/",
  },
  {
    title: "E-Commerce Website",
desc: "A full-stack e-commerce platform built with React, Vite, and Tailwind CSS, featuring product listings, a cart system, and an admin panel for tracking orders and managing products. The backend is powered by Python Django REST API for data handling. The platform is responsive and optimized for commercial use, and does not include login or authentication.",
    img: Project2,  // Replace with your imported image
    link: "https://www.lordson.in/", // Add link if hosted
  },

];

function Projects() {
  return (
    <section id="projects" className="px-6 py-16 md:px-20 bg-black text-white text-center ">
      <h2 className="text-2xl md:text-3xl text-green-500 font-bold mb-6">Projects</h2>
      <p className="mb-10 text-green-500 ">A select number of projects</p>

<div className="grid gap-8 sm:grid-cols-2 justify-center items-stretch max-w-6xl mx-auto ">
        {projects.map((project) => (
          <div
            key={project.title}
  className="bg-black text-green-500 rounded-lg shadow-md overflow-hidden h-full flex flex-col"
          >
            <img src={project.img} alt={project.title} className="w-full h-40 object-cover" />

            <div className="p-4">
              <h3 className="font-semibold text-lg">{project.title}</h3>
              <p className="text-sm text-green-500">{project.desc}</p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
              >
                Visit Website →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
