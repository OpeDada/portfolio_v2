import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/images/logo3.png";
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/github.svg";
import navIcon3 from "../assets/images/mail.png";
import { Link, BrowserRouter as Router } from "react-router-dom";

export const Footer = () => {
  return (
    <Router>
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            {/* <MailchimpForm /> */}
            <Col size={12} sm={6}>
              <img src={logo} alt="Logo" />
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <Link
                  to="https://www.linkedin.com/in/opemipo-dada"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIcon1} alt="" />
                </Link>
                <Link
                  to="https://github.com/OpeDada"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIcon2} alt="" />
                </Link>
                <Link
                  to="mailto:opedada@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIcon3} alt="" />
                </Link>
              </div>
              <p>Copyright 2023. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </Router>
  );
};
