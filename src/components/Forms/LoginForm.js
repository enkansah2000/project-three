import React from "react";
import { Button, Form } from "react-bootstrap";
import livingroom from "../../images/livingroom.jpg";
import "./Login.css";

const myStyle = {
  backgroundImage: `url(${livingroom})`,
};
const LoginForm = () => {
  return (
    <div style={myStyle}>
      <div class="background">
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
                                    <h2>Log In</h2>

                                    <p>
                                      login here using your Email and password
                                    </p>
                                  </div>

                                  <br />
                                  <div class="field-set">
                                    <span class="input-item">
                                      <i class="fa fa-user-circle"></i>
                                    </span>
                                    <Form.Control
                                      type="email"
                                      placeholder="Enter email"
                                    />

                                    <br />

                                    <span class="input-item">
                                      <i class="fa fa-key"></i>
                                    </span>

                                    <Form.Control
                                      type="password"
                                      placeholder="Enter Password"
                                    />
                                    <span>
                                      <i
                                        class="fa fa-eye"
                                        aria-hidden="true"
                                        type="button"
                                        id="eye"></i>
                                    </span>

                                    <br />

                                    <Button variant="primary">Login</Button>
                                  </div>

                                  <div class="other">
                                    <button class="btn submits frgt-pass">
                                      Forgot Password
                                    </button>

                                    <button class="btn submits sign-up">
                                      Sign Up
                                      <i
                                        class="fa fa-user-plus"
                                        aria-hidden="true"></i>
                                    </button>
                                  </div>
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

export default LoginForm;
