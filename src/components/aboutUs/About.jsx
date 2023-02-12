import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dashboard from "../../assets/NoPath.png";


import "./about.scss";
const About = () => {
  return (
    <div className="about-wrapper">
      {/*start navbar  */}
      {/* ***************************************************** */}
      <Navbar bg="transparent" expand="lg" className="navbar">
        <Container className="cont">
          <Navbar.Brand href="#home" className="logo">
            STvDY
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto justify-content-end links">
              <Nav.Link className="link" href="#home">
                Browser
              </Nav.Link>
              <Nav.Link className="link" href="#home">
                Bootcamps
              </Nav.Link>
              <Nav.Link className="link" href="#home">
                How It Works
              </Nav.Link>
              <Nav.Link className="link" href="#home">
                Testmonials
              </Nav.Link>
            </Nav>
            <button className="main-btn btn "> about us</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* end navbar */}
      {/* *********************************************************** */}
      {/* about info */}
      <div className="container cont">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="about-info">
              <h4 className="about-title">Advanced Platform</h4>
              <h2 className="main-title">Take your team to the next level </h2>
              <p className="about-body">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod
              </p>
              <button className="white-btn btn">about us</button>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="about-img">
              <img src={Dashboard} alt="dashboard" />
            </div>
          </div>
        </div>
      </div>
      {/*end about info */}
      {/* ************************************************************************ */}
    </div>
  );
};

export default About;
