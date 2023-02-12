import React from "react";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="container cont">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <div className="study">
              <h4 className="foot-title">Study</h4>
              <p className="foot-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                eget diam at mi sollicitudin
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="services">
              <h6>Nos Services</h6>
              <p>
                Avis clients Mentions légales Plan du site Blog d'Idéematic Le
                dictionnaire du digital Notre boutique
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="contact">
              <h5>Sign up for Special Offers! </h5>
              <form>
                <input type="email" className="email" placeholder="Mail" />
                <input type="submit" name="Subscribe" className="subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
