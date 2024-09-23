"use client";
import React, { ReactNode } from "react";

import "./globals.css";
import Header from "@/components/Navbar/Header";

interface AppProps {
  children: ReactNode;
}

const App = ({ children }: AppProps) => {
  return (
    <div>
      <div className="mt-8"></div>
      <div className=" m-auto max-w-[60rem] px-6">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default App;
