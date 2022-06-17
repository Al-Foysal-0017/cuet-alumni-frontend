import React from "react";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import { navRoutes } from "./NavLinks";
import "./Sidebar.css";

interface SidebarType {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ openSidebar, setOpenSidebar }: SidebarType) => {
  return (
    <div
      style={{
        width: "320px",
        background: "#fff",
        height: "100%",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div className="sidebarTop">
            <div className="sidebarTopLeft">
              <Link to="/" className="">
                <span style={{ color: "#05BE71" }}>CUET</span>{" "}
                <span style={{ color: "#bababa" }}>|</span>{" "}
                <span className="">ALUMNI</span>
              </Link>
            </div>
            <div className="sidebarTopRight">
              <Hamburger
                toggle={setOpenSidebar}
                toggled={openSidebar}
                color="#000"
              />
            </div>
          </div>
          <ul className="SidebarItems">
            {navRoutes.map((item) => (
              <li key={item.name} className="SidebarItem">
                <Link className="sidebar-link" to={item.route}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <ul className="SidebarItemsBottom">
          <li className="SidebarItem">
            <Link className="lin" to="/sign-in">
              Sign in
            </Link>
          </li>
          <li className="SidebarItem">
            <span style={{ padding: "0 8px", fontWeight: "bold" }}>/</span>
          </li>

          <li className="SidebarItem">
            <Link className="lin" to="sign-up">
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
