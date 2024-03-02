import React from "react";

export const Footer = () => {
  return (
    <div className="w-full bg-zinc-900 pb-8">
      <div className="max-w-screen-xl m-auto flex gap-8 pl-[1.5px]">
        {["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map(
          (link) => (
            <a className="text-sm text-zinc-500" href="">
              {link}
            </a>
          )
        )}
      </div>
    </div>
  );
};
