"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import BackgroundPattern from "@/components/BackgroundPattern/BackgroundPattern";
import localFont from "next/font/local";

import "./globals.css";
import { useIsDarkStore } from "@/store";

const CalSansFont = localFont({
  src: [
    {
      path: "../assests/fonts/cal-sans/webfonts/CalSans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assests/fonts/Inter/web/Inter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assests/fonts/Inter/web/Inter-Light.woff2",
      weight: "300",
      style: "light",
    },
  ],
});
const App = ({ children }) => {
  const { isDark, updateIsDark } = useIsDarkStore();

  useEffect(() => {
    window?.localStorage?.setItem("isDark", isDark);
  }, [isDark]);
  return (
    <div className={isDark ? "dark" : ""}>
      <div className="mt-8"></div>
      <BackgroundPattern isDark={isDark} />
      <div className=" m-auto max-w-[60rem] px-6">
        <Header isDark={isDark} updateIsDark={updateIsDark} />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default App;
