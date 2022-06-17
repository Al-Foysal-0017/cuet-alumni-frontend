import React from "react";
import NavAndSidebar from "../components/navbar/NavAndSidebar";
import { Route, Routes, useLocation } from "react-router-dom";
import "../_app.scss";
import Home from "../pages/home";
import SignUp from "../pages/signup";
import SignIn from "../pages/signin";
import Footer from "../components/footer";
import Contact from "../pages/contact";
import Stories from "../pages/stories";
import About from "../pages/about";
import Community from "../pages/community";
import Events from "../pages/events";
import Carrier from "../pages/carrier";
import ScrollToTop from "../components/scrollToTop";
import ScrollToTopBtn from "../components/scrollToTopBtn";
import Profile from "../pages/profile";
import Admin from "../pages-admin/dashboard";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  const { pathname } = useLocation();
  return (
    <>
      <ScrollToTop />
      <ScrollToTopBtn />
      {/* {pathname !== "/admin" && <NavAndSidebar />} */}
      <Routes>
        {/* <Route index element={<Home />} /> */}
        <PublicRoute element={Home} path="/" />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="contact" element={<Contact />} />
        <Route path="stories" element={<Stories />} />
        <Route path="about" element={<About />} />
        <Route path="community" element={<Community />} />
        <Route path="events" element={<Events />} />
        <Route path="carrier" element={<Carrier />} />
        <Route path="profile" element={<Profile />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
      {/* {pathname !== "/admin" && <Footer />} */}
    </>
  );
};

export default AppRouter;
