import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="p-3 bg-slate-300">
      <Link href={"/"}>Home</Link>
    </div>
  );
};

export default Header;
