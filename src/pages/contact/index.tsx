import React from "react";
import Container from "../../components/container/Container";
import "./__contact.scss";

const Contact = () => {
  return (
    <>
      <div className="signUpBanner"></div>
      <Container className="testPage">
        <span className="bgWhite mt-280">Contact</span>
      </Container>

      <Container>
        <form className="contactForm">
          <div className="contactFormHeader">Contact Us</div>
          <div style={{ display: "flex" }}>
            <input style={{ marginRight: "8px" }} placeholder="First name..." />
            <input style={{ marginLeft: "8px" }} placeholder="Last name..." />
          </div>
          <div>
            <input placeholder="Email..." />
          </div>
          <div>
            <textarea
              placeholder="How can we help you? Write message..."
              cols={50}
              rows={8}
            />
          </div>
          <div>
            <input
              style={{
                cursor: "pointer",
                color: "#fff",
                background: "#05be71",
                border: "none",
                borderRadius: "10px",
              }}
              type="submit"
            />
          </div>
        </form>
      </Container>
    </>
  );
};

export default Contact;
