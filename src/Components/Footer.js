import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <p>
        For more information about this website, click{" "}
        <Link to="/about">here...</Link>
      </p>
    </footer>
  );
}

export default Footer;
