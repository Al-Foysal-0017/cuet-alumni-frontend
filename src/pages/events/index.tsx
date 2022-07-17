import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import Container from "../../components/container/Container";
import "./__event.scss";

const Events = () => {
  const { events, loading } = useSelector((state: any) => state.events);
  return (
    <>
      <div className="signUpBanner"></div>
      <Container className="testPage">
        <span className="bgWhite mt-280">Events</span>
      </Container>
      <Container>
        {loading && <h1>Loading...</h1>}
        <div className="events__cards">
          {events.map(
            (
              item: {
                month:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined;
                date:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined;
                title:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined;
                particular_date:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined;
                media:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined;
                organized_by:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined;
              },
              index: React.Key | null | undefined
            ) => (
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
            )
          )}
        </div>
      </Container>
    </>
  );
};

export default Events;
