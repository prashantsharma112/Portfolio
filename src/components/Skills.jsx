// import React from "react";

// const skills = [
//   { name: "HTML 5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
//   { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
//   { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
//   { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
// ];

// function Skills() {
//   return (
//     <section id="skills" className="px-6 py-16 md:px-20 bg-white text-center">
//       <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Skills</h2>
//       <p className="text-gray-600 mb-8">I have a vast experience in the following web technologies:</p>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
//         {skills.map((skill) => (
//           <div key={skill.name} className="flex flex-col items-center space-y-2">
//             <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
//             <span className="font-medium">{skill.name}</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Skills;

// import React from "react";
// const skills = [
//   { name: "HTML 5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
//   { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
//   { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
//   { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
//   { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
//   { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
//   { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
//   { name: "REST API", icon: "https://cdn-icons-png.flaticon.com/512/1006/1006363.png" },
//   { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
//   { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },

//   // ⭐ 100% Working AWS S3 SVG
//   { name: "AWS S3", icon: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
// ];


// function Skills() {
//   return (
//     <section id="skills" className="px-6 py-16 md:px-20 bg-black text-center">
//       <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-8">
//         Tech Stack
//       </h2>
//       <p className="text-gray-300 mb-12 text-lg">
//         Technologies I have used in my real-world projects
//       </p>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 justify-items-center">
//         {skills.map((skill) => (
//           <div
//             key={skill.name}
//             className="flex flex-col items-center space-y-3 hover:scale-110 transition"
//           >
//             <img src={skill.icon} alt={skill.name} className="w-16 h-16 bg-white rounded-lg p-2" />
//             <span className="font-medium text-green-400">{skill.name}</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Skills;



import React from "react";

const skills = [
  { name: "HTML 5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "REST API", icon: "https://cdn-icons-png.flaticon.com/512/1006/1006363.png" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
  { name: "AWS S3", icon: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
];

function Skills() {
  return (
    <section id="skills" className="px-6 py-16 md:px-20 bg-black text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-8">
        Tech Stack
      </h2>

      <p className="text-gray-300 mb-12 text-lg">
        Technologies I have used in my real-world projects
      </p>

      {/* ⭐ FIXED CENTER ALIGNMENT */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 justify-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-between h-32 w-28 
             space-y-3 hover:scale-110 transition"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 bg-white rounded-lg p-2"
            />
            <span className="font-medium text-green-400 text-center">{skill.name}</span>
          </div>

        ))}
      </div>
    </section>
  );
}

export default Skills;
