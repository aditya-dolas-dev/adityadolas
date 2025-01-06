import React from "react";

import { motion } from "framer-motion";

import { useNavigate, useLocation } from "react-router-dom";
import ToggleButton from "../features/ToggleButton";
import NavigationButton from "../features/NavigationButton";
import Project from "../features/Project";
const Explore = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col  text-white min-h-screen bg-black  "
    >
      <div>
        <a
          onClick={() => {
            navigate("/");
          }}
          className="inline-block h-[35px] w-[150px] text-[24px] ml-3 mt-6 font-serif text-center"
        >
          Aditya Dolas <p className="text-[12px]">Fullstack developer</p>
        </a>
        <div className="flex-col items-center bg-transparent inline-flex h-[100px] w-[300px] ml-[300px] mb-[15px] mt-2 fixed z-50">
          <ToggleButton currentState={"work"} />
        </div>
        <div className="flex justify-end mt-6 mr-4 text-white gap-3 fixed top-0 right-0">
          <NavigationButton
            label={"LinkedIn"}
            link={
              "https://www.linkedin.com/in/aditya-dolas-a5a213345?utm_source=share&utm_campaign=share_via&utm"
            }
            background={"bg-transparent"}
            hoverEffect={"hover:bg-gray-500"}
          />
          <NavigationButton
            label={"Github"}
            link={"https://github.com/aditya-dolas-dev?tab=repositories"}
            background={"bg-transparent"}
            hoverEffect={"hover:bg-gray-500"}
          />
          <NavigationButton
            label={"Resume"}
            link={
              "https://www.dropbox.com/scl/fi/6x4ixpu8x5c0wy5ucv8gv/AdityaDolasResume-5.pdf?rlkey=ctyrcp23czso3k7a20cz4fohb&st=8np3zfkn&dl=0"
            }
            background={"bg-transparent"}
            hoverEffect={"hover:bg-gray-500"}
          />
        </div>
      </div>

      <Project />
    </motion.div>
  );
};

export default Explore;
