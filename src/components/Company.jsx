import React from "react";
import { motion } from "framer-motion";

export const Company = ({ img, direction }) => {
  return (
    <div className="w-full bg-zinc-900 flex overflow-hidden">
      <motion.div
        initial={{ x: `${direction === "right" ? "-100%" : "0"}` }}
        animate={{ x: `${direction === "right" ? "0" : "-100%"}` }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-10"
      >
        {img.map((each_img, index) => (
          <img src={each_img} className={`${index === 0 && "ml-32"} w-24`} />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: `${direction === "right" ? "-100%" : "0"}` }}
        animate={{ x: `${direction === "right" ? "0" : "-100%"}` }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-10"
      >
        {img.map((each_img, index) => (
          <img className={`${index === 0 && "ml-32"} w-24`} src={each_img} />
        ))}
      </motion.div>
    </div>
  );
};
