import React from "react";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { useIsDarkStore } from "@/store";
import Link from "next/link";
const Header = ({ isDark, updateIsDark }) => {
  return (
    <div className="flex justify-between sticky top-4 z-40 backdrop-blur-lg items-center border-[1px] h-[52px] rounded-[100px] p-3 font-[600] dark:border-[#1F293A]">
      <Link href={"/"}>
        <div className="flex text-black dark:text-white justify-center items-center">
          <div className="w-[22px] mr-1 ">
            <img src="/logo.png" alt="logo" />
          </div>
          <p>McKinsly</p>
        </div>
      </Link>
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
