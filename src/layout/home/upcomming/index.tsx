import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Container from "../../../components/container/Container";
import Subtitle from "../../../components/subtitle";
import Title from "../../../components/title";
import "./__upcomming.scss";

const Upcomming = () => {
  const data = [
    {
      month: "MAY",
      date: "31",
      title: "Rise Up for Asian Americans and Pacific Islanders exhibit",
      fullDate: "Monday, May 31, 2022 - Friday, June 10, 2022",
      media: "Zoom",
      organization: "Organizer | CUET Carrier Club",
    },
    {
      month: "JUNE",
      date: "11",
      title: "2020 Commencement Ceremony",
      fullDate: "Monday, May 31, 2022 - Friday, June 10, 2022",
      media: "Zoom",
      organization: "Organizer | CUET Carrier Club",
    },
    {
      month: "JUNE",
      date: "12",
      title: "2022 Commencement Ceremony(external link)",
      fullDate: "Monday, May 31, 2022 - Friday, June 10, 2022",
      media: "Zoom",
      organization: "Organizer | CUET Carrier Club",
    },
  ];
  return (
    <div className="upcomming">
      <Container>
        <Title>Upcoming Events</Title>
        <Subtitle>
          Peek at some alumni events happening just around the corner.
        </Subtitle>

        <div className="upcomming__cards">
          {data.map((item, index) => (
            <div key={index} className="upcomming__cards__item">
              <div className="upcomming__cards__item__month">{item.month}</div>
              <div className="upcomming__cards__item__date">{item.date}</div>
              <div className="upcomming__cards__item__title">
                {item.title}{" "}
                <span>
                  <FaExternalLinkAlt className="upcomming__cards__item__icon" />
                </span>
              </div>
              <div className="upcomming__cards__item__particularDate">
                {item.fullDate}
              </div>
              <div className="upcomming__cards__item__media">{item.media}</div>
              <div className="upcomming__cards__item__organization">
                {item.organization}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Upcomming;
