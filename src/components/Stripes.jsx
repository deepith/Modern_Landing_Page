import React from "react";
import { Stripe } from "./Stripe";

export const Stripes = () => {
  const awards = [
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
      numbers: "52",
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
      numbers: "12",
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
      numbers: "2",
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
      numbers: "52",
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
      numbers: "12",
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
      numbers: "2",
    },
  ];

  return (
    <div className="w-full py-4 grid grid-cols-6 items-center mt-8 bg-zinc-900">
      {awards.map((award) => (
        <Stripe value={award} />
      ))}
    </div>
  );
};
