import React from "react";
import { useNavigate } from "react-router-dom";

const NavigationButton = ({ label, link, background, hoverEffect }) => {
  return (
    <div className="flex justify-end  text-white gap-2">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center px-2  py-1.5 ${background} text-white rounded-full ${hoverEffect} focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-500 transition`}
      >
        {label}
        <span className="ml-2">↗</span>
      </a>
    </div>
  );
};

export default NavigationButton;
