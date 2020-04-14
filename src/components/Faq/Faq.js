import React from "react";
import "./Faq.css";
import { Button } from "react-bootstrap";
const Faq = () => {
  return (
    <div className="parent_about">
      <div className="about_container">
        <div className="parent_margin">
          <div className="second-parent">
            <div>
              <h2>FAQ</h2>
              <hr />
              <p>
                Q:Lorem ipsum dolor sit amet, pri at omittam fabellas platonem?
              </p>
              <p>A:Ne fastidii menandri eos. Cum ex quis utinam insolens</p>
              <br />
              <p>
                Q:Lorem ipsum dolor sit amet, pri at omittam fabellas platonem?
              </p>
              <p>A:Ne fastidii menandri eos. Cum ex quis utinam insolens</p>
              <br />
              <p>
                Q:Lorem ipsum dolor sit amet, pri at omittam fabellas platonem?
              </p>
              <p>A:Ne fastidii menandri eos. Cum ex quis utinam insolens</p>
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

export default Faq;
