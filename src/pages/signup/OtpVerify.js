import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, signup } from "../../store/actions/userAction";
import Container from "../../components/container/Container";
import Title from "../../components/title";
import { useAlert } from "react-alert";

const OtpVerify = () => {
  const alert = useAlert();
  const location = useLocation();
  let navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  //   let navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  //   const [error, setError] = useState("");

  const { loading, error } = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("clicked");
    // if (!otp) {
    //   alert.error("Please fill up the OTP.");
    // }
    dispatch(
      signup({
        number: location.state.number,
        password: location.state.password,
        firstName: location.state.firstName,
        lastName: location.state.lastName,
        otp: otp,
      })
    );

    // if (user?.number) {
    //   navigate("/set/profile");
    // }
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [alert, dispatch, error]);
  return (
    <div>
      <div className="signInBanner"></div>
      <Container className="signUpContainer">
        <form className="signIn__form" onSubmit={handleSubmit}>
          {/* <h1>{location.state.number}</h1> */}
          <Title className="signIn__form__title">Sign Up</Title>
          <div
            className="inputBox"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingBottom: "2rem",
            }}
          >
            <label>
              Hey!!{" "}
              <span style={{ fontWeight: "600", color: "#05be71" }}>
                {location.state.firstName} {location.state.lastName}
              </span>
            </label>
            <label>
              We send you a OTP in your mobile number -{" "}
              <span style={{ fontWeight: "600", color: "#05be71" }}>
                {location.state.number}
              </span>
              .
            </label>
            <label>Please Verify Your mobile number.</label>
          </div>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            // separator={<span>-</span>}
            //   isInputNum
            inputStyle={{
              width: "3rem",
              height: "3rem",
              margin: "20px 5px",
              fontSize: "1rem",
              borderRadius: 4,
              border: "2px solid rgba(0,0,0,0.3)",
            }}
          />
          <div>
            <Link to="/sign-up">
              <input
                style={{
                  cursor: "pointer",
                  background: "#05be71",
                  border: "none",
                  color: "#fff",
                  width: "120px",
                }}
                type="submit"
                value="<<   Prev"
              />
            </Link>
            <span style={{ padding: "0 8px" }} />
            <input
              disabled={otp.length !== 6 ? true : false}
              type="submit"
              style={{
                cursor: "pointer",
                background: "#05be71",
                border: "none",
                color: "#fff",
                width: "120px",
              }}
              value={loading ? "Loading..." : "Verify   >>"}
            />
          </div>
        </form>
      </Container>
    </div>
  );
};

export default OtpVerify;
