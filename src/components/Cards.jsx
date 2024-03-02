import React from "react";
import { Card } from "./Card";

export const Cards = () => {
  const card_type = [
    {
      first_head: "Up Next: News",
      second_head: "Insights and behind the scenes",
      contact_btn: false,
      width: "w-[30%]",
      bg: "bg-zinc-800",
    },
    {
      first_head: "Get In Touch",
      second_head: "Let's get to it, together.",
      contact_btn: true,
      width: "w-[70%]",
      hover: "hover:bg-violet-600",
      bg: "bg-zinc-700",
    },
  ];

  return (
    <div className="w-full pt-[40vh] bg-zinc-900">
      <div className="w-full max-w-screen-xl m-auto flex gap-1 pb-7">
        {card_type.map((dets, index) => (
          <Card value={dets} ind={index} />
        ))}
      </div>
    </div>
  );
};
