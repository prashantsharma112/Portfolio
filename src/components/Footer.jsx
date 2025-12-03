import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-green-500 px-6 py-10 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between">

        {/* Social Icons */}
        <div className="flex space-x-6 mb-4 md:mb-0 text-2xl">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>

          <a href="https://wa.me/0000000000" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>

          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>

          <a href="mailto:your-email@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>

        {/* Footer Text */}
        <div className="text-center md:text-right text-sm md:text-base">
          © {new Date().getFullYear()} Prashant Sharma — Full-Stack Developer  
          <br />
          <a
            href="https://github.com/prashantsharma112"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-green-400"
          >
            View all my projects →
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
