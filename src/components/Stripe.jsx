import React from "react";

export const Stripe = ({ value }) => {
  return (
    <div className="w-full h-full flex text-center border-r-[1.5px] px-10 justify-between py-6 items-center border-y-[1.5px] border-zinc-600">
      <img src={value.url} alt="" />
      <h1 className="font-medium text-xl">{value.numbers}</h1>
    </div>
  );
};
