import uploadIcon from "../assets/icons/Icon.svg";

const FileInput = ({ label, onChange, inputRef }) => {
  return (
    <div
      className={
        "mt-4 bg-transparent border-2 border-dashed border-[#DFDFDF] bg-gray-100 pb-6 mb-7 rounded-lg"
      }
    >
      <div className="w-[90%] mx-auto flex flex-col items-center rounded-full">
        <label htmlFor="input" className="bg-white/[0.05] p-3 rounded-full my-1">
          <img src={uploadIcon} alt="/" />
        </label>
        {/* <label htmlFor="input" className={` text-[#6938EF] text-center `}>
          Click to upload
        </label> */}
        <input
          ref={inputRef}
          type="file"
          id="input"
          className={`w-40 text-center hidden`}
          onChange={onChange}
        />
        <div className="text-center mt-1">
          <p className={` text-xs text-center w-[150px] font-medium text-black text-[14px]`}>{label}</p>
        </div>
      </div>
    </div>
  );
};

export default FileInput;
