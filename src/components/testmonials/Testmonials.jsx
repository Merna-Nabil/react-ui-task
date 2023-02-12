import React from "react";
import "./testmonials.scss";
import Lady from "../../assets/lady.png";
import Stars from "../../assets/star.png";
import Dots from "../../assets/Group 2.png";
const Testmonials = () => {
  return (
    <div className="testmonials-wrapper ">
      <div className="container cont">
        <div className="title text-center">
          <h2>Don't Just Take our Word for it! </h2>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <h4>570</h4>
            <span>Download</span>
          </div>
          <div className="col-sm-6 col-md-3">
            <h4>570</h4>
            <span>Active User</span>
          </div>
          <div className="col-sm-6 col-md-3">
            <h4>570</h4>
            <span>Postive Feedback</span>
          </div>
          <div className="col-sm-6 col-md-3">
            <h4>570</h4>
            <span>+ rating</span>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="cart">
              <div className="img">
                <img src={Lady} alt="woman" />
              </div>
              <div className="info">
                <h3>Florrie Jacobs</h3>
                <h4>CEO of Company</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat
                </p>
                <img src={Stars} alt="star" />
                <img src={Stars} alt="star" />
                <img src={Stars} alt="star" />
                <img src={Stars} alt="star" />
                <img src={Stars} alt="star" />
              </div>
            </div>
            <img src={Dots} alt="dots" className="dots" />
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="test-info">
              <h3>Grow Your Business and Join Our Happy Users </h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet
              </p>
              <button className="main-btn btn">About us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testmonials;
