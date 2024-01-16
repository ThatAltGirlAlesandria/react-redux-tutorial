import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return (
    <React.Fragment>
      <div>
        <h3>hello people</h3>
        <ul>
          <li>
            <a href="#">hello world</a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

const root = ReactDOM.createROOT(document.getElementById("root"));

root.render(<Greeting />);
