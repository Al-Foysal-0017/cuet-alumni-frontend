import React from "react";
import ImageLoader from "./imageLoader/imageLoader";
// import cardImg1 from "../../../assets/img/TSC.JPG";

const GallaryCard = ({ image }) => {
  return (
    <div className="gallaryCard">
      <ImageLoader className="gallaryCard_img" src={image} />
      {/* <img className="gallaryCard_img" src={image} alt="" /> */}
    </div>
  );
};

export default GallaryCard;
