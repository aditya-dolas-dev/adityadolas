import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import TechStackCard from "./TechStackCard";
import ProjectDescription from "./ProjectDescription";
import hermes from "../images/hermes.png";
import paytm from "../images/paytm.png";
import story from "../images/story.png";
const Project = () => {
  return (
    <motion.div>
      <div className="bg-transparent text-[silver] font-libre text-sm m-0">
        <div className="max-w-[1400px] w-full mx-auto p-5">
          <section className="grid grid-cols-6 gap-12 mt-32">
            <h2 className="col-span-6 text-center text-[7em] autoShow">
              Projects
            </h2>
          </section>
          {/* **********************Section1****************************************** */}
          <section className="grid grid-cols-6 gap-12 mt-24 text-lg ">
            <div className="col-span-3 autoShow">
              <Card
                label={"Hermes"}
                link={"https://hermes-1lvc.onrender.com"}
                description={"Connect via God"}
                imgsrc={hermes}
              />
            </div>
            <ProjectDescription
              title={"Hermes Real-Time Web Chat Application"}
              description={`a real-time chat
        application using the MERN stack and Socket.io to enable real-time
        messaging and image sharing. The application features a smooth,
        user-friendly interface with customizable theme settings for a
        personalized user experience. MongoDB serves as the database, ensuring
        efficient storage of user data and chat logs. To prioritize security,
        the app implements authentication using JSON Web Tokens (JWT) and
        employs bcrypt hashing to protect user passwords. This project
        highlights my ability to create secure, scalable, and interactive
        applications while delivering an intuitive and seamless user experience.`}
              mt={"mt-48"}
            />
          </section>

          {/* ********************************Section 2******************************** */}

          <section className="grid grid-cols-6 gap-12 mt-6 text-lg">
            <ProjectDescription
              title={"Paytm Money Transfer Wallet"}
              description={`Developed a full-stack banking application that provides core functionalities for user account management, account balances, and money transfers.\n Enabled CRUD (Create, Read, Update, Delete) operations for user accounts, ensuring secure and efficient management of user data. Designed functionality to manage and update user account balances with real-time synchronization to the database for accurate financial tracking. Implemented a secure and seamless money transfer system, enabling smooth and reliable transactions between user accounts.`}
            />
            <div className="col-span-3  autoShow">
              <Card
                label="Fast"
                link={"https://paytm-8xcg.vercel.app/"}
                description={"Connect Fast"}
                imgsrc={paytm}
              />
            </div>
          </section>
          {/***************************************section 3*************************************************************** */}
          <section className="grid grid-cols-6 gap-12 mt-6 text-lg">
            <div className="col-span-3  autoShow">
              <Card
                label="Story"
                link={"https://story-lake-xi.vercel.app/signup"}
                description={"Make your own Story"}
                imgsrc={story}
              />
            </div>
            <ProjectDescription
              title={"Story Blog Application"}
              description={`Developed a lightweight and high-performance full-stack blog application in TypeScript using the Hono framework, designed to deliver an optimized user experience. Implemented secure user registration and login functionalities using JWT for authentication and role-based access control.
             Enabled CRUD (Create, Read, Update, Delete) operations for blog posts, providing users with intuitive tools for creating and managing content. React.js for building reusable and dynamic UI components, styled with TailwindCSS for modern and responsive designs.Developed with Hono, a fast and lightweight web framework, to handle server-side logic and API endpoints.Used PostgreSQL as the primary database, with Prisma as the ORM for efficient and type-safe database interactions.`}
            />
          </section>
        </div>

        <footer className="border-t border-text-primary/30 min-h-screen flex flex-col justify-center items-center">
          <h2 className="col-span-6 text-center text-[7em] autoShow mt-12">
            Technologies
          </h2>
          <div className="mt-24">
            <TechStackCard />
          </div>
        </footer>
      </div>
    </motion.div>
  );
};

export default Project;
