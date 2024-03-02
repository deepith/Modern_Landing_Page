import React from "react";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";

export const Card = ({ value, ind }) => {
  return (
    <div className={`${value.width}`}>
      <motion.div
        whileHover={{
          backgroundColor: ind === 1 && "#7443ff",
          padding: "25px",
        }}
        className={` ${value.bg} p-4 rounded-xl min-h-[40vh] flex flex-col justify-between`}
      >
        <div className="top flex flex-col gap-4">
          <div className="w-full flex justify-between items-center pt-3">
            <h3 className="text-sm">{value.first_head}</h3>
            <GoArrowRight />
          </div>
          <h1 className="text-2xl w-[60%]">{value.second_head}</h1>
        </div>
        <div className="bottom">
          {value.contact_btn ? (
            <div>
              <h1 className="text-8xl whitespace-nowrap">Start a Project</h1>
              <button className="px-5 py-2 border-[1px] rounded-full mt-3">
                Contact us
              </button>
            </div>
          ) : (
            <p className="text-sm text-zinc-400">
              Explore what drives out team.
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
};
