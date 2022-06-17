import React from "react";
import "./__bigButton.scss";

const BigButton = ({ link, name, center = false }: any) => {
  return (
    <div style={{ justifyContent: center ? "center" : "" }} className="big_btn">
      <button>{name}</button>
    </div>
  );
};

export default BigButton;
