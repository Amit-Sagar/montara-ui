import { Button } from "@radix-ui/themes";
import React from "react";
import backIcon from "../assets/icons/backIcon.svg";
import headerIcon from "../assets/icons/headerIcon.png";
import Sidebar from "./Sidebar";
import RightSection from "./RightSection";

const Layout = ({ children, setOpenModal }) => {
  return (
    <div>
      <div className="flex justify-between  items-center py-4 border-b-2 border-[#EFEFEF] px-5">
        <Button
          color="gray"
          variant="surface"
          className="!border !border-[#EFEFEF]"
        >
          <span>
            <img src={backIcon} alt="/" />
          </span>
          <p className="text-black">Back</p>
        </Button>
        <div className="flex justify-center items-center gap-2">
          <img src={headerIcon} alt="" />
          <p className="text-lg leading-4 font-semibold">Starter Project</p>
        </div>
        <div className="flex gap-3">
          <button className="border border-[#EFEFEF] w-8 h-8 flex items-center px-1 py-0">
            <div className="text-white rounded-md bg-[#21CCEE] font-bold w-full ">
              C
            </div>
          </button>
          <Button
            color="#2160FD"
            className="shadow-lg !font-semibold !leading-[14px] !px-2.5"
          >
            Export
          </Button>
        </div>
      </div>
      <div className="flex h-screen w-full">
        <Sidebar />
        {children}
        <RightSection setOpenModal={setOpenModal} />
      </div>
    </div>
  );
};

export default Layout;
