import React from "react";
import NavAndSidebar from "./components/navbar/NavAndSidebar";
import { Route, Routes, useLocation } from "react-router-dom";
import "./_app.scss";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import Footer from "./components/footer";
import Contact from "./pages/contact";
import Stories from "./pages/stories";
import About from "./pages/about";
import Community from "./pages/community";
import Events from "./pages/events";
import Carrier from "./pages/carrier";
import ScrollToTop from "./components/scrollToTop";
import ScrollToTopBtn from "./components/scrollToTopBtn";
import Profile from "./pages/profile";
import Admin from "./pages-admin/dashboard";
import AllRequestsAdmin from "./pages-admin/allRequests";
import Activation from "./pages/activation";
import axios from "axios";
import ProtectedRoute from "./components/private/ProtectedRoute";
import PublicRoute from "./components/private/PublicRoute";
import AdminRoute from "./components/private/AdminRoute";

import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.TOP_RIGHT,
  transition: transitions.SCALE,
  // containerStyle: {
  //   zIndex: 100,
  //   paddingTop: "2rem",
  // },
};

const App = () => {
  // console.log("ABC:>>", user);

  const { pathname } = useLocation();

  React.useEffect(() => {
    axios("/api/test").then((response) => {
      if (response.status === 200) {
        console.log("AXIOS CALL:", response.data);
        console.log("Done");
      } else {
        console.log("There has some problem.");
      }
    });
  }, []);
  return (
    <div>
      <AlertProvider template={AlertTemplate} {...options}>
        <>
          <ScrollToTop />
          <ScrollToTopBtn />
          {pathname !== "/admin/dashboard" &&
            pathname !== "/admin/all-requests" && <NavAndSidebar />}
          <Routes>
            <Route index element={<Home />} />
            {/* <Route path="sign-up" element={<SignUp />} /> */}
            <Route
              path="sign-up"
              element={
                <PublicRoute>
                  <SignUp />
                </PublicRoute>
              }
            />
            <Route path="users/activate/:token" element={<Activation />} />
            {/* <Route path="sign-in" element={<SignIn />} /> */}
            <Route
              path="sign-in"
              element={
                <PublicRoute>
                  <SignIn />
                </PublicRoute>
              }
            />
            <Route path="contact" element={<Contact />} />
            <Route path="stories" element={<Stories />} />
            <Route path="about" element={<About />} />
            <Route path="community" element={<Community />} />
            <Route path="events" element={<Events />} />
            <Route path="carrier" element={<Carrier />} />
            <Route
              path="profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            {/* <Route path="admin/dashboard" element={<Admin />} /> */}
            <Route
              path="admin/dashboard"
              element={
                <AdminRoute>
                  <Admin />
                </AdminRoute>
              }
            />
            {/* <Route path="admin/all-requests" element={<AllRequestsAdmin />} /> */}
            <Route
              path="admin/all-requests"
              element={
                <AdminRoute>
                  <AllRequestsAdmin />
                </AdminRoute>
              }
            />
          </Routes>
          {pathname !== "/admin/dashboard" &&
            pathname !== "/admin/all-requests" && <Footer />}
        </>
      </AlertProvider>
    </div>
  );
};

export default App;
