import React from "react";
import logo  from "./Images/logo.jfif";

const Header = () => {
  return (
      <>
        <div className = "header">
         <img src = {logo} alt = "logo" width="70" height="50" />
          <h1 className="heading"> Keep Notes </h1>
        </div>
      </>
  );
};

export default Header;