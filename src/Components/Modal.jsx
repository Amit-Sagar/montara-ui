import React from "react";
import FileInput from "./FileInput";
import img1 from "../assets/images/modalImg.png";
import img2 from "../assets/images/ModalImg2.png";
import closeIcon from "../assets/icons/Generalclose.svg";

const Modal = ({ fileInputRef, handleVideoUpload, setOpenModal }) => {
  return (
    <div className="border-l-2 border-[#EFEFEF] max-w-[320px]">
      <div className="border-b-2 border-[#EFEFEF] py-[4.5px] px-5 flex justify-between items-center">
        <h1 className="ml-[19px] text-[14px] font-medium">Media</h1>
        <img
          className="cursor-pointer"
          src={closeIcon}
          alt="/"
          onClick={() => setOpenModal(false)}
        />
      </div>
      <div className="px-5">
        <p className="text-[#707070] text-xs mt-4 text-[13px] font-medium">
          Upload Media
        </p>
        <FileInput
          inputRef={fileInputRef}
          onChange={handleVideoUpload}
          label="Drag and drop File
or click to browse files"
        />
      </div>
      <div className="border-y-2 border-[#EFEFEF] flex gap-2 items-center bg-[#FAFAFA] py-2">
        <button className="bg-white w-[60px] rounded-lg text-sm py-1 px-1.5 shadow-lg ml-[20px] font-semibold text-nowrap">
          Images
        </button>
        <button className="p-0 text-sm w-[54px] leading-[14px] text-gray-500 font-semibold text-nowrap">
          Video
        </button>
        <button className="p-0 text-sm w-[54px] text-gray-500 leading-[14px] font-semibold text-nowrap">
          Logo
        </button>
        <button className="p-0 text-sm w-[54px] text-gray-500 leading-[14px] font-semibold text-nowrap">
          Unsplash
        </button>
      </div>
      <div className="px-5">
        <p className="text-[#707070] text-xs mt-[14px] font-medium">Media</p>
        <div className="flex flex-wrap gap-2 justify-center items-center mt-3">
          <img src={img1} alt="/" />
          <img src={img1} alt="/" />
          <img src={img1} alt="/" />
          <img src={img2} alt="/" />
          <img src={img2} alt="/" />
          <img src={img2} alt="/" />
          <img src={img2} alt="/" />
          <img src={img2} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
