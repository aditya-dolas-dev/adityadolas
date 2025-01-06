import React from "react";

const ProjectDescription = ({ title, description }) => {
  return (
    <div className="col-span-3 autoShow mt-48">
      <div className="font-bold text-[28px]">
        {" "}
        {title}
        <br />
        <br />
      </div>

      <p>
        <br />
        <span className="font-bold text-[24px] ">{title}</span> {description}
        <br />
      </p>
    </div>
  );
};

export default ProjectDescription;
