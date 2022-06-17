import React from "react";
// import cardImg1 from "../../../assets/img/TSC.JPG";

const GallaryCard = ({ image }) => {
  return (
    <div className="gallaryCard">
      <img className="gallaryCard_img" src={image} alt="" />
    </div>
  );
};

export default GallaryCard;
