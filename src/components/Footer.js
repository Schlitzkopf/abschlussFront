import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footBack ">
        <footer className="page-footer font-small mdb-color lighten-3 pt-4 text-light ">
          <div className="container text-center text-md-left">
            <div className="row">
              <div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
                <img
                  alt="Logo"
                  className="img-responsive passendFoot"
                  src={require("./Logo/groß.png")}
                />
                <p>© 2022 Copyright</p>
              </div>
              <hr className="clearfix w-100 d-md-none"></hr>
              <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
                <h5 className="font-weight-bold text-own text-uppercase mb-4">
                  Adresse
                </h5>
                <ul className="list-unstyled">
                  <li>
                    <p>
                      <i className="fas fa-home mr-3"></i> Ismaning 85737,
                      Deutschland
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fas fa-envelope mr-3"></i>{" "}
                      holdenriederferdinand@gmail.com
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="https://github.com/Schlitzkopf?tab=repositories">
                        {" "}
                        Schlitzkopf/Github
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
              <hr className="clearfix w-100 d-md-none"></hr>
              <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
                <h5 className="font-weight-bold text-own text-uppercase mb-4">
                  Über uns
                </h5>
                <p className="list-unstyled">
                  Wir sind eine kleine Gruppe, die zusammen etwas in der
                  Tiervermittlungswelt verändern möchte. Wir sind ein
                  Tierschutznetzwerk im europäischen Raum. Finde genau das Tier,
                  welches zu Dir passt!
                </p>
              </div>
            </div>
            <div className="footer-copyright text-center  text-light ">
              <Link
                className="nav-link active text-center ml-3"
                aria-current="page"
                to={"admin"}
              >
                Admin
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
