import React from "react";
import "./platform.scss";
import Arrow from "../../assets/arrow.png";
import Bgimg from "../../assets/Rectangle 9.png";
import Dashboard from "../../assets/NoPath2.png";
const Platform = () => {
  return (
    <div className="platform-wrapper">
      <div className="container-fluid cont">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <img src={Bgimg} alt="bgimg" className="image" />
            <img src={Dashboard} alt="dashboard" className="dashboard" />
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="bus-info platform-info">
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
                <img src={Arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
