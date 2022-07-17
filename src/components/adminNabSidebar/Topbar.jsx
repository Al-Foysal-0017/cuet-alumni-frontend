import React from "react";
import "./style/Topbar.css";
import { Turn as Hamburger } from "hamburger-react";
import Container from "../container/Container";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/userAction";

const Topbar = ({ sideNavOpen, setSideNavOpen }) => {
  const dispatch = useDispatch();
  const logoutSubmit = () => {
    dispatch(logout());
  };
  return (
    <>
      <div className="HeaderContainer">
        <Container>
          <div className="HeaderWrapper">
            {/* Search Box*/}
            {/* <div className="adminTopHeader">Admin Panel</div> */}
            <Link to="/admin/dashboard" className="adminTopbarLogo">
              <span style={{ color: "#05be71" }}>CUET</span>{" "}
              <span style={{ color: "#bababa", padding: "0 8px" }}>|</span>{" "}
              <span className="">ALUMNI</span>
            </Link>

            <div className="HeaderRight">
              <span className="logoutBtn" onClick={logoutSubmit}>
                Logout
              </span>
              {/* <div>
              <img
                style={{
                  height: "35px",
                  width: "35px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
                className="shadow-md  rounded-full "
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
            </div>
            <div className="" style={{ margin: "0 40px 0 10px" }}>
              Sakata Gintoki
            </div> */}
              <div style={{ marginLeft: "1rem" }} className="HeaderHamburger">
                <Hamburger
                  toggled={sideNavOpen}
                  toggle={setSideNavOpen}
                  color="#000"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Topbar;
