import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export const Work = () => {
  const [cards, setCards] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "55%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "40%",
      left: "60%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "55%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "40%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "40%",
      left: "50%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  const changeAction = (array) => {
    setCards((prev) =>
      prev.map((card, index) =>
        array.indexOf(index) === -1
          ? { ...card, isActive: false }
          : { ...card, isActive: true }
      )
    );
  };

  scrollYProgress.on("change", (latest) => {
    switch (Math.floor(latest * 100)) {
      case 0:
        changeAction([]);
        break;
      case 1:
        changeAction([0]);
        break;
      case 2:
        changeAction([0, 1]);
        break;
      case 3:
        changeAction([0, 1, 2]);
        break;
      case 4:
        changeAction([0, 1, 2, 3]);
        break;
      case 6:
        changeAction([0, 1, 2, 3, 4]);
        break;
      case 8:
        changeAction([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="max-w-screen-xl m-auto flex justify-center mt-20 relative">
      <h1 className="text-[60vh] leading-none font-medium">work</h1>
      <div className={`top-0 h-full w-full absolute`}>
        {cards.map(
          (value) =>
            value.isActive && (
              <img
                src={value.url}
                alt=""
                className={`w-[275px] h-[275px] rounded-md absolute overflow-hidden -translate-x-[50%] -translate-y-[50%]`}
                style={{
                  top: `${value.top}`,
                  left: `${value.left}`,
                }}
              />
            )
        )}
      </div>
    </div>
  );
};
