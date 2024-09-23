import React from "react";
import HeaderMenu from "./Menu/HeaderMenu";

const Header = () => {
  return (
    <div className="p-3 bg-slate-300 flex justify-between">
      <HeaderMenu />
    </div>
  );
};

export default Header;
