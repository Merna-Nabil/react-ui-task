import React from "react";
import Brand1 from "../../assets/shopify.png";
import Brand2 from "../../assets/client-2.png";
import Brand3 from "../../assets/client-3.png";
import Brand4 from "../../assets/client-4.png";
import Brand5 from "../../assets/client-5.png";
import "./brands.scss";
const Brands = () => {
  return (
    <div className="brands-wrapper">
      <div className="container cont">
        <div className="row">
          <div className="col-md-6 col-xs-12 col-xl-2">
            <img src={Brand1} alt="shopify" />
          </div>
          <div className="col-md-6 col-xs-12 col-xl-2">
            <img src={Brand2} alt="shopify" />
          </div>
          <div className="col-md-6 col-xs-12 col-xl-2">
            <img src={Brand3} alt="shopify" />
          </div>
          <div className="col-md-6 col-xs-12 col-xl-2">
            <img src={Brand4} alt="shopify" />
          </div>
          <div className="col-md-6 col-xs-12 col-xl-2">
            <img src={Brand5} alt="shopify" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
