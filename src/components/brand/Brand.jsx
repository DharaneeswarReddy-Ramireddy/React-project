import React from "react";
import "./brand.css";
import { google, slack, atlassian, dropbox, shopify } from "./imports";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={google} alt="ggog" />
      </div>
      <div>
        <img src={slack} alt="ggog" />
      </div>
      <div>
        <img src={atlassian} alt="ggog" />
      </div>
      <div>
        <img src={dropbox} alt="ggog" />
      </div>
      <div>
        <img src={shopify} alt="ggog" />
      </div>
    </div>
  );
};

export default Brand;
