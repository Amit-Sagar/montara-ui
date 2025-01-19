import React from "react";
import img from "../assets/images/sidebar-img.png";
import { Button } from "@radix-ui/themes";

export default function Sidebar() {
  return (
    <div className="w-44 border-r-2 bg-[#FAFAFA] border-[#EFEFEF] px-4 flex flex-col gap-3">
      <div className=" pt-3">
        <img className="rounded-lg" src={img} alt="/" />
      </div>
      <div className="">
        <img className="rounded-lg" src={img} alt="/" />
      </div>
      <div className="">
        <img className="rounded-lg" src={img} alt="/" />
      </div>

      <Button
        className="!bg-white !text-black !shadow-md !border border-[#F5F5F5]"
        variant="solid"
        highContrast
      >
        +
      </Button>
    </div>
  );
}
