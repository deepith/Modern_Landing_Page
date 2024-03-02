import { motion } from "framer-motion";
import React from "react";
import { MdSubdirectoryArrowRight } from "react-icons/md";

const Button = ({ name = "Start a Project" }) => {
  return (
    <motion.div
      whileHover={{ padding: "15px" }}
      className="bg-white w-fit px-3 py-2 rounded-full text-zinc-800 flex items-center gap-3 cursor-pointer"
    >
      <span className="text-sm text-zinc-800 opacity-80">{name}</span>
      <MdSubdirectoryArrowRight />
    </motion.div>
  );
};

export default Button;
