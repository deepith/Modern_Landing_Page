import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto h-16 flex items-center py-10 border-b-[1px] border-zinc-700 justify-between">
      <div className="flex items-center gap-16">
        <img
          className="cursor-pointer"
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="flex gap-14 items-center ">
          {["Home", "Work", "Careers", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span className="w-[1px] h-6 bg-zinc-700"></span>
            ) : (
              <a
                href="#"
                className="text-sm font-medium flex items-center gap-[2px]"
              >
                {index === 1 && (
                  <span
                    style={{
                      boxShadow: "0 0 0.25em #00FF19",
                    }}
                    className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full "
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
