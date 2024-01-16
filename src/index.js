import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return (
    <div>
      <h2>My First Component</h2>;
    </div>
  );
}
const Greeting = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "hello world")
  );
};

const root = ReactDOM.createROOT(document.getElementById("root"));

root.render(<Greeting />);
