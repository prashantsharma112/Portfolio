

// import React from "react";
// import Project1 from "../assets/FreakFitweb.png";
// import Project2 from "../assets/lordson.png";
// import ProjectAI from "../assets/ProjectAI.png";
// const projects = [
//   {
//     title: "Client Management System",
//     desc: "A freelancing-based full-stack client management system, currently under development. It includes secure user login with OTP verification, subscription plan management, and Razorpay payment integration. The backend is built using Django and REST API with PostgreSQL on Railway, while OTP handling is powered by Twilio. The frontend is developed using React, Vite, and Tailwind CSS, and the project is being deployed on Vercel.",
//     img: Project1,
//     link: "https://www.freakfithub.com/",
//   },
//   {
//     title: "E-Commerce Website",
// desc: "A full-stack e-commerce platform built with React, Vite, and Tailwind CSS, featuring product listings, a cart system, and an admin panel for tracking orders and managing products. The backend is powered by Python Django REST API for data handling. The platform is responsive and optimized for commercial use, and does not include login or authentication.",
//     img: Project2,  // Replace with your imported image
//     link: "https://www.lordson.in/", // Add link if hosted
//   },
//   {
//   title: "AI Code Translation (Java → Python)",
//   desc: "Research-based project comparing Transformer models (Gemini, CodeT5, CodeGen) for automated Java-to-Python translation with a hybrid inference model and evaluation testbed.",
//   img: ProjectAI,
//   link: "https://github.com/prashantsharma112/Comprative_Study_Of_Transfrmer_Models",
// },


// ];

// function Projects() {
//   return (
//     <section id="projects" className="px-6 py-16 md:px-20 bg-black text-white text-center ">
//       <h2 className="text-2xl md:text-3xl text-green-500 font-bold mb-6">Projects</h2>
//       <p className="mb-10 text-green-500 ">A select number of projects</p>

// <div className="grid gap-8 sm:grid-cols-2 justify-center items-stretch max-w-6xl mx-auto ">
//         {projects.map((project) => (
//           <div
//             key={project.title}
//   className="bg-black text-green-500 rounded-lg shadow-md overflow-hidden h-full flex flex-col"
//           >
//             <img src={project.img} alt={project.title} className="w-full h-40 object-cover" />

//             <div className="p-4">
//               <h3 className="font-semibold text-lg">{project.title}</h3>
//               <p className="text-sm text-green-500">{project.desc}</p>

//               <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
//               >
//                 Visit Website →
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Projects;



import React from "react";
import Project1 from "../assets/FreakFitweb.png";
import Project2 from "../assets/lordson.png";
import ProjectAI from "../assets/ProjectAI.png";

const projects = [
  {
    title: "Client Management System",
    desc: "A freelancing-based full-stack client management system under development. Features include OTP-based authentication, subscription plan management, and Razorpay payment integration. Built using Django REST API, PostgreSQL, Twilio, and deployed with Vercel and Railway.",
    img: Project1,
    link: "https://www.freakfithub.com/",
  },
  {
    title: "E-Commerce Website",
    desc: "A full-stack e-commerce platform built with React, Vite, and Tailwind CSS. Includes product listings, cart functionality, and an admin panel for managing products and orders. Backend powered by Django REST API. Fully responsive and optimized for commercial use.",
    img: Project2,
    link: "https://www.lordson.in/",
  },
  {
    title: "AI Code Translation (Java → Python)",
    desc: "Research-based project comparing Transformer models such as Gemini, CodeT5, and CodeGen for automated Java-to-Python translation. Includes an automated evaluation testbed and a hybrid inference model to improve accuracy, syntax correctness, and reliability.",
    img: ProjectAI,
    link: "https://github.com/prashantsharma112/Comprative_Study_Of_Transfrmer_Models",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-20 md:px-20 bg-black text-white"
    >
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl text-green-500 font-bold text-center mb-2">
        Projects
      </h2>
     

      {/* Projects Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto items-stretch">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-black border border-green-800 rounded-xl overflow-hidden flex flex-col h-full
                       hover:shadow-lg hover:shadow-green-500/20 transition duration-300"
          >
            {/* Image */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow text-center">
              <h3 className="font-semibold text-lg text-green-300 mb-3">
                {project.title}
              </h3>

              <p className="text-sm text-green-400 flex-grow leading-relaxed">
                {project.desc}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-green-400 font-medium hover:text-green-300 hover:underline"
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
