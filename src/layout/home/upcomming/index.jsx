import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import BigButton from "../../../components/bigButton";
import Container from "../../../components/container/Container";
import Subtitle from "../../../components/subtitle";
import Title from "../../../components/title";
import "./__upcomming.scss";
import "./textLoader.css";

const Upcomming = () => {
  const { events, loading } = useSelector((state) => state.events);
  return (
    <div className="upcomming">
      <Container>
        <Title>Upcoming Events</Title>
        <Subtitle>
          Peek at some alumni events happening just around the corner.
        </Subtitle>

        <div className="upcomming__cards">
          {loading ? (
            <div className="textLoader-home-stories-container">
              <div className="textLoader-home-stories" />
              <div className="textLoader-home-stories" />
              <div className="textLoader-home-stories" />
            </div>
          ) : (
            events?.slice(0, 3).map((item, index) => (
              <div key={index} className="upcomming__cards__item">
                <div className="upcomming__cards__item__month">
                  {item.month}
                </div>
                <div className="upcomming__cards__item__date">{item.date}</div>
                <div className="upcomming__cards__item__title">
                  {item.title}{" "}
                  <span>
                    <FaExternalLinkAlt className="upcomming__cards__item__icon" />
                  </span>
                </div>
                <div className="upcomming__cards__item__particularDate">
                  {item.particular_date}
                </div>
                <div className="upcomming__cards__item__media">
                  {item.media}
                </div>
                <div className="upcomming__cards__item__organization">
                  {item.organized_by}
                </div>
              </div>
            ))
          )}
        </div>
        <BigButton link="/events" name="Explore More Events" center />
      </Container>
    </div>
  );
};

export default Upcomming;
