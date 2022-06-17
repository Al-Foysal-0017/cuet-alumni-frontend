import React, { useEffect, useState } from "react";
import Container from "../../components/container/Container";
// import ImagePicker from "../../components/imagePicker";
import Title from "../../components/title";
import "./__signUp.scss";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login } from "../../store/actions/userAction";
import { useAlert } from "react-alert";

const SignUp = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.user);
  console.log(error?.errors);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // console.log(user);

  const loginDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { email, password } = user;

  const handleClick = async (e) => {
    e.preventDefault();

    const myForm = {
      email,
      password,
    };
    dispatch(login(myForm));
  };

  useEffect(() => {
    if (error?.errors) {
      alert.error(error?.errors);
      dispatch(clearErrors());
    }
    // dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <>
      <div className="signUpBanner"></div>
      <Container className="signUp">
        <form onSubmit={handleClick} className="signUp__form">
          <Title className="signUp__form__title">Sign In</Title>
          {/* <input className="signUp__input" type="email" placeholder="Email" /> */}
          <input
            className="signUp__input"
            type="emial"
            placeholder="Email"
            name="email"
            value={email}
            onChange={loginDataChange}
          />
          <input
            className="signUp__input"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={loginDataChange}
          />
          <input
            style={{
              background: "#05be71",
              border: "1px solid #05be71",
              // marginTop: "3rem",
              color: "#fff",
            }}
            value={loading ? "Loading..." : "Submit"}
            className="signUp__input"
            type="submit"
          />
        </form>
      </Container>
    </>
  );
};

export default SignUp;
