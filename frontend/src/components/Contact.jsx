import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 flex items-center justify-center px-2 sm:px-4 py-4">
      <div className="bg-white shadow-xl rounded-2xl p-4 sm:p-8 max-w-full sm:max-w-2xl w-full">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-blue-400 mb-2 text-center">
          Contact Me
        </h1>
        <p className="text-gray-600 text-center text-sm sm:text-base mb-4 sm:mb-6">
          Let's connect and create something amazing together.
        </p>

        <div className="bg-blue-50 p-4 sm:p-6 rounded-lg shadow-inner mb-6 text-center">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2">
            Hi, I'm Sibu Chanda
          </h2>
          <p className="text-gray-700 text-xs sm:text-sm break-words text-wrap">
            A Full-Stack MERN Developer passionate about building beautiful web applications and exploring the world of Artificial Intelligence.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base">
          <a
            href="mailto:sibuchanda457@gmail.com"
            className="flex items-center gap-1 sm:gap-2 text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={18} />
            <span>Email</span>
          </a>

          <a
            href="https://github.com/Sibuchanda"
            className="flex items-center gap-1 sm:gap-2 text-gray-800 hover:text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={18} />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/sibu-chanda?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BPEJTW2B%2FSdWNCalHfbiE0A%3D%3D"
            className="flex items-center gap-1 sm:gap-2 text-blue-700 hover:text-blue-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={18} />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://www.instagram.com/itsmelester_101?igsh=ODh4YjFmeGw3dWFj"
            className="flex items-center gap-1 sm:gap-2 text-pink-600 hover:text-pink-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={18} />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
