import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Container from "../../components/container/Container";
import ImagePicker from "../../components/imagePicker";
import Title from "../../components/title";
import { register } from "../../store/actions/userAction";
import "./__signUp.scss";

const SignUp = () => {
  const dispatch = useDispatch();
  const [initialImage, setImageSrc] = useState("");

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    department: "",
    batch: "",
    graduation_year: "",
    mobile: "",
    country: "",
    blood: "",
  });

  console.log(user);

  // console.log(user);

  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const imageUpload = async () => {
    const data = new FormData();
    data.append("file", initialImage);
    data.append("upload_preset", "mystore");
    data.append("cloud_name", "dxfttihmd");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dxfttihmd/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const resImage = await res.json();
    // console.log("RETURN URL:>>>", resImage.url);
    return resImage.url;
  };

  const {
    first_name,
    last_name,
    email,
    password,
    department,
    batch,
    graduation_year,
    mobile,
    country,
    blood,
  } = user;

  const handleClick = async (e) => {
    e.preventDefault();

    const avatar = await imageUpload();

    const myForm = {
      first_name,
      last_name,
      email,
      password,
      department,
      batch,
      graduation_year,
      mobile,
      country,
      blood,
      avatar,
    };
    dispatch(register(myForm));
  };

  return (
    <>
      <div className="signUpBanner"></div>
      <Container className="signUp">
        <form onSubmit={handleClick} className="signUp__form">
          <Title className="signUp__form__title">Sign Up</Title>
          <div
            className="signUp__input"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ImagePicker
              initialImage={initialImage}
              setImageSrc={setImageSrc}
            />
            <div
              style={{ fontSize: "12px", paddingTop: "5px" }}
              className="signUp__input__P"
            >
              Choose profile picture
            </div>
          </div>
          <div style={{ display: "flex", width: "100%", maxWidth: "800px" }}>
            <input
              style={{ marginRight: "8px" }}
              className="signUp__input"
              placeholder="First Name"
              name="first_name"
              value={first_name}
              onChange={registerDataChange}
            />
            <input
              style={{ marginLeft: "8px" }}
              className="signUp__input"
              placeholder="Last Name"
              name="last_name"
              value={last_name}
              onChange={registerDataChange}
            />
          </div>
          {/* <input className="signUp__input" type="email" placeholder="Email" /> */}
          <input
            className="signUp__input"
            type="emial"
            placeholder="Email"
            name="email"
            value={email}
            onChange={registerDataChange}
          />
          <input
            className="signUp__input"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={registerDataChange}
          />
          <input
            className="signUp__input"
            type="text"
            placeholder="Blood"
            name="blood"
            value={blood}
            onChange={registerDataChange}
          />
          <input
            className="signUp__input"
            type="text"
            placeholder="Department"
            name="department"
            value={department}
            onChange={registerDataChange}
          />
          <input
            className="signUp__input"
            type="text"
            placeholder="Batch"
            name="batch"
            value={batch}
            onChange={registerDataChange}
          />
          <input
            className="signUp__input"
            type="text"
            placeholder="Graduation Year"
            name="graduation_year"
            value={graduation_year}
            onChange={registerDataChange}
          />
          <input
            className="signUp__input"
            type="text"
            placeholder="Mobile No."
            name="mobile"
            value={mobile}
            onChange={registerDataChange}
          />
          <input
            className="signUp__input"
            type="text"
            placeholder="Current Country"
            name="country"
            value={country}
            onChange={registerDataChange}
          />
          <input
            style={{
              background: "#05be71",
              border: "1px solid #05be71",
              // marginTop: "3rem",
              color: "#fff",
            }}
            value="Submit"
            className="signUp__input"
            type="submit"
          />
        </form>
      </Container>
    </>
  );
};

export default SignUp;
