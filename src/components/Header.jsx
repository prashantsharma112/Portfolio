// import React, { useState } from "react";

// function Header() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="flex items-center justify-between px-6 py-4 shadow-md sticky top-0 bg-black z-50">
//       <div className="text-xl font-bold text-green-500">Prashant Sharma</div>

//       {/* Desktop Nav */}
//       <nav className="hidden md:flex space-x-6 text-green-500 font-medium">
//         <a href="#skills" className="hover:text-green-500">Skills</a>
//         <a href="#projects" className="hover:text-green-500">Projects</a>
//         <a href="#contact" className="hover:text-green-500">Contact me</a>
//       </nav>

//       {/* Mobile menu button */}
//       <button
//         className="md:hidden text-gray-700"
//         onClick={() => setOpen(!open)}
//       >
//         ☰
//       </button>

//       {/* Mobile Nav */}
//       {open && (
//         <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
//           <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
//           <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
//           <a href="#contact" onClick={() => setOpen(false)}>Contact me</a>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Header;



import React, { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md sticky top-0 bg-black z-50">
      
      <div className="text-xl font-bold text-green-500">Prashant Sharma</div>

      {/* Desktop Nav */}
<nav className="hidden md:flex space-x-6 font-medium text-green-500">
        <a href="#skills" className="!text-green-500 hover:!text-green-400">
          Skills
        </a>
        <a href="#projects" className="!text-green-500 hover:!text-green-400">
          Projects
        </a>
        <a href="#contact" className="!text-green-500 hover:!text-green-400">
          Contact me
        </a>
      </nav>

      {/* Mobile menu button */}
      <button
        className="md:hidden !text-green-500 text-3xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile Nav */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-black border-t border-green-500 shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
          <a href="#skills" className="!text-green-500 hover:!text-green-400" onClick={() => setOpen(false)}>
            Skills
          </a>
          <a href="#projects" className="!text-green-500 hover:!text-green-400" onClick={() => setOpen(false)}>
            Projects
          </a>
          <a href="#contact" className="!text-green-500 hover:!text-green-400" onClick={() => setOpen(false)}>
            Contact me
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
