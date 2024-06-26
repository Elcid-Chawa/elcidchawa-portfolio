"use client";

import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/Mountains.jpg)" }}
      className="w-screen h-screen flex items-center justify-center bg-center bg-cover"
    >
      <div className=" flex flex-wrap overflow-y-scroll md:overflow-y-hidden project justify-center mt-10 md:mt-0 md:grid md:grid-cols-2 gap-5 max-w-[90%] max-h-[90%]">
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
