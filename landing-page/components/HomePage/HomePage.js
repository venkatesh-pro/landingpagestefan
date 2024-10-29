"use client";
import React, { useEffect, useState } from "react";
import PingAnimation from "./PingAnimation/PingAnimation";
import styles from "./HomePage.module.css";

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Link from "next/link";
import { useIsDarkStore } from "@/store";
import CustomBtn from "../CustomBtn/CustomBtn";
import Spline from "@splinetool/react-spline";
import AutoIncrementBtn from "../CustomBtn/AutoIncrementBtn";
import { io } from "socket.io-client";
import toast from "react-hot-toast";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const HomePage = () => {
  const { isDark } = useIsDarkStore();

  const [email, setEmail] = useState();
  const [isLoadingForSendMail, setIsLoadingForSendMail] = useState(false);
  const [numberIncrementData, setNumberIncrementData] = useState();

  const getNumberIncrementData = async () => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/number-increment`;

    console.log({ url });

    const res = await fetch(url, {
      method: "GET",
    });

    const data = await res.json();

    setNumberIncrementData(data);
  };

  useEffect(() => {
    getNumberIncrementData();
  }, []);

  useEffect(() => {
    let socket;

    const createSocket = async () => {
      socket = io(process.env.NEXT_PUBLIC_API_URL);

      socket.on("incremented", () => {
        console.log("from scoket ");
        getNumberIncrementData();

        // revalidateProducts();
      });
    };

    createSocket();

    return () => {
      socket?.disconnect();
    };
  }, []);

  const handleJoin = async () => {
    try {
      if (!email) {
        return toast.error(`Please enter valid Email`);
      }
      setIsLoadingForSendMail(true);
      const url = `${process.env.NEXT_PUBLIC_API_URL}/user`;

      console.log({ url });

      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: email,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      console.log({ res: res.ok });

      if (!res.ok) {
        throw new Error();
      }
      setIsLoadingForSendMail(false);

      toast.success("Mail Sended");
    } catch (error) {
      console.log({ error });
      setIsLoadingForSendMail(false);

      toast.error(`Please enter valid Email`);
    }
  };
  return (
    <>
      <main className="h-[72vh] mt-[100px] ">
        {/* open beta section */}
        <section className="text-center font-[600]">
          <button class="  text-white border-[1px] border-[#2E69DF] rounded-lg ">
            <span className="flex px-3 py-1 items-center justify-center">
              <p class="bg-gradient-to-r text-sm from-[#2E69DF] to-[#6B309E] inline-block text-transparent bg-clip-text">
                Open Beta
              </p>
              <span className="ml-[-4px] mt-[2px]">
                <PingAnimation />
              </span>
            </span>
          </button>
        </section>
        <section>
          <h1
            className={`text-transparent bg-clip-text bg-gradient-to-tl from-[hsl(210,40%,96.1%)]
via-[hsl(222.2,84%,4.9%)] to-[hsl(222.2,84%,4.9%)] dark:from-[hsl(210,40%,30%)] dark:via-[hsl(0,0%,100%)] dark:to-[hsl(0,0%,93%)] font-[600] text-4xl md:text-6xl mt-[20px] text-center`}
          >
            From $1 to $1 Billion, on Autopilot.
          </h1>
          <p className="text-center mt-[23px] text-[16px] font-[400] text-[#64748B] dark:text-[#94A2B9]">
            Request Early Access.
          </p>
          <div className="mt-4 text-center ">
            <div className={`${styles.searchWrapper}`}>
              <input
                className="md:placeholder:text-lg md:w-[460px] md:h-[50px] sm:w-[360px] sm:h-[40px] w-[280px] h-[35px] placeholder:text-[12px]"
                type="text"
                placeholder="Enter your email address"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="md:h-[40px] md:px-[16px] md:py-[0px] md:text-[14px] md:top-[-10px] sm:h-[30px] sm:top-[-6px] text-[10px] top-[-4px] py-[6px] px-[5px] w-[136.05px]"
                type="submit"
                onClick={() => handleJoin()}
              >
                {isLoadingForSendMail ? (
                  <div className="flex items-center justify-center">
                    <LoadingSpinner />
                  </div>
                ) : (
                  "Join waitlist"
                )}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center mt-4 cursor-pointer">
            <p class="bg-gradient-to-r mr-2  text-lg from-[#2E69DF]  to-[#6B309E] inline-block text-transparent bg-clip-text">
              Watch the intro
            </p>
            <PlayCircleOutlineIcon className="dark:text-white text-black"></PlayCircleOutlineIcon>
          </div>
          <div className="flex flex-col items-center justify-center mt-32">
            <p className="font-[600] dark:text-[#94A2B9] text-[#64748B]">
              People talk...
            </p>
            <div
              className="grid sm:grid-cols-4 sm:gap-0 grid-cols-2 gap-8 w-full mt-5"
              style={{
                justifyItems: "center",
              }}
            >
              <div>
                <Link href={"/#"} className="flex items-center">
                  <img
                    src="/trustedByIcons/hanko.svg"
                    className="filter invert-0 dark:invert"
                    alt="hanko.svg"
                  />
                  <ArrowOutwardIcon className="ml-1 text-[14px] text-[#65748A]" />{" "}
                </Link>
              </div>
              <div>
                <Link href={"/#"} className="flex items-center">
                  <img
                    src="/trustedByIcons/documenso.svg"
                    alt="hanko.svg"
                    className="filter invert-0 dark:invert"
                  />
                  <ArrowOutwardIcon className="ml-1 text-[14px] text-[#65748A]" />{" "}
                </Link>
              </div>
              <div>
                <Link href={"/#"} className="flex items-center">
                  <img
                    src="/trustedByIcons/midday.svg"
                    alt="hanko.svg"
                    className="filter invert-0 dark:invert"
                  />
                  <ArrowOutwardIcon className="ml-1 text-[14px] text-[#65748A]" />{" "}
                </Link>
              </div>
              <div className="mt-1.5">
                <Link href={"/#"} className="flex items-center">
                  <img
                    src="/trustedByIcons/Cal.svg"
                    alt="hanko.svg"
                    className="filter invert-0 dark:invert"
                  />
                  <ArrowOutwardIcon className="ml-1 text-[14px] text-[#65748A]" />{" "}
                </Link>
              </div>
            </div>
            <p className="font-[600] mt-6 underline dark:text-[#94A2B9] text-[#64748B]">
              <Link href={"#"}>and many more...</Link>
            </p>
          </div>
        </section>
      </main>

      <main className="mt-10">
        <div className=" dark:text-white  border-[1px] dark:border-[#1F293A] rounded-xl   flex justify-around items-center p-5">
          <p className="flex flex-col items-center">
            <span className="font-[600] md:text-3xl sm:text-xl text-lg">
              <AutoIncrementBtn
                value={numberIncrementData?.userPerDay}
              ></AutoIncrementBtn>
            </span>
            <span className="font-[300] md:text-[16px] sm:text-[12px] text-[10px] text-[#64748B]">
              Beta users
            </span>
          </p>
          <p className="flex flex-col items-center">
            <span className="font-[600] flex md:text-3xl sm:text-xl text-lg">
              $
              <AutoIncrementBtn
                value={numberIncrementData?.volumeProcessedPerHour}
              ></AutoIncrementBtn>
            </span>
            <span className="font-[300] md:text-[16px] sm:text-[12px] text-[10px]  text-[#64748B]">
              Volume processed
            </span>
          </p>
          <p className="flex flex-col items-center">
            <span className="flex font-[600] md:text-3xl sm:text-xl text-lg">
              <AutoIncrementBtn
                value={numberIncrementData?.UserWaitingPerMin}
              ></AutoIncrementBtn>
            </span>
            <span className="font-[300] md:text-[16px] sm:text-[12px] text-[10px] text-[#64748B]">
              Users waiting
            </span>
          </p>
        </div>
      </main>

      {/* main for core */}
      <main className="mt-10 dark:text-white border-[1px] dark:border-[#1F293A] rounded-xl backdrop-blur-sm bg-gradient-to-br to-20% dark:from-[#1A2636] dark:to-[#030819] from-[#F2F6F9] to-[#FFFFFF] w-full flex md:flex-row flex-col justify-between relative">
        <div className="absolute top-0 flex items-center flex-col  w-full">
          <button className="p-2 border-[1px] dark:border-[#313a49] rounded-full mt-6">
            {/* <ElectricBoltIcon /> */}
            <img src="/lightning.svg" />
          </button>

          <h2 className="">
            <span className={` text-3xl mt-4 font-[600]`}>Co</span>
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-tl from-[hsl(210,40%,96.1%)] to-[hsl(222.2,84%,4.9%)] dark:from-[hsl(0,0%,100%)] dark:to-[hsl(0,0%,40%)] text-3xl mt-4 font-[600]`}
            >
              re
            </span>
            {/* Core */}
          </h2>
        </div>
        <div className="md:w-[50%]">
          <div className="md:h-[780px] relative h-[600px]">
            <div className={styles.maskOverlay}>
              {/* <Spline scene="https://prod.spline.design/evoNDgq-bRbqxFlU/scene.splinecode" /> */}
              <Spline scene="https://prod.spline.design/evoNDgq-bRbqxFlU/scene.splinecode" />
            </div>
          </div>
        </div>
        <div className="md:w-[50%]">
          <div className="md:p-0 md:mt-[130px] p-4">
            <div className="">
              <ul className="">
                <div>
                  <li
                    className={`${
                      isDark
                        ? styles.liStyleWithCustomIconDark
                        : styles.liStyleWithCustomIcon
                    }
                  font-[600] filter invert-0 dark:invert  dark:text-black `}
                    style={{
                      background: 'url("/liIcons.svg") no-repeat left center',
                    }}
                  >
                    Intelligent Management
                  </li>
                  <li className="text-[#64748B] text-justify md:mr-10">
                    Envoy simplifies and automates core business processes for
                    companies of all sizes, from startups to global enterprises.{" "}
                  </li>
                </div>
                <div>
                  <li
                    className={`${
                      isDark
                        ? styles.liStyleWithCustomIconDark
                        : styles.liStyleWithCustomIcon
                    }
                  font-[600] filter invert-0 dark:invert  dark:text-black `}
                    style={{
                      background: 'url("/play.svg") no-repeat left center',
                    }}
                  >
                    Did someone say Automation?
                  </li>
                  <li className="text-[#64748B] text-justify md:mr-10">
                    venkatesh
                  </li>
                </div>
                <div>
                  <li
                    className={`${
                      isDark
                        ? styles.liStyleWithCustomIconDark
                        : styles.liStyleWithCustomIcon
                    }
                  font-[600] filter invert-0 dark:invert  dark:text-black `}
                    style={{
                      background: 'url("/play.svg") no-repeat left center',
                    }}
                  >
                    Streamlined Workflows{" "}
                  </li>
                  <li className="text-[#64748B] text-justify md:mr-10">
                    Envoy’s automation optimizes workflows across your business,
                    ensuring efficiency in customer interactions, operations,
                    and logistics.
                  </li>
                </div>
                <div>
                  <li
                    className={`${
                      isDark
                        ? styles.liStyleWithCustomIconDark
                        : styles.liStyleWithCustomIcon
                    }
                  font-[600] filter invert-0 dark:invert  dark:text-black `}
                    style={{
                      background: 'url("/play.svg") no-repeat left center',
                    }}
                  >
                    Scalable & Secure
                  </li>
                  <li className="text-[#64748B] text-justify md:mr-10">
                    Our cloud infrastructure scales with your business,
                    supporting everything from small operations to
                    billion-dollar enterprises.{" "}
                  </li>
                </div>
                <div>
                  <li
                    className={`${
                      isDark
                        ? styles.liStyleWithCustomIconDark
                        : styles.liStyleWithCustomIcon
                    }
                  font-[600] filter invert-0 dark:invert  dark:text-black `}
                    style={{
                      background: 'url("/robot.svg") no-repeat left center',
                    }}
                  >
                    Autonomous Ecosystem
                  </li>
                  <li className="text-[#64748B] text-justify md:mr-10">
                    Envoy enables your business to scale from $1 to $1 billion
                    with minimal human intervention, driving success in a
                    fast-changing market.
                  </li>
                </div>
              </ul>
              <div className="text-center flex justify-center mt-6 md:mb-6 mb-4">
                {/* <button
                className={`${styles.buttonLinearGradient} p-2 rounded-[100px] text-white`}
              ></button> */}
                {/* <CustomBtn></CustomBtn> */}

                <Link
                  href={"/"}
                  className="relative  h-[28px] font-inter font-semibold text-[15px] leading-[28px] flex items-center justify-center
             bg-gradient-to-r from-[#236CD6] to-[#A441D5] bg-clip-text text-transparent after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-[#236CD6] after:bottom-[5px]"
                >
                  Learn More
                </Link>

                <Link href={"/"} className="cursor-pointer mt-1.5">
                  <img src="/arrow.svg" alt="arrow.svg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* main for Financial */}

      <main className="mt-16 to-20%  text-center  border-[1px] rounded-xl backdrop-blur-sm bg-gradient-to-br from-[#F2F6F9] to-[#FFFFFF] dark:text-white dark:border-[#1F293A] dark:from-[#1A2636] dark:to-[#030819] w-full flex md:flex-row flex-col justify-between relative">
        <div className="absolute top-0 flex items-center flex-col   w-full">
          <button className="p-2 dark:border-[#313a49] border-[1px] rounded-full mt-6">
            {/* <ElectricBoltIcon /> */}
            <img src="/lightning.svg" />
          </button>

          {/* <h2>
            <span className={` text-3xl mt-4 font-[600]`}>Finan</span>
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-tl from-[hsl(210,40%,96.1%)] to-[hsl(222.2,84%,4.9%)] dark:from-[hsl(0,0%,100%)] dark:to-[hsl(0,0%,40%)] text-3xl mt-4 font-[600]`}
            >
              cial{" "}
            </span>
          </h2> */}
          <h2
            className={`md:text-3xl text-2xl mt-4 font-[600] text-transparent bg-clip-text bg-gradient-to-tl from-[hsl(210,40%,96.1%)]
via-[hsl(222.2,84%,4.9%)] to-[hsl(222.2,84%,4.9%)] dark:from-[hsl(210,40%,30%)] dark:via-[hsl(0,0%,100%)] dark:to-[hsl(0,0%,93%)]   text-center`}
          >
            Financial Tools That Grow With You
          </h2>
          <p className="text-[#64748B] md:w-[60%] w-[85%] md:text-[16px] text-[14px] mt-4">
            Envoy’s scalable financial infrastructure adapts to your business at
            every stage of growth.
          </p>
        </div>
        <div className="md:w-[50%] md:mt-32 sm:mt-40 mt-60">
          <div className="md:h-[430px] relative h-[380px]">
            <div className={styles.maskOverlay}>
              <Spline scene="https://prod.spline.design/IOtJHiUe4jMBVF7C/scene.splinecode" />
            </div>
          </div>
        </div>
        <div className="md:w-[50%] md:mt-20 mt-0">
          <div className="md:p-0 md:mt-[130px] mb-3 p-4">
            <div className="">
              <ul className="text-start">
                <div>
                  <li
                    className={`${
                      isDark
                        ? styles.liStyleWithCustomIconDark
                        : styles.liStyleWithCustomIcon
                    }
                  font-[600] filter invert-0 dark:invert  dark:text-black `}
                    style={{
                      background: 'url("/liIcons.svg") no-repeat left center',
                    }}
                  >
                    Fuel Your Growth
                  </li>
                  <li className="text-[#64748B] text-justify md:mr-10">
                    Unlock the capital your business needs with seamless access
                    to venture funding and financial support through Envoy.
                  </li>
                </div>
                <div>
                  <li
                    className={`${
                      isDark
                        ? styles.liStyleWithCustomIconDark
                        : styles.liStyleWithCustomIcon
                    }
                  font-[600] filter invert-0 dark:invert  dark:text-black `}
                    style={{
                      background: 'url("/play.svg") no-repeat left center',
                    }}
                  >
                    Financial Operations on Autopilot
                  </li>
                  <li className="text-[#64748B] text-justify md:mr-10">
                    Automate invoicing, payment processing, and more, ensuring
                    flawless financial management with minimal effort.
                  </li>
                </div>
                <div>
                  <li
                    className={`${
                      isDark
                        ? styles.liStyleWithCustomIconDark
                        : styles.liStyleWithCustomIcon
                    }
                  font-[600] filter invert-0 dark:invert  dark:text-black `}
                    style={{
                      background: 'url("/play.svg") no-repeat left center',
                    }}
                  >
                    Payments Made Effortless
                  </li>
                  <li className="text-[#64748B] text-justify md:mr-10">
                    Integrated payment processing that simplifies transactions
                    while cutting down on overhead.
                  </li>
                </div>
              </ul>
              <div className="text-center flex justify-center mt-6  md:mb-6 mb-0">
                {/* <button
                className={`${styles.buttonLinearGradient} p-2 rounded-[100px] text-white`}
              >
                Learn More
              </button> */}
                <Link
                  href={"/"}
                  className="relative  h-[28px] font-inter font-semibold text-[15px] leading-[28px] flex items-center justify-center
             bg-gradient-to-r from-[#236CD6] to-[#A441D5] bg-clip-text text-transparent after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-[#236CD6] after:bottom-[5px]"
                >
                  Learn More
                </Link>
                <Link href={"/"} className="cursor-pointer mt-1.5">
                  <img src="/arrow.svg" alt="arrow.svg" />
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* main for Legal */}

      <main className="mt-16 to-20% text-center  border-[1px] rounded-xl backdrop-blur-sm bg-gradient-to-br from-[#F2F6F9] to-[#FFFFFF] dark:text-white dark:border-[#1F293A] dark:from-[#1A2636] dark:to-[#030819] w-full flex md:flex-row flex-col justify-between relative">
        <div className="absolute top-0 flex items-center flex-col  w-full">
          <button className="p-2 dark:border-[#313a49] border-[1px] rounded-full mt-6">
            {/* <ElectricBoltIcon /> */}
            <img src="/lightning.svg" />
          </button>

          <h2
            className={`md:text-3xl text-2xl mt-4 font-[600] text-transparent bg-clip-text bg-gradient-to-tl from-[hsl(210,40%,96.1%)]
via-[hsl(222.2,84%,4.9%)] to-[hsl(222.2,84%,4.9%)] dark:from-[hsl(210,40%,30%)] dark:via-[hsl(0,0%,100%)] dark:to-[hsl(0,0%,93%)]   text-center`}
          >
            Legal Tools That Evolve With You
          </h2>
          <p className="text-[#64748B] md:w-[60%] w-[85%] md:text-[16px] text-[14px] mt-4">
            As your business grows, Envoy’s legal infrastructure scales to meet
            evolving regulatory demands, ensuring you stay ahead of the curve.
          </p>
        </div>
        <div className="md:w-[50%]   md:mt-32 sm:mt-40 mt-60">
          <div className="md:h-[430px] relative h-[380px]">
            <div className={styles.maskOverlay}>
              <Spline scene="https://prod.spline.design/y5ap2Uog0Tl9F47E/scene.splinecode" />
            </div>
          </div>
        </div>
        <div className="md:w-[50%] md:mt-20 mt-0">
          <div className="md:p-0 p-4 md:mt-[130px] mb-3">
            <div className="">
              <ul className="text-start">
                <div>
                  <li
                    className={`${
                      isDark
                        ? styles.liStyleWithCustomIconDark
                        : styles.liStyleWithCustomIcon
                    }
                  font-[600] filter invert-0 dark:invert  dark:text-black `}
                    style={{
                      background: 'url("/liIcons.svg") no-repeat left center',
                    }}
                  >
                    Effortless Legal Compliance
                  </li>
                  <li className="text-[#64748B] text-justify md:mr-10">
                    Ensure your business meets all legal requirements with
                    Envoy’s automated solutions for contracts, filings, and
                    corporate governance.{" "}
                  </li>
                </div>
                <div>
                  <li
                    className={`${
                      isDark
                        ? styles.liStyleWithCustomIconDark
                        : styles.liStyleWithCustomIcon
                    }
                  font-[600] filter invert-0 dark:invert  dark:text-black `}
                    style={{
                      background: 'url("/play.svg") no-repeat left center',
                    }}
                  >
                    Contracts Without the Hassle
                  </li>
                  <li className="text-[#64748B] text-justify md:mr-10">
                    Draft, review, and automate contracts in just a few clicks,
                    making legal agreements seamless and error-free.
                  </li>
                </div>
                <div>
                  <li
                    className={`${
                      isDark
                        ? styles.liStyleWithCustomIconDark
                        : styles.liStyleWithCustomIcon
                    }
                  font-[600] filter invert-0 dark:invert  dark:text-black `}
                    style={{
                      background: 'url("/play.svg") no-repeat left center',
                    }}
                  >
                    Stay Compliant, Stay Confident
                  </li>
                  <li className="text-[#64748B] text-justify md:mr-10">
                    Envoy automates corporate filings and legal document
                    management, keeping your business compliant with minimal
                    effort.{" "}
                  </li>
                </div>
              </ul>
              <div className="text-center flex justify-center mt-6 md:mb-6 mb-0">
                {/* <button
                className={`${styles.buttonLinearGradient} p-2 rounded-[100px] text-white`}
              >
                Learn More
              </button> */}
                <Link
                  href={"/"}
                  className="relative  h-[28px] font-inter font-semibold text-[15px] leading-[28px] flex items-center justify-center
             bg-gradient-to-r from-[#236CD6] to-[#A441D5] bg-clip-text text-transparent after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-[#236CD6] after:bottom-[5px]"
                >
                  Learn More
                </Link>
                <Link href={"/"} className="cursor-pointer mt-1.5">
                  <img src="/arrow.svg" alt="arrow.svg" />
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* main for Community */}

      <main className="mt-16 to-20% text-center  border-[1px] rounded-xl backdrop-blur-sm bg-gradient-to-br from-[#F2F6F9] to-[#FFFFFF] dark:text-white dark:border-[#1F293A] dark:from-[#1A2636] dark:to-[#030819] w-full flex md:flex-row flex-col justify-between relative">
        <div className="absolute top-0 flex items-center flex-col  w-full">
          <button className="dark:border-[#313a49] p-2 border-[1px] rounded-full mt-6">
            {/* <ElectricBoltIcon /> */}

            <img src="/lightning.svg" />
          </button>

          <h2
            className={`md:text-3xl text-2xl mt-4 font-[600] text-transparent bg-clip-text bg-gradient-to-tl from-[hsl(210,40%,96.1%)]
via-[hsl(222.2,84%,4.9%)] to-[hsl(222.2,84%,4.9%)] dark:from-[hsl(210,40%,30%)] dark:via-[hsl(0,0%,100%)] dark:to-[hsl(0,0%,93%)]   text-center`}
          >
            Grow Together, Succeed Together
          </h2>
          <p className="text-[#64748B] md:w-[60%] w-[85%] md:text-[16px] text-[14px] mt-4">
            Our community provides an ecosystem of support, allowing members to
            share resources, insights, and opportunities for mutual growth.
          </p>
        </div>
        <div className="md:w-[50%] md:mt-40 mt-52">
          <div className="md:h-[430px] h-[380px] pointer-events-none ">
            {/* <Spline scene="https://prod.spline.design/gRDHtaEc7THVblwN/scene.splinecode" /> */}
            <Spline scene="https://prod.spline.design/3KxOj6GXHyRhPWrg/scene.splinecode" />
          </div>
        </div>

        <div className="md:w-[50%] md:mt-20 mt-0">
          <div className="md:p-0 p-4  md:mt-[130px] mb-3">
            <div className="">
              <ul className="text-start">
                <div>
                  <li
                    className={`${
                      isDark
                        ? styles.liStyleWithCustomIconDark
                        : styles.liStyleWithCustomIcon
                    }
                  font-[600] filter invert-0 dark:invert  dark:text-black `}
                    style={{
                      background: 'url("/liIcons.svg") no-repeat left center',
                    }}
                  >
                    Global Connections, Local Impact
                  </li>
                  <li className="text-[#64748B] text-justify md:mr-10">
                    Tap into a worldwide community of entrepreneurs and
                    professionals, helping you build strong networks and
                    partnerships that transcend borders.
                  </li>
                </div>
                <div>
                  <li
                    className={`${
                      isDark
                        ? styles.liStyleWithCustomIconDark
                        : styles.liStyleWithCustomIcon
                    }
                  font-[600] filter invert-0 dark:invert  dark:text-black `}
                    style={{
                      background: 'url("/play.svg") no-repeat left center',
                    }}
                  >
                    Collaborate and Innovate{" "}
                  </li>
                  <li className="text-[#64748B] text-justify md:mr-10">
                    Work with peers and experts from around the globe to share
                    ideas, develop solutions, and drive innovation in your
                    business.
                  </li>
                </div>
                <div>
                  <li
                    className={`${
                      isDark
                        ? styles.liStyleWithCustomIconDark
                        : styles.liStyleWithCustomIcon
                    }
                  font-[600] filter invert-0 dark:invert  dark:text-black `}
                    style={{
                      background: 'url("/play.svg") no-repeat left center',
                    }}
                  >
                    Mentorship That Matters{" "}
                  </li>
                  <li className="text-[#64748B] text-justify md:mr-10">
                    Gain insights and guidance from experienced mentors within
                    the Envoy community, giving you the support you need to grow
                    and succeed.{" "}
                  </li>
                </div>
              </ul>
              <div className="text-center flex justify-center mt-6 md:mb-6 mb-0">
                {/* <button
                className={`${styles.buttonLinearGradient} p-2 rounded-[100px] text-white`}
              >
                Learn More
              </button> */}
                <Link
                  href={"/"}
                  className="relative  h-[28px] font-inter font-semibold text-[15px] leading-[28px] flex items-center justify-center
             bg-gradient-to-r from-[#236CD6] to-[#A441D5] bg-clip-text text-transparent after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-[#236CD6] after:bottom-[5px]"
                >
                  Learn More
                </Link>
                <Link href={"/"} className="cursor-pointer mt-1.5">
                  <img src="/arrow.svg" alt="arrow.svg" />
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* main for Community */}

      <main className="mt-16 pb-4 to-20% border-[1px] min-h-[510px] rounded-xl backdrop-blur-sm bg-gradient-to-br from-[#F2F6F9] to-[#FFFFFF] dark:text-white dark:border-[#1F293A] dark:from-[#1A2636] dark:to-[#030819]">
        <div className="text-center">
          <button className="p-2 border-[1px] rounded-full mt-6">
            {/* <ElectricBoltIcon /> */}
            <img src="/lightningwhereweareat.svg" />
          </button>

          <h2>
            <span className={` text-3xl mt-4 font-[600]`}>Where w</span>
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-tl from-[hsl(210,40%,96.1%)] to-[hsl(222.2,84%,4.9%)] dark:from-[hsl(0,0%,100%)] dark:to-[hsl(0,0%,40%)] text-3xl mt-4 font-[600]`}
            >
              e’re at
            </span>
          </h2>

          <p className="text-[#64748B] mt-2 mb-2">
            Our progress + what’s on the way.
          </p>
        </div>

        <div className="flex justify-center mt-10">
          <div>
            <ol class="relative border-s dark:border-[#1F283B] border-dashed h-[100px] dark:border-gray-400">
              <li class=" ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-400 dark:bg-gray-400"></div>
                <time class=" text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Jul 24, 2024{" "}
                </time>
                <p class="mb-4 text-base font-normal text-black dark:text-white">
                  Docker Image Checker{" "}
                </p>
              </li>
            </ol>
            <ol class="relative border-s border-black dark:border-[#1F283B] -top-3">
              <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-black rounded-full -start-1.5  dark:bg-[#1F283B] "></div>
                <time class="block mt-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Jul 21, 2024{" "}
                </time>
                <p class="mb-4 text-base font-normal text-black dark:text-white">
                  Status Page rework{" "}
                </p>
              </li>

              <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5  border-white dark:border-gray-400 dark:bg-[#1F283B]"></div>
                <time class=" text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Jul 14, 2024{" "}
                </time>
                <p class="mb-4 text-base font-normal text-black dark:text-white">
                  Clone Monitor{" "}
                </p>
              </li>
              <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5  border-white dark:border-gray-400 dark:bg-[#1F283B]"></div>
                <time class=" text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Jul 14, 2024{" "}
                </time>
                <p class="mb-4 text-base font-normal text-black dark:text-white">
                  Status Report location change{" "}
                </p>
              </li>
            </ol>
          </div>
        </div>
        <div className="m-auto flex items-center justify-center w-full mb-4">
          {/* <button
            className={`${styles.buttonLinearGradient} px-4 py-2 rounded-[100px] text-white`}
          >
            All updates
          </button> */}

          <Link
            href={"/"}
            className="relative  h-[28px] font-inter font-semibold text-[15px] leading-[28px] flex items-center justify-center
             bg-gradient-to-r from-[#236CD6] to-[#A441D5] bg-clip-text text-transparent after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-[#236CD6] after:bottom-[5px]"
          >
            All Updates
          </Link>

          <Link href={"/"} className="cursor-pointer mt-1.5">
            <img src="/arrow.svg" alt="arrow.svg" />
          </Link>
        </div>
      </main>
    </>
  );
};

export default HomePage;
