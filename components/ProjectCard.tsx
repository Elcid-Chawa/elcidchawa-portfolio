"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  image: string;
  title: string;
  text: string;
  url?: string;
}

const ProjectCard = ({ image, title, text, url }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }
  return (
    <div
      onClick={handleFlip}
      className="w-[80vw] md:w-[40vw] md:h-[40vh] h-[35vh] rounded-md cursor-pointer"
    >
      <motion.div
        className="flip-card-inner w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="w-full h-full group relative flip-card-front bg-cover text-white rounded-lg p-4"
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40" />
          <div className="absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center">
            Learn more &gt;
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="w-full h-full group relative flip-card-back bg-cover  text-white rounded-lg p-4"
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-95 z-[-1]" />
          <div className="flex flex-col h-full w-auto gap-3 md:gap-10 py-3 z-[30]">
            <h1 className="text-whote text-xl font-semibold">{title}</h1>
            <p className="text-gray-200 md:text-[18px] ">{text}</p>
            <p className="text-gray-200 md:text-[16px] text-[14px] text-wrap">
              Project URL:{" "}
              <a href={url} target="_blank">
                {url}
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
