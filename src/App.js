import React from "react";

import LoginForm from "./components/Forms/LoginForm";
import livingroom from "./images/livingroom.jpg";

const myStyle = {
  backgroundImage: `url(${livingroom})`,
};
const App = () => {
  return (
    <div style={myStyle}>
      <LoginForm />
    </div>
  );
};

export default App;
