import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import typingdna from "../assets/img/typingdna.png";
import axia from "../assets/img/axia.png";
import keycloak from "../assets/img/keycloak.png";
import db from "../assets/img/db.png";
import connect from "../assets/img/connect.png";
import vivian from "../assets/img/vivian.png";
import nexus from "../assets/img/nexus.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsTab1= [
    {
      title: "Authentication with KeyCloak & TypingDNA",
      description: "Developed a Node.js application featuring robust authentication mechanisms through Keycloak, coupled with advanced Two-Factor Authentication (2FA) utilizing TypingDNA technology. This solution enhances security measures by combining industry-standard authentication practices with cutting-edge biometric typing patterns, ensuring a highly secure and user-friendly authentication process.",
      imgUrl: typingdna,
    },
    {
      title: "Vivian Health",
      description: "As a contractor at Vivian Health, I spearheaded the revamp of the job details page in a React Native mobile app, resulting in a substantial 6.66% boost in the conversion rate from job viewing to application within 2 minutes. I collaborated with the UX team to transition from external CSS frameworks to internally developed components.",
      imgUrl: vivian,
    },
    {
      title: "Configure SSL in KeyCloak Standalone Configuration",
      description: "Implement SSL encryption on KeyCloak using a domain-signed certificate from a trusted third-party. Enhance the security infrastructure by integrating a certified SSL solution, ensuring a secure and encrypted connection for seamless and protected user interactions within the Keycloak environment.",
      imgUrl: keycloak,
    }
  ];
  
  const projectsTab2 = [
    {
      title: "Axia Health",
      description: "Develop a web application for a healthcare organization, offering seamless login and facility selection. Users can access patient encounters and appointments with custom date filters, and click on encounter rows to view patient profiles. The platform facilitates real-time chat, form submissions, and appointment reminders, streamlining user engagement and enhancing communication efficiency in healthcare operations.",
      imgUrl: axia,
    },
    {
      title: "Integrate PostgreSQL database with KeyCloak",
      description: "Successfully integrated a Microsoft Azure PostgreSQL database with Keycloak in response to the client's request. This integration establishes a secure and efficient connection between Keycloak and the Azure database, enabling seamless data access and management within the Keycloak environment. The implementation ensures optimal functionality and reliability, meeting the client's specific database integration needs.",
      imgUrl: db,
    },
    {
      title: "Publish NPM Packages to NPMJS",
      description: "Designed and developed 'keycloak-nodejs-connect,' a powerful Node.js library facilitating seamless integration with Keycloak. This module streamlines authentication and authorization processes, providing robust security measures while ensuring ease of implementation for Node.js applications interfacing with Keycloak authentication services.",
      imgUrl: connect,
    },
  ];

  const projectsTab3 = [
    {
      title: "Nexus",
      description: "Architected and developed the frontend of the internal company platform, Nexus, aimed at centralizing communication channels, fortifying business functions, and organizing user-generated articles. The platform features a robust search engine, a user-friendly interface, and a seamless user experience, streamlining internal operations and enhancing productivity.",
      imgUrl: nexus,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I've had the opportunity to work on a variety of projects that span different domains and technologies. Below are some of the key projects that showcase my skills and expertise.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projectsTab1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projectsTab2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projectsTab3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
