import React from "react";
import "./business.scss";
import Arrow from "../../assets/arrow.png";
import Logo1 from "../../assets/1.png";
import Logo2 from "../../assets/2.png";
import Logo3 from "../../assets/3.png";
import Logo4 from "../../assets/4.png";
const Business = () => {
  return (
    <div className="business-wrapper">
      <div className="container cont">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="bus-info">
              <h3 className="bus-head">The best business solution for you</h3>
              <p className="bus-body">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </p>
              <p>
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem
              </p>
              <div className="learn-more">
                <a href="#more">Learn About Our Success</a>
                <img src={Arrow} alt="arrow" />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="row">
              <div className="col-sm-12 col-md-6 ">
                <div className="cart">
                  <div className="img-wrap red">
                    <img src={Logo1} alt="logo1" />
                  </div>
                  <h6>Scale Your Activity</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="cart">
                  <div className="img-wrap blue">
                    <img src={Logo2} alt="logo2" />
                  </div>
                  <h6>Scale Your Activity</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="cart">
                  <div className="img-wrap purple">
                    <img src={Logo3} alt="logo3" />
                  </div>
                  <h6>Scale Your Activity</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="cart">
                  <div className="img-wrap green">
                    <img src={Logo4} alt="logo4" />
                  </div>
                  <h6>Scale Your Activity</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
