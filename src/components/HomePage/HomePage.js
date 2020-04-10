import React from "react";
import "./HomePage.css";
import { Button } from "react-bootstrap";
import livlivingroom from "../../images/livingroom.jpg";
const myStyle = {
  backgroundImage: `url(${livlivingroom})`,
};
const HomePage = () => {
  return (
    <div className="parent" style={myStyle}>
      <div className="second-parent">
        <div className="button1">
          <Button variant="success">Buy</Button>
        </div>
        <div className="button1">
          {" "}
          <Button variant="primary">Sell</Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
