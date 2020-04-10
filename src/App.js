import React from "react";

import LoginForm from "./components/Forms/LoginForm";
import livingroom from "./images/livingroom.jpg";
import SignUp from "./components/Forms/SignUp";
import MyNavbar from "./components/Navbar/MyNavbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import livingroom from "./images/livingroom.jpg";
import HomePage from "./components/HomePage/HomePage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MyNavbar />
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={SignUp} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
