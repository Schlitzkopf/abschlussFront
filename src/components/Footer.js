import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-white footBack">
        <div id="footer" className="text-center text-light p-3">
          © 2020 Copyrigh
          <a className="text-light" href="https://github.com/Schlitzkopf">
            Schlitzkopf/GitHub.com
          </a>
          <br></br>
          <Link to={"/ups"}>Datenschutz</Link>{" "}
          <Link to={"/ups"}>Impressum</Link> <Link to={"/ups"}>Newsletter</Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
