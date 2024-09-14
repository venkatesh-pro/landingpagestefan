import React from "react";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { useIsDarkStore } from "@/store";
const Header = ({ isDark, updateIsDark }) => {
  return (
    <div className="flex justify-between sticky top-4 z-40 backdrop-blur-lg items-center border-[1px] h-[52px] rounded-[100px] p-3 font-[600] dark:border-[#1F293A]">
      <div className="flex text-black dark:text-white justify-center items-center">
        <div className="w-[22px] mr-1 ">
          <img src="/logo.png" alt="logo" />
        </div>
        <p>Envoy</p>
      </div>
      <div>
        <button className="sm:text-[16px] flex items-center text-[10px] border-[1px] border-[#F97316] text-[#F97316] rounded-[100px] sm:px-3 p-1 py-1 font-semibold ">
          ProductHunt{" "}
          <span className="bg-[#F97316] ml-1 sm:text-[16px] text-[10px] text-sm px-2 py-[1px] rounded-[100px]  text-white">
            5.9K
          </span>
        </button>
      </div>
      <div className="">
        <button
          className="w-[30px] flex items-center justify-center h-[30px] border-[1px] rounded-full"
          onClick={() => updateIsDark(!isDark)}
        >
          <WbSunnyOutlinedIcon className="text-lg dark:text-white text-black" />
        </button>
      </div>
    </div>
  );
};

export default Header;
