import React from "react";
import Horizontal from "../assets/icons/Horizontal.svg";
import StrikeThrough from "../assets/icons/strike-through.svg";
import Rectangle from "../assets/icons/Rectangle 40413.svg";
import Vector from "../assets/icons/Vector.svg";
import Frame from "../assets/images/Frame 2147223596.svg";
import Timeline from "../assets/images/Timeline.svg";
import Timeline1 from "../assets/images/Timeline (1).svg";
import Cut from "../assets/icons/cut.svg";
import Delete from "../assets/icons/delete.svg";
import Forward from "../assets/icons/forward.svg";
import Backward from "../assets/icons/backward.svg";
import Play from "../assets/icons/play.svg";
import Zoom from "../assets/icons/Frame 2147224314.svg";
import Line from "../assets/images/Line.svg";
import { Button } from "@radix-ui/themes";
import { useState } from "react";

export default function MidContainer() {
  const navItems = [
    {
      id: 1,
      name: "Orientation",
      img: <img src={Horizontal} alt="" />,
      options: ["Orientation", "val2"],
    },
    {
      id: 2,
      name: "Background",
      img: <img src={StrikeThrough} alt="" />,
      options: ["Background", "val2"],
    },
    {
      id: 3,
      name: "Opacity",
      img: <img src={Rectangle} alt="" />,
      options: ["Opacity", "val2"],
    },
    {
      id: 4,
      name: "Blur",
      img: <img src={Vector} alt="" />,
      options: ["Blur", "val2"],
    },
  ];
  const [selected, setSelected] = useState({});
  return (
    <div className="w-full">
      <header className="flex justify-center items-center border-b-2 border-[#EFEFEF] py-1">
        {navItems.map((item) => (
          <div key={item.id}>
            <div className="flex">
              {item.img}{" "}
              <select
                style={{
                  padding: "5px",
                  fontSize: "14px",
                  fontWeight: "500",
                  border: "none",
                  marginRight: "15px",
                  color: "#303030",
                }}
                value={selected[item.name] || ""}
                onChange={(e) =>
                  setSelected((prev) => ({
                    ...prev,
                    [item.name]: e.target.value,
                  }))
                }
              >
                {item.options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </header>
      <div>
        <img className="m-auto px-[82px]" src={Frame} alt="" />
        <div className="flex justify-between py-[10px] border-t-2 border-[#EFEFEF]">
          <h3 className="font-medium ml-[18px]">08:32</h3>
          <div className="flex">
            <img src={Backward} alt="" />
            <img src={Play} alt="" />
            <img src={Forward} alt="" />
          </div>
          <div className="flex mr-[18px]">
            <img src={Cut} alt="" />
            <img src={Delete} alt="" />
          </div>
        </div>
      </div>
      <footer>
        <div className="flex justify-between pt-4 pb-4 bg-[#EFEFEF] text-[#707070] text-sm/[14px] px-[10px]">
          <p>00:00</p>
          <p>00:02</p>
          <p>00:04</p>
          <p>00:06</p>
          <p>00:08</p>
          <p>00:10</p>
          <p>00:11</p>
          <p>00:12</p>
          <p>00:13</p>
          <p>00:14</p>
          <p>00:15</p>
          <p>00:16</p>
          <p>00:18</p>
          <p>00:20</p>
          <p>00:21</p>
        </div>
        <div className="relative px-4">
          <img className="absolute left-20 -top-2 " src={Line} alt="" />
          <img
            className="my-3 w-full max-h-12 object-cover rounded-lg"
            src={Timeline}
            alt=""
          />
          <div className="bg-[#FAFAFA] w-full flex justify-center rounded-lg">
            {/* <Button className="bg-[#a6f0fc] text-[#06AED4]"><img src={Zoom} alt=""/>Zoom 2s</Button> */}
            <Button
              className="!bg-[#a6f0fc] !flex !justify-start !items-center !gap-0.5 !px-0.5 !w-[183px] "
              variant="soft"
            >
              <img src={Zoom} alt="" />
              <div className="flex items-center gap-0.5">
                <p className="text-[#0C8AB2]">Zoom</p>{" "}
                <span className="text-[#06AED4]">2s</span>
              </div>
            </Button>
          </div>
          <img className="my-3 w-full" src={Timeline1} alt="" />
        </div>
      </footer>
    </div>
  );
}
