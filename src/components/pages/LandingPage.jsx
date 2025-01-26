import React from "react";

import Button from "../features/Button";

import NavigationButton from "../features/NavigationButton";
import { motion } from "framer-motion";
import Explore from "../pages/Explore";

const variants = {
  hidden: { opacity: 0, scale: 1 },
  visible: { opacity: 1, scale: 1 },
};

const LandingPage = () => {
  return (
    <motion.div className="bg-black min-h-screen flex flex-col overflow-hidden">
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 4, delay: 2 }}
        className="flex justify-end mt-6 mr-4 text-white gap-3 "
      >
        <NavigationButton
          label={"LinkedIn"}
          link={
            "https://www.linkedin.com/in/aditya-dolas-366a52346/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          }
          background={"bg-black"}
          hoverEffect={"hover:bg-gray-800"}
        />
        <NavigationButton
          label={"Github"}
          link={"https://github.com/aditya-dolas-dev?tab=repositories"}
          background={"bg-black"}
          hoverEffect={"hover:bg-gray-800"}
        />
        <NavigationButton
          label={"Resume"}
          link={
            "https://www.dropbox.com/scl/fi/2bwqi0exy6nkg4qmya6pw/Resume-Aditya-Dolas.pdf?rlkey=t4i29zp6ep9oti8nouh8rcyio&st=h5u88gjz&dl=0"
          }
          background={"bg-black"}
          hoverEffect={"hover:bg-gray-800"}
        />
      </motion.div>

      <motion.div className="flex flex-col justify-center items-center flex-grow mb-8">
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 4, delay: 0.7 }}
        >
          <h1 className="font-sans font-bold text-[50px] mb-4 bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text text-transparent overflow-hidden tracking-[0.4em]">
            ADITYA DOLAS{" "}
          </h1>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 4, delay: 0.7 }}
            className="flex font-serif text-2xl justify-center mt-9 text-gray-200"
          >
            <h3>Full Stack Developer</h3>
          </motion.div>
        </motion.div>

        <Button />
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;
