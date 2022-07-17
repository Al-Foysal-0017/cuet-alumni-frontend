import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/container/Container";
import { clearMessage, logout } from "../../store/actions/userAction";
import { useAlert } from "react-alert";
import "./__profile.scss";
import { Link } from "react-router-dom";
// import axios from "axios";

const Profile = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { user, loading, message } = useSelector((state) => state.user);
  const logoutSubmit = async () => {
    // const data = await axios.get(`${process.env.REACT_APP_API_URL}/logout`);
    // console.log(data);
    dispatch(logout());
  };
  useEffect(() => {
    if (message) {
      alert.success(message);
      dispatch(clearMessage());
    }
    // dispatch(getProduct());
  }, [dispatch, message, alert]);
  return (
    <>
      <div className="signInBanner"></div>
      <Container className="testPage">
        <span className="bgWhite mt-280">Profile</span>
      </Container>
      {loading ? (
        <h1>Laoding</h1>
      ) : (
        <Container>
          <section className="profile">
            {/* LEFT */}
            <div className="profile__left">
              <img style={{ objectFit: "cover" }} src={user.avatar} alt="" />
              <button disabled={loading ? true : false} onClick={logoutSubmit}>
                {loading ? "Loading..." : "LOGOUT"}
              </button>
              <Link className="profile__left__link" to="/profile/update">
                Update Profile
              </Link>
            </div>
            {/* Right */}
            <div className="profile__right">
              <div className="profile__right__top">
                <div className="profile__right__top__name">
                  <span>{user.firstName}</span>
                  <span style={{ paddingLeft: "1rem" }}>{user.lastName}</span>
                </div>
                <div className="profile__right__top__id">
                  ID: {user.student_id}
                </div>
              </div>
            </div>
          </section>
          <section className="profileDetails">
            <hr />
            <div className="profileDetails__contr">
              <div className="profileDetails__title">Department</div>
              <div className="profileDetails__value">{user.department}</div>
            </div>
            <hr />
            <div className="profileDetails__contr">
              <div className="profileDetails__title">Batch</div>
              <div className="profileDetails__value">{user.batch}</div>
            </div>
            <hr />
            <div className="profileDetails__contr">
              <div className="profileDetails__title">Graduation Year</div>
              <div className="profileDetails__value">
                {user.graduation_year}
              </div>
            </div>
            <hr />
            <div className="profileDetails__contr">
              <div className="profileDetails__title">Mobile</div>
              <div className="profileDetails__value">{user.number}</div>
            </div>
            <hr />
            {/* <div className="profileDetails__contr">
              <div className="profileDetails__title">Email</div>
              <div className="profileDetails__value">{user.email}</div>
            </div> */}
            <hr />
            <div className="profileDetails__contr">
              <div className="profileDetails__title">Blood Group</div>
              <div className="profileDetails__value">{user.blood}</div>
            </div>
            <hr />
            <div className="profileDetails__contr">
              <div className="profileDetails__title">Current Country</div>
              <div className="profileDetails__value">{user.country}</div>
            </div>
            <hr />
            <div className="profileDetails__contr">
              <div className="profileDetails__title">Registration ID</div>
              <div className="profileDetails__value">{user._id}</div>
            </div>
            <hr />
          </section>
        </Container>
      )}
    </>
  );
};

export default Profile;
