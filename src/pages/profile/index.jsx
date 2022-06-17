import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/container/Container";
import { logout } from "../../store/actions/userAction";

const Profile = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.user);
  const logoutSubmit = () => {
    dispatch(logout());
  };
  return (
    <>
      <div className="signUpBanner"></div>
      <Container className="testPage">
        <span className="bgWhite mt-280">Profile</span>
      </Container>
      {loading ? (
        <h1>Laoding</h1>
      ) : (
        <Container>
          <button onClick={logoutSubmit}>LOGOUT</button>
          <div>
            <img width={180} height={180} src={user.avatar} alt="" />
            <div style={{ display: "flex" }}>
              <h2>{user.first_name}</h2>
              <h2>{user.last_name}</h2>
            </div>

            <h3>{user.mobile}</h3>
            <h3>{user.blood}</h3>
            <h3>{user.country}</h3>
            <h3>{user.department}</h3>
            <h3>{user.batch}</h3>
            <h3>{user._id}</h3>
          </div>
        </Container>
      )}
    </>
  );
};

export default Profile;
