import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-white">
        <div id="footer" className="text-center text-dark p-3">
          © 2020 Copyrigh
          <a className="text-dark" href="https://github.com/Schlitzkopf">
            {" "}
            Schlitzkopf/GitHub.com
          </a>
          <br></br>
          <a href="url">Datenschutz</a> <a href="url">Impressum</a>{" "}
          <a href="url">Newsletter</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
