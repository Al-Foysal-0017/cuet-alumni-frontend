import React, { useEffect } from "react";
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
// import Activation from "./pages/activation";
// import axios from "axios";
import ProtectedRoute from "./components/private/ProtectedRoute";
import PublicRoute from "./components/private/PublicRoute";
import AdminRoute from "./components/private/AdminRoute";

import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { useDispatch } from "react-redux";
import { getAllEvents } from "./store/actions/eventAction";
import AllEventsAdmin from "./pages-admin/allEvents";
import ApprovalMsg from "./components/approvalMsg";
import { loadUser } from "./store/actions/userAction";
import OtpVerify from "./pages/signup/OtpVerify";
// import SignUpAllData from "./pages/signup/SignUpAllData";
import OtpPassword from "./pages/signup/SetOtpPassword";
import UpdateProfile from "./pages/profileUpdate";
import SetProfile from "./pages/signup/SetProfile";
import ToSetProfileRoute from "./components/private/ToSetProfile";
import UserDetails from "./pages-admin/userDetails";

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
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  // const { user } = useSelector((state) => state.user);
  // console.log(user._id);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  React.useEffect(() => {
    // axios(
    //   `https://cuet-alumni-backend.vercel.app/api/role/user/${user._id}`
    // ).then((response) => {
    //   if (response.status === 200) {
    //     console.log("AXIOS CALL:", response.data);
    //   } else {
    //     console.log("There has some problem.");
    //   }
    // });
    // dispatch(getRoleOfUser(user._id));

    dispatch(getAllEvents());
  }, [dispatch]);
  return (
    <div>
      <AlertProvider template={AlertTemplate} {...options}>
        <>
          {/* {user.role===""} */}
          {pathname !== "/set/profile" && <ApprovalMsg />}
          <ScrollToTop />
          <ScrollToTopBtn />
          {pathname !== "/admin/dashboard" &&
            pathname !== "/admin/all-events" &&
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
            {/* <Route path="users/activate/:token" element={<Activation />} /> */}
            {/* <Route path="sign-in" element={<SignIn />} /> */}
            <Route
              path="sign-in"
              element={
                <PublicRoute>
                  <SignIn />
                </PublicRoute>
              }
            />
            <Route path="signup/set/otp/password" element={<OtpPassword />} />
            {/* <Route path="signup/otp/verify" element={<OtpVerify />} /> */}
            <Route
              path="signup/otp/verify"
              element={
                <ToSetProfileRoute>
                  <OtpVerify />
                </ToSetProfileRoute>
              }
            />
            {/* <Route path="signup/update" element={<SignUpAllData />} /> */}
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
            <Route
              path="profile/update"
              element={
                <ProtectedRoute>
                  <UpdateProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="set/profile"
              element={
                // <ProtectedRoute>
                <SetProfile />
                // </ProtectedRoute>
              }
            />
            <Route
              path="admin/dashboard"
              element={
                <AdminRoute>
                  <Admin />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/user/details/:id"
              element={
                <AdminRoute>
                  <UserDetails />
                </AdminRoute>
              }
            />
            {/* /admin/user/details/${row._id} */}
            {/* <Route path="admin/all-requests" element={<AllRequestsAdmin />} /> */}
            <Route
              path="admin/all-requests"
              element={
                <AdminRoute>
                  <AllRequestsAdmin />
                </AdminRoute>
              }
            />
            <Route
              path="admin/all-events"
              element={
                <AdminRoute>
                  <AllEventsAdmin />
                </AdminRoute>
              }
            />
          </Routes>
          {pathname !== "/admin/dashboard" &&
            pathname !== "/admin/all-events" &&
            pathname !== "/admin/all-requests" && <Footer />}
        </>
      </AlertProvider>
    </div>
  );
};

export default App;
