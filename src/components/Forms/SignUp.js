import React from "react";
import livlivingroom from "../../images/livingroom.jpg";
import "./Register.css";
const SignUp = () => {
  return (
    <div className="register_bg">
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
                                  <h2>Sign Up</h2>

                                  <p>Enter your information below</p>
                                </div>

                                <br />
                                <div class="field-set">
                                  <input
                                    class="form-input"
                                    id="txt-input"
                                    type="text"
                                    placeholder="Full Name"
                                    required
                                  />
                                  <br />

                                  <input
                                    class="form-input"
                                    id="txt-input"
                                    type="text"
                                    placeholder="Email"
                                    required
                                  />
                                  <br />

                                  <span class="input-item">
                                    <i class="fa fa-key"></i>
                                  </span>

                                  <input
                                    class="form-input"
                                    type="password"
                                    placeholder="Create Password"
                                    id="pwd"
                                    name="password"
                                    required
                                  />

                                  <span>
                                    <i
                                      class="fa fa-eye"
                                      aria-hidden="true"
                                      type="button"
                                      id="eye"></i>
                                  </span>
                                  <br />

                                  <button class="sign-up">Sign Up</button>
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
  );
};

export default SignUp;
