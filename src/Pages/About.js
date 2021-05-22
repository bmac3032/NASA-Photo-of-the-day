import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container">
      <h1>
        This site was created with React, and uses functional componenets,
        hooks, and also utilizes react router for client side routing
      </h1>
      <div className="underline"></div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
}

export default About;
