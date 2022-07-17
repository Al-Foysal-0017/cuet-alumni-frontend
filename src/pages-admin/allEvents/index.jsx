import React from "react";
import { useSelector } from "react-redux";
// import { FaExternalLinkAlt } from "react-icons/fa";
import Container from "../../components/container/Container";
import Navigation from "../../components/adminNabSidebar/Navigation";
import Table from "./Table";

const AllEventsAdmin = () => {
  const { events, loading } = useSelector((state) => state.events);
  return (
    <Navigation>
      <Container>
        <div style={{ marginTop: "3rem" }} />
        <Table events={events} />
        <div style={{ marginBottom: "7rem" }} />
        {loading && <h1>Loading...</h1>}
        {/* <div className="events__cards">
          {events.map((item, index) => (
            <div key={index} className="events__cards__item">
              <div className="events__cards__item__month">{item.month}</div>
              <div className="events__cards__item__date">{item.date}</div>
              <div className="events__cards__item__title">
                {item.title}{" "}
                <span>
                  <FaExternalLinkAlt className="events__cards__item__icon" />
                </span>
              </div>
              <div className="events__cards__item__particularDate">
                {item.particular_date}
              </div>
              <div className="events__cards__item__media">{item.media}</div>
              <div className="events__cards__item__organization">
                {item.organized_by}
              </div>
            </div>
          ))}
        </div> */}
      </Container>
    </Navigation>
  );
};

export default AllEventsAdmin;
