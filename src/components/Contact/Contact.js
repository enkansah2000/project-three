import React from "react";
import { Button, Form } from "react-bootstrap";
import livingroom from "../../images/livingroom.jpg";
import "./Contact.css";

const myStyle = {
  backgroundImage: `url(${livingroom})`,
};
const Contact = () => {
  return (
    <div className="contact_bg">
      <div className="background">
        <div class="container">
          <div class="button">
            <section id="intro">
              <div id="intro-content" class="center-content">
                <div class="center-content-inner">
                  <div class="content-section content-section-margin">
                    <div class="content-section-grid clearfix">
                      <a href="#" class="button nav-link">
                        <div class="bottom"></div>

                        <div class="top">
                          <div class="label">
                            <div class="overlay">
                              <form>
                                <div class="con">
                                  <div class="head-form">
                                    <h2>SEND ME A MESSAGE</h2>
                                  </div>

                                  <br />
                                  <div class="field-set">
                                    <Form.Control
                                      type="text"
                                      placeholder="Your name"
                                    />

                                    <br />

                                    <Form.Control
                                      type="email"
                                      placeholder="Your Email"
                                    />

                                    <br />
                                    <Form.Control
                                      type="text"
                                      placeholder="Your Subject"
                                    />
                                    <Form.Control as="textarea" rows="3" />
                                    <Button variant="primary">Send</Button>
                                    <Button variant="warning">Home</Button>
                                  </div>

                                  <div class="other"></div>
                                </div>
                              </form>
                            </div>
                          </div>

                          <div class="button-border button-border-left"></div>
                          <div class="button-border button-border-top"></div>
                          <div class="button-border button-border-right"></div>
                          <div class="button-border button-border-bottom"></div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
