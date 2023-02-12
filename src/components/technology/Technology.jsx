import React from "react";
import "./technology.scss";
import Dashboard from "../../assets/NoPath4.png";
const Technology = () => {
  return (
    <div className="tech-wrapper">
      <div className="container-fluid cont">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <div className="bus-info platform-info tech">
              <h3 className="bus-head">
                Best Platform for the Technological Era
              </h3>
              <p className="bus-body">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </p>
              <p>
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem
              </p>
              <div className="learn-more mb-5">
                <a href="#more">Learn About Our Success</a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="bgimg"></div>
            <img src={Dashboard} alt="Dashboard" className="dash" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
