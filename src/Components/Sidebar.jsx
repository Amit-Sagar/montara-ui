import React from "react";
import img from "../assets/images/sidebar-img.png";
// import { Button } from "@radix-ui/themes";

export default function Sidebar() {
  return (
    <div className="border-r-2 bg-[#FAFAFA] border-[#EFEFEF] px-4 flex flex-col">
      <div className="w-[110px] outline outline-1 outline-[#2160fd] rounded-[10px] h-[63px] mt-[14px] px-[3px] py-0">
        <p className="bg-[#626060] text-white w-fit px-1 rounded-full text-[9px] relative top-[40px] left-[5px] z-[9999]">1</p>
        <img className="rounded-lg relative bottom-[11px]" src={img} alt="/" />
        <p className="bg-[#626060] text-white w-fit px-[6px] rounded-full text-[9px] relative bottom-[23px] left-[70px] z-[9999]">00:21</p>
      </div>
      <div className=" w-[110px]">
      <p className="bg-[#626060] text-white w-fit px-[5px] rounded-full text-[9px] relative top-[55px] left-[5px]">2</p>
        <img className="rounded-lg w-[110px]" src={img} alt="/" />
        <p className="bg-[#626060] text-white w-fit px-2 rounded-full text-[9px] relative bottom-[19px] left-[70px]">00:21</p>
      </div>
      <div className=" w-[110px]">
      <p className="bg-[#626060] text-white w-fit px-[5px]  rounded-full text-[9px] relative top-[55px] left-[5px]">3</p>
        <img className="rounded-lg w-[110px]" src={img} alt="/" />
        <p className="bg-[#626060] text-white w-fit px-2  rounded-full text-[9px] relative bottom-[19px] left-[70px]">00:21</p>
      </div>
<div className="w-[110px] bg-white text-center border-[#EFEFEF] rounded-[4px] shadow">
     <button className="font-normal">+</button>
      </div>
    </div>
  );
}
