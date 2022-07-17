import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Container from "../../components/container/Container";
import ImagePicker from "../../components/imagePicker";
import Title from "../../components/title";
import { loadUser, updateProfile } from "../../store/actions/userAction";

const UpdateProfile = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  // const { loading } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.user);
  const { isUpdated } = useSelector((state) => state.profile);
  // console.log("YYY:>>", user);

  const [initialImage, setImageSrc] = useState("");
  const [loaderImg, setLoaderImg] = useState(false);

  const [newUser, setUser] = useState({
    // firstName: "",
    // lastName: "",
    student_id: user?.student_id,
    // password: "",
    department: user?.department,
    batch: user?.batch,
    graduation_year: user?.graduation_year,
    // number: "",
    country: user?.country,
    blood: user?.blood,
  });

  // console.log(newUser);

  // console.log(user);

  const registerDataChange = (e) => {
    setUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const imageUpload = async () => {
    setLoaderImg(true);
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
    setLoaderImg(false);
    return resImage.url;
  };

  const {
    // firstName,
    // lastName,
    student_id,
    // password,
    department,
    batch,
    graduation_year,
    // number,
    country,
    blood,
  } = newUser;

  const handleClick = async (e) => {
    e.preventDefault();

    const avatar = await imageUpload();

    const myForm = {
      // firstName,
      // lastName,
      student_id,
      // password,
      department,
      batch,
      graduation_year,
      // number,
      country,
      blood,
      avatar,
    };
    dispatch(updateProfile(myForm));
    dispatch(loadUser());

    if (isUpdated.success) {
      navigate("/profile");
    }
  };

  return (
    <>
      <div className="signInBanner"></div>
      <Container className="signUp">
        <form onSubmit={handleClick} className="signUp__form">
          <Title className="signUp__form__title">Update Profile</Title>
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
          <div
            style={{
              display: "flex",
              width: "100%",
              maxWidth: "800px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                maxWidth: "800px",
              }}
            >
              <label>First Name</label>
              <input
                style={{ marginRight: "8px" }}
                className="signUp__input"
                placeholder={user?.firstName}
                name="first_name"
                value={user?.firstName}
                onChange={registerDataChange}
                disabled
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                maxWidth: "800px",
              }}
            >
              <label>Last Name</label>
              <input
                style={{ marginLeft: "8px" }}
                className="signUp__input"
                placeholder={user?.lastName}
                name="last_name"
                value={user?.lastName}
                onChange={registerDataChange}
                disabled
              />
            </div>
          </div>
          {/* <input className="signUp__input" type="email" placeholder="Email" /> */}
          <div className="inputBox">
            <label>Student ID</label>
            <input
              className="signUp__input"
              type="number"
              placeholder={student_id}
              name="student_id"
              value={student_id}
              onChange={registerDataChange}
            />
          </div>

          {/* <input
            className="signUp__input"
            type="emial"
            placeholder="Email"
            name="email"
            value={email}
            onChange={registerDataChange}
          /> */}
          {/* <input
            className="signUp__input"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={registerDataChange}
          /> */}
          <div className="inputBox">
            <label>Blood Group</label>
            <input
              className="signUp__input"
              type="text"
              placeholder={blood}
              name="blood"
              value={blood}
              onChange={registerDataChange}
            />
          </div>
          <div className="inputBox">
            <label>Department</label>
            <input
              className="signUp__input"
              type="text"
              placeholder={department}
              name="department"
              value={department}
              onChange={registerDataChange}
            />
          </div>
          <div className="inputBox">
            <label>Batch</label>
            <input
              className="signUp__input"
              type="text"
              placeholder={batch}
              name="batch"
              value={batch}
              onChange={registerDataChange}
            />
          </div>
          <div className="inputBox">
            <label>Graduation Year</label>
            <input
              className="signUp__input"
              type="text"
              placeholder={graduation_year}
              name="graduation_year"
              value={graduation_year}
              onChange={registerDataChange}
            />
          </div>
          <div className="inputBox">
            <label>Mobile Number</label>
            <input
              className="signUp__input"
              type="text"
              placeholder="Mobile No."
              name="number"
              value={user?.number}
              onChange={registerDataChange}
              disabled
            />
          </div>
          <div className="inputBox">
            <label>Present Country</label>
            <input
              className="signUp__input"
              type="text"
              placeholder={country}
              name="country"
              value={country}
              onChange={registerDataChange}
            />
          </div>
          <input
            style={{
              background: "#05be71",
              border: "1px solid #05be71",
              cursor: "pointer",
              color: "#fff",
            }}
            // value={loading || loaderImg ? "Loading..." : "Submit"}
            value={loaderImg ? "Loading..." : "Update"}
            className="signUp__input"
            type="submit"
          />
        </form>
      </Container>
    </>
  );
};

export default UpdateProfile;
