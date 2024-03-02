import React, { useState } from "react";
import { Product } from "./Product";
import { motion } from "framer-motion";

export const Products = () => {
  const product_details = [
    {
      title: "Arqitel",
      des: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      case_btn: false,
      live_btn: true,
    },
    {
      title: "Cula",
      des: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      case_btn: false,
      live_btn: true,
    },
    {
      title: "TTR",
      des: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      case_btn: false,
      live_btn: true,
    },
    {
      title: "Yahoo!",
      des: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      case_btn: true,
      live_btn: true,
    },
    {
      title: "Rainfall",
      des: "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      case_btn: true,
      live_btn: true,
    },
  ];

  const [pos, setPos] = useState(0);

  const changePosition = (indx) => {
    setPos(23 * indx);
  };

  return (
    <div className="w-full pt-40 bg-zinc-900 relative">
      <div className="w-full m-auto relative">
        {product_details.map((elem, index) => (
          <Product value={elem} changePos={changePosition} inx={index} />
        ))}
        <div className="w-full h-full absolute top-0 pointer-events-none">
          <motion.div
            initial={{ y: 0, x: "-50%" }}
            animate={{ y: pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-96 h-[23rem] absolute left-[45%] rounded-xl overflow-hidden"
          >
            <motion.div
              animate={{ y: -pos + "rem" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="w-full h-full object-contain bg-cover"
              style={{
                backgroundImage:
                  "url('https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png')",
              }}
            ></motion.div>
            <motion.div
              animate={{ y: -pos + "rem" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="w-full h-full bg-blue-400 object-contain bg-cover"
              style={{
                backgroundImage:
                  "url('https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png')",
              }}
            ></motion.div>
            <motion.div
              animate={{ y: -pos + "rem" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="w-full h-full bg-blue-500 object-contain bg-cover"
              style={{
                backgroundImage:
                  "url('https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png')",
              }}
            ></motion.div>
            <motion.div
              animate={{ y: -pos + "rem" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="w-full h-full bg-blue-600 object-contain bg-cover"
              style={{
                backgroundImage:
                  "url('https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png')",
              }}
            ></motion.div>
            <motion.div
              animate={{ y: -pos + "rem" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="w-full h-full bg-blue-700 object-contain bg-cover"
              style={{
                backgroundImage:
                  "url('https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png')",
              }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
