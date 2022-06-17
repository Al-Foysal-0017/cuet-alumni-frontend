import React from "react";
// import CUETLogo from "../../assets/image/CUETLogo.png";
import "./Loader.css";

const Loader = () => {
  return (
    <>
      <div className="loading">
        <div></div>
        {/* <img className="loading-logo" src={CUETLogo} alt="" /> */}
      </div>
      {/* <div className="loading-logo-container">
        <img className="loading-logo" src={CUETLogo} alt="" />
      </div> */}
    </>
  );
};

export default Loader;
