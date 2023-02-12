import React from "react";
import "./overview.scss";
import Dashboard from "../../assets/NoPath3.png";
import Group from "../../assets/Group 2.png";
const Overview = () => {
  return (
    <div className="overview-wrapper text-center">
      <div className="container cont">
        <div className="row">
          <h3>Advanced Customer Service Platform</h3>
          <h2>Platform Overview</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
          <p>
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet
          </p>
          <img src={Dashboard} alt="dashboard" className="dashboard" />
          <div className="img-wrap text-center mb-5">
            <img src={Group} alt="dots" className="dots" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
