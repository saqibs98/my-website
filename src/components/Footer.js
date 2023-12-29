import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo1 from "../assets/img/logo1.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import github from '../assets/img/github.svg';
import mail from '../assets/img/mail.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo1} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/saqib-hasanie" target="blank"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/sqb97" target="blank"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/saqib.hasanie/" target="blank"><img src={navIcon3} alt="" /></a>
                <a href="https://github.com/saqibs98" target="blank"><img src={github} alt="" /></a>
                <a href="mailto:hasanietechs@gmail.com" target="blank">
                  <img src={mail} alt="Email icon" />
                </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
