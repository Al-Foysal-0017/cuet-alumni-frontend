import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { GoDeviceMobile } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";
import Container from "../container/Container";
import "./__footer.scss";

const Footer = () => {
  return (
    <>
      {/* <div className="footer">Footer</div> */}
      <div className="footerTop">
        <Container className="footerTop__logo">
          CUET <span style={{ color: "#bababa" }}>|</span>{" "}
          <span style={{ fontWeight: "700" }} className="styleTxt">
            alumni
          </span>
        </Container>
      </div>
      <div className="footer">
        <Container className="footerContainer">
          <div className="footer__left">
            <div>
              <div
                style={{ fontSize: "20px", fontWeight: "600" }}
                className="footer__left__item"
              >
                Chittagong University Of Engineering & Technology
              </div>
              <div className="footer__left__item">
                <FiMail style={{ marginRight: "8px" }} /> iict@cuet.ac.bd
              </div>
              <div className="footer__left__item">
                <GoDeviceMobile style={{ marginRight: "8px" }} />
                +880-31-714946
              </div>
              <div className="footer__left__item">
                <IoLocationSharp style={{ marginRight: "8px" }} />
                Pahartoli, Raozan-4349 <br /> Chittagong, Bangladesh
              </div>
            </div>
            <div>
              <div className="footer__left__title">Connect Us</div>
              <div className="footer__left__socialIcons">
                <FaFacebook className="footer__left__socialIcon" />
                <FaLinkedin className="footer__left__socialIcon" />
                <FaTwitter className="footer__left__socialIcon" />
                <FaInstagram className="footer__left__socialIcon" />
                <FaYoutube className="footer__left__socialIcon" />
              </div>
            </div>
          </div>
          <div className="footer__right">
            <div className="footer__right__col">
              <div className="footer__right__col__header">Useful Links</div>
              <div className="footer__right__col__item">Events</div>
              <div className="footer__right__col__item">Carrier</div>
              <div className="footer__right__col__item">Community</div>
              <div className="footer__right__col__item">About</div>
              <div className="footer__right__col__item">News</div>
              <div className="footer__right__col__item">Contact</div>
            </div>
            <div className="footer__right__col">
              <div className="footer__right__col__header">Get Help</div>
              <div className="footer__right__col__item">
                CONTACT ALUMNI DESK
              </div>
              <div className="footer__right__col__item">
                CLAIM YOUR HARVARDKEY
              </div>
              <div className="footer__right__col__item">VIEW ALL CONTACTS</div>
              <div className="footer__right__col__item">
                VIEW ALL HELP PAGES
              </div>
            </div>
            <div className="footer__right__col">
              <div className="footer__right__col__header">About This Site</div>
              <div className="footer__right__col__item">ACCESSIBILITY</div>
              <div className="footer__right__col__item">PRIVACY</div>
              <div className="footer__right__col__item">TERMS OF USE</div>
              <div className="footer__right__col__item">FEEDBACK</div>
            </div>
          </div>
        </Container>
        <Container className="websiteRights">
          CUET ALUMNI @ {new Date().getFullYear()} All rights reserved.
        </Container>
      </div>
    </>
  );
};

export default Footer;
