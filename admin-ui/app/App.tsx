"use client";
import React, { useEffect, useState } from "react";

import "./globals.css";
import { useIsDarkStore } from "@/store";
import Header from "@/components/Navbar/Header";

const App = ({ children }) => {
  const { isDark, updateIsDark } = useIsDarkStore();

  useEffect(() => {
    window?.localStorage?.setItem("isDark", isDark);
  }, [isDark]);
  return (
    <div className={isDark ? "dark" : ""}>
      <div className="mt-8"></div>
      <div className=" m-auto max-w-[60rem] px-6">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default App;
