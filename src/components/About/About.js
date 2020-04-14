import React from "react";
import "./About.css";
import { Button } from "react-bootstrap";
const About = () => {
  return (
    <div className="parent_about">
      <div className="about_container">
        <div className='parent_margin'>
          <div className="second-parent">
            <div>
              <h1>About Company</h1>
            </div>
            <div>
              <Button>Home</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
