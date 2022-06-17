import React from "react";
// import storiesImg1 from "../../../assets/img/TasniaApu.JPG";
import BigButton from "../../../components/bigButton";
import Subtitle from "../../../components/subtitle";
import Title from "../../../components/title";
import "./__storiesHome.scss";

const StoriesHome = () => {
  const data = [
    {
      img: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "CUET ETE Day Celebration",
      from: "CUET ETE Family",
      desc: "CUET ETE Day had succssively done on 22 January 2022. The main gust was Md. Sajjadul Rahaman(CEO of Grameenphone).",
    },
    {
      img: "https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "CUET Ex-Student Joined At Google.",
      from: "CUET Career Club",
      desc: "Md.Hasanul Haque, CUET CSE-08, Joined as a software Engr at Google on 08 January 2022. He was working as Software Engr at Samsung Company for 5 years. Now he is moved to join as a software engr at Goggle.",
    },
    {
      img: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Mental Health Awareness",
      from: "CUET Health Society.",
      desc: "CUET health society set a program for mental health awareness for students. Many students are so depreased in his/her Enginnering life. So, for this CUET Health Society arranged a program for health awareness.",
    },
  ];
  return (
    <div className="storiesHome">
      <Title>Stories</Title>
      <Subtitle>
        Explore news, views and perspectives from CUET and your alumni
        community.
      </Subtitle>
      <div className="storiesHome__cards">
        {data.map((item, index) => (
          <div key={index} className="storiesHome__cards__item">
            <img
              className="storiesHome__cards__item__img"
              src={item.img}
              alt=""
            />
            <div className="storiesHome__cards__item__txtContainer">
              <div className="storiesHome__cards__item__title">
                {item.title}
              </div>
              <div className="storiesHome__cards__item__subtitle">
                <span className="styleTxt">from</span> {item.from}
              </div>
              <div className="storiesHome__cards__item__desc">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <BigButton link="/" name="Explore More Stories" center />
    </div>
  );
};

export default StoriesHome;
