import ToggleButton from "../features/ToggleButton";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import NavigationButton from "../features/NavigationButton";
import { useNavigate } from "react-router-dom";
import EngineeringIllustration from "../images/El.png";
import johan from "../images/footv.jpg";

const Info = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col min-h-screen bg-black text-white overflow-hidden"
    >
      <div>
        <a
          onClick={() => {
            navigate("/");
          }}
          className="inline-block h-[35px] w-[150px] text-[20px] ml-3 mt-6 font-serif text-center"
        >
          Aditya Dolas <p className="text-[10px]">Fullstack developer</p>
        </a>
        <div className="flex-col items-center bg-transparent inline-flex h-[100px] w-[300px] ml-[300px] mb-[15px] mt-2 fixed z-50">
          <ToggleButton currentState={"info"} />
        </div>
        <div className="flex top-0 right-0 justify-end mt-6 mr-4 text-white gap-3 fixed ">
          <NavigationButton
            label={"LinkedIn"}
            link={
              "https://www.linkedin.com/in/aditya-dolas-366a52346/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
              "https://www.dropbox.com/scl/fi/2bwqi0exy6nkg4qmya6pw/Resume-Aditya-Dolas.pdf?rlkey=t4i29zp6ep9oti8nouh8rcyio&st=h5u88gjz&dl=0"
            }
            background={"bg-transparent"}
            hoverEffect={"hover:bg-gray-500"}
          />
        </div>
      </div>

      {/* Main Section / About me Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-20 flex  px-8 justify-center items-center col-span-3 "
      >
        <div className="bg-transparent text-[silver] font-libre text-sm m-0">
          <div className="max-w-[1400px] w-full mx-auto p-5">
            <section className="grid grid-cols-6 gap-12 mt-24">
              <h2 className="col-span-6 text-center text-[5em] autoShow">
                Introduce
              </h2>
            </section>
            <section className="grid grid-cols-6 gap-12 mt-36">
              <h2 className="col-span-6 text-center text-[3em] text-bold autoShow text-white">
                I'm enthusiastic about creating extraordinary applications that{" "}
                <div className="italic text-teal-500">
                  {" "}
                  empowers individuals
                </div>
              </h2>
            </section>

            {/* ************************************ */}
            <section className="grid grid-cols-6 gap-12 mt-20 text-lg ">
              {/* right side= */}
              <div className="col-span-3 autoShow">
                <img
                  src={EngineeringIllustration}
                  alt="illustration"
                  className="w-full h-auto rounded-lg object-cover aspect-video"
                />
                <div className="relative">
                  {/* Color overlay */}
                  <div className="absolute inset-0 bg-blue-500/10 rounded-lg" />
                </div>
              </div>
              {/* left side */}
              <div className="col-span-3 autoShow mt-4">
                <p>
                  <span className="font-bold text-[20px] text-teal-500">
                    My Background in Engineering
                  </span>{" "}
                  In Dec of 2024, I graduated from Engineering college at the{" "}
                  <span className="font-bold text-[20px] text-teal-500">
                    Rashtrasant Tukadoji Maharaj Nagpur University.
                  </span>
                  <br /> I was deeply intrigued by the concepts of modularity
                  and adaptability — how technology and code can evolve to meet
                  the ever-changing needs of humanity.
                </p>
              </div>
            </section>

            {/* ************************************ */}
            <section className="grid grid-cols-6 gap-12 mt-20 text-lg">
              {/* right side= */}
              <div className="col-span-3 autoShow mt-14">
                <p>
                  <span className="font-bold text-[20px] text-teal-500">
                    In my spare time
                  </span>
                  <br />
                  When I'm not coding, I enjoy studying football strategies,
                  watching FC Barcelona matches and watch lots of movies.
                  <br></br>Other than that, you'll find me playing football and
                  cricket, gaming, and trying to get my hands on the latest tech
                </p>
              </div>

              {/* left side */}
              <div className="col-span-3 autoShow">
                <img
                  src={johan}
                  alt="illustration"
                  className="w-full h-auto rounded-lg object-cover aspect-video"
                />
                <div className="relative">
                  {/* Color overlay */}
                  <div className="absolute inset-0 bg-blue-500/10 rounded-lg" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </motion.section>

      {/* **************************************************************************************************** */}

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="mt-20 px-8 flex flex-col md:px-16 pb-8 overflow-hidden"
      >
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col justify-center  md:flex-row  items-center gap-6">
            <div className="flex gap-6">
              <div className="text-lg font-bold">Connect with me</div>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:adityardolas@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail size={28} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/aditya-dolas-dev"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <Github size={28} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <Linkedin size={28} />
              </motion.a>
            </div>
            <p className="text-sm text-[silver]">
              © 2024 Aditya Dolas. All rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </motion.div>
  );
};

export default Info;
