import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

export const Product = ({ value, changePos, inx }) => {
  return (
    <motion.div
      whileHover={{ paddingLeft: "30px" }}
      onMouseEnter={() => changePos(inx)}
      className="py-[10vh] max-w-screen-xl m-auto h-[23rem] flex justify-between items-center "
    >
      <h1 className="text-5xl font-medium">{value.title}</h1>
      <div className="w-1/3 ">
        <p className="-translate-y-[50%]">{value.des}</p>
        <div className="flex gap-5 ">
          <Button name="Live Website" />
          {value.case_btn && <Button name="Case Study" />}
        </div>
      </div>
    </motion.div>
  );
};
