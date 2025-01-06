import React from "react";
import { ArrowRight } from "lucide-react";

const Card = ({ label, link, description, imgsrc }) => {
  return (
    <div className="w-full flex justify-center items-center h-[100vh] border border-[silver] rounded-lg">
      {/* Fixed width container */}
      <div className="w-[850px]">
        {/* Card content */}
        <div className="relative">
          {/* Outer glare effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-30" />

          {/* Main card container */}
          <a
            href={link}
            className="block relative overflow-hidden bg-black rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 "
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Inner glare effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-100" />

            {/* Card content */}
            <div className="p-6">
              {/* Header section */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{label}</h3>
                  <ArrowRight className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-1" />
                </div>
                <p>
                  <span className="font-medium font-sans text-cyan-400">
                    {description}
                  </span>
                </p>
              </div>

              {/* Project image */}
              <div className="relative">
                <img
                  src={imgsrc}
                  alt={label}
                  className="w-full h-auto rounded-lg object-contain  aspect-square"
                />
                {/* Color overlay */}
                <div className="absolute inset-0 bg-blue-500/10 rounded-lg" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
