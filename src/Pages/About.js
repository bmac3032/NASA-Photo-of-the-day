import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container">
      <h1>
        This site was created with <a href="https://reactjs.org/">React</a>, and
        uses functional componenets, hooks, and also utilizes{" "}
        <a href="https://reactrouter.com/web/guides/quick-start">
          React Router
        </a>{" "}
        for client side routing
      </h1>
      <div className="underline"></div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
}

export default About;
