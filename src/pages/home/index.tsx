import React from "react";
import ImageSlider from "../../components/carousel/ImageSlider";
import { SliderData } from "../../components/carousel/SliderData";
import Container from "../../components/container/Container";
import GallaryHome from "../../layout/home/gallary";
// import HeadMessage from "../../layout/home/headMessage";
// import InfoSection from "../../layout/home/InfoSection";
// import {
//   homeObjOne,
//   homeObjThree,
//   homeObjTwo,
// } from "../../layout/home/InfoSection/Data";
// import Services from "../../layout/home/Services";
import StoriesHome from "../../layout/home/stories";
import Engage from "../../layout/home/engage";
import "./__home.scss";
import Mission from "../../layout/home/mission";
import Upcomming from "../../layout/home/upcomming";
import Performance from "../../layout/home/performance";
import RecentJobs from "../../layout/home/jobs";

const Home = () => {
  return (
    <>
      <Container>
        <div className="mt1rem" />
        <ImageSlider slides={SliderData} />
        <div style={{ marginTop: "7rem" }} />
        <StoriesHome />
      </Container>
      <div style={{ marginTop: "7rem" }} />
      <Upcomming />
      <Performance />
      <Container>
        <div style={{ marginTop: "7rem" }} />
        <Mission />
      </Container>
      <Container>
        <div style={{ marginTop: "7rem" }} />
        <Engage />
        <div style={{ marginTop: "7rem" }} />
      </Container>
      <GallaryHome />
      <RecentJobs />
    </>
  );
};

export default Home;
