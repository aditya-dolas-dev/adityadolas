import { div } from "framer-motion/client";
import React from "react";

const TechStackCard = () => {
  return (
    <div className="max-w-7xl h-52 mx-auto my-2 px-0 sm:px-6 py-6 border-neutral-600 border-2 rounded-lg flex gap-0 sm:gap-4 items-center bg-foreground sm:flex-row flex-col">
      <div classNameName="p-4 w-11/12">
        <div className="flex gap-2 flex-wrap">
          <div className="flex items-center gap-2 justify-center bg-[#2e2e2e] px-6 text-[16px] font-medium py-2.5 w-fit rounded-full mb-1">
            <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
            <div>React</div>
          </div>
          <div className="flex items-center gap-2 justify-center bg-[#2e2e2e] px-6 text-[16px]  font-medium py-2.5 w-fit rounded-full mb-1">
            <div className="h-2 w-2 rounded-full bg-yellow-300"></div>
            <div>JavaScript</div>
          </div>
          <div className="flex items-center gap-2 justify-center bg-[#2e2e2e] px-6 text-[16px]  font-medium py-2.5 w-fit rounded-full mb-1">
            <div className="h-2 w-2 rounded-full bg-rose-400"></div>
            <div>Typescript</div>
          </div>
          <div className="flex items-center gap-2 justify-center bg-[#2e2e2e] px-6 text-[16px]  font-medium py-2.5 w-fit rounded-full mb-1">
            <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
            <div>Express.js</div>
          </div>
          <div className="flex items-center gap-2 justify-center bg-[#2e2e2e] px-6 text-[16px]  font-medium py-2.5 w-fit rounded-full mb-1">
            <div className="h-2 w-2 rounded-full bg-orange-400"></div>
            <div>Node.js</div>
          </div>
          <div className="flex items-center gap-2 justify-center bg-[#2e2e2e] px-6 text-[16px]  font-medium py-2.5 w-fit rounded-full mb-1">
            <div className="h-2 w-2 rounded-full bg-lime-200"></div>
            <div>Tailwind CSS</div>
          </div>
          <div className="flex items-center gap-2 justify-center bg-[#2e2e2e] px-6 text-[16px]  font-medium py-2.5 w-fit rounded-full mb-1">
            <div className="h-2 w-2 rounded-full bg-teal-500"></div>
            <div>PostgreSQL</div>
          </div>
          <div className="flex items-center gap-2 justify-center bg-[#2e2e2e] px-6 text-[16px]  font-medium py-2.5 w-fit rounded-full mb-1">
            <div className="h-2 w-2 rounded-full bg-pink-500"></div>
            <div>Prisma</div>
          </div>
          <div className="flex items-center gap-2 justify-center bg-[#2e2e2e] px-6 text-[16px]  font-medium py-2.5 w-fit rounded-full mb-1">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <div>MongoDB</div>
          </div>
          <div className="flex items-center gap-2 justify-center bg-[#2e2e2e] px-6 text-[16px]  font-medium py-2.5 w-fit rounded-full mb-1">
            <div className="h-2 w-2 rounded-full bg-violet-500"></div>
            <div>Hono.js</div>
          </div>
          <div className="flex items-center gap-2 justify-center bg-[#2e2e2e] px-6 text-[16px]  font-medium py-2.5 w-fit rounded-full mb-1">
            <div className="h-2 w-2 rounded-full bg-fuchsia-400"></div>
            <div>Framer Motion</div>
          </div>
          <div className="flex items-center gap-2 justify-center bg-[#2e2e2e] px-6 text-[16px]  font-medium py-2.5 w-fit rounded-full mb-1">
            <div className="h-2 w-2 rounded-full bg-lime-200"></div>
            <div>Git</div>
          </div>
          <div className="flex items-center gap-2 justify-center bg-[#2e2e2e] px-6 text-[16px]  font-medium py-2.5 w-fit rounded-full mb-1">
            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
            <div>Docker</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TechStackCard;
