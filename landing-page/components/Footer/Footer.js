import React from "react";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import PingAnimation from "../HomePage/PingAnimation/PingAnimation";
const Footer = () => {
  return (
    <div className="mt-16 p-6 mb-16 dark:bg-[#030816] bg-[#fff] dark:border-[#1F293A] border-[1px] rounded-xl ">
      <div className="flex sm:flex-row  flex-col">
        <div className="sm:w-[50vw] ">
          <div className="flex items-center">
            <div className="w-[30px] ">
              <img src="/logo.png" alt="logo" />
            </div>
            <p className="text-xl dark:text-white font-[600] ml-1">Envoy</p>
          </div>

          <p className="dark:text-[#919EB5] text-[#64748B] mt-2 sm:w-[70%] font-[300] text-[14px]">
            We are on a mission to provide a reliable, easy and fast way to
            monitor the performance of your APIs and websites.
          </p>
          <button class=" mt-2 text-white border-[1px] border-[#2E69DF] rounded-lg ">
            <span className="flex px-3 py-1 items-center justify-center">
              <p class="bg-gradient-to-r text-sm from-[#2E69DF] to-[#6B309E] inline-block text-transparent bg-clip-text">
                Open Beta
              </p>
              <span className="ml-[-4px] mt-[2px]">
                <PingAnimation />
              </span>
            </span>
          </button>
        </div>
        <div
          className="sm:w-[30vw] sm:mt-0 mt-8"
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div>
            <h2 className="dark:text-white">Resources</h2>
            <ul className="leading-8 dark:text-[#919EB5] text-[#64748B] mt-4 font-[300] text-[14px]">
              <li>
                <a href="#" className="underline">
                  Intro
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Docs (coming soon)
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="dark:text-white">Company</h2>
            <ul className="leading-8 dark:text-[#919EB5] text-[#64748B] mt-4 font-[300] text-[14px]">
              <li>
                <a href="#" className="underline ">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Updates
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2 sm:flex-row flex-col">
        <div className="flex">
          <button className="p-3 border-[2px] rounded-lg mr-2">
            <img
              src="/discord-icon.svg"
              alt="discord"
              className="filter invert-0 dark:invert"
            />
          </button>
          <button className="p-3 border-[2px] rounded-lg mr-2">
            <img
              src="/github-icon.svg"
              alt="github"
              className="filter invert-0 dark:invert"
            />
          </button>

          <button className="p-3 border-[2px] rounded-lg mr-2">
            <img
              src="/x-icon.svg"
              className="filter invert-0 dark:invert"
              alt="x.com"
            />
          </button>

          <button className="p-3 border-[2px] rounded-lg">
            <img
              src="/linkedin-icon.svg"
              alt="x.com"
              className="filter invert-0 dark:invert"
            />
          </button>
        </div>
        <div>
          <p className="dark:text-[#919EB5] text-[#64748B]">
            Copyright © Authex Inc., 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
