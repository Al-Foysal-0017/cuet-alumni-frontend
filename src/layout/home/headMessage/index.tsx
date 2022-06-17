import React from "react";
import imgPresident from "../../../assets/img/cuetVC.jpeg";
import "./__headMessage.scss";

const HeadMessage = () => {
  return (
    <div className="headMessage">
      {/* <div> */}
      <div
      // style={{ paddingLeft: "4rem" }}
      >
        <img src={imgPresident} alt="" className="headMessage__img" />
      </div>
      {/* </div> */}
      <div className="headMessage__msg">
        <div className="headMessage__msg__heading">
          {/* Be “Proud to be a BUET Graduate!" */}
          Message from the President
        </div>
        <div className="headMessage__msg__title">
          Message from the President
        </div>
        <div className="headMessage__msg__desc">
          I welcome you to the new website of BUET Alumni. If you are a graduate
          of BUET who is yet to become a member of this organization, I
          earnestly invite you to become a member – it is easy and inexpensive.
          Membership enables you to enjoy being a part of the BUET Alumni
          community and related fellowship in various forms. Take advantage of
          the opportunity that this organization offers to all Alumni of BUET,
          our dear alma mater, to give our loving attention and support that she
          deserves for achieving greater glory and world class status. Be “Proud
          to be a BUET Graduate!"{" "}
        </div>
        <div className="headMessage__msg__cuetVC">
          - Prof. Dr. Mohammad Rafiqul Alam
        </div>
      </div>
    </div>
  );
};

export default HeadMessage;
