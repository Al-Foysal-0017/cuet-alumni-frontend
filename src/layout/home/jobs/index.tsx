import React from "react";
import BigButton from "../../../components/bigButton";
import Container from "../../../components/container/Container";
import Subtitle from "../../../components/subtitle";
import Title from "../../../components/title";
import "./__recentJobHome.scss";

const RecentJobs = () => {
  const data = [
    {
      img: "https://codeboxr.net/themedemo/unialumni/html/assets/img/job/compnay-logo-1.png",
      title: "Backend Developer (Java) (m/f) wanted for leading",
      details:
        "Claritas est etiam procsus dymicus, qui sequitur mutationem Claritas est etiam procsus est etiam procsus dymicus.[...]",
    },
    {
      img: "https://codeboxr.net/themedemo/unialumni/html/assets/img/job/compnay-logo-4.png",
      title: "Five Years Experience Data Center Specialist Needed",
      details:
        "Claritas est etiam procsus dymicus, qui sequitur mutationem Claritas est etiam procsus est etiam procsus dymicus.[...]",
    },
    {
      img: "https://codeboxr.net/themedemo/unialumni/html/assets/img/job/compnay-logo-1.png",
      title: "API Architect and Lead - Python",
      details:
        "Claritas est etiam procsus dymicus, qui sequitur mutationem Claritas est etiam procsus est etiam procsus dymicus.[...]",
    },
  ];
  return (
    <div className="recentJobHome">
      <Container>
        <Title className="recentJobHome__title">Recent Jobs</Title>
        <Subtitle>Explore new & recent jobs to build your carrier.</Subtitle>
        <div className="recentJobHome__cards">
          {data.map((item, index) => (
            <div key={index} className="recentJobHome__cards__item">
              <div>
                <img
                  // style={{ objectFit: "cover" }}
                  width={124}
                  height={124}
                  src={item.img}
                  alt=""
                />
              </div>
              <div className="recentJobHome__cards__itemtxtContainer">
                <div className="recentJobHome__cards__item__title">
                  {item.title}
                  {/* <span>
                  <FaExternalLinkAlt className="recentJobHome__cards__item__icon" />
                </span> */}
                </div>
                <div className="recentJobHome__cards__item__details">
                  {item.details}
                </div>
                <button className="recentJobHome__cards__item__btn">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <BigButton link="/" name="Explore More Jobs" center />
      </Container>
    </div>
  );
};

export default RecentJobs;
