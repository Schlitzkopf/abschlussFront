import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footBack">
<footer class="page-footer font-small mdb-color lighten-3 pt-4 text-light">


  <div class="container text-center text-md-left">

    <div class="row">

      
      <div class="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">


        <h5 class="font-weight-bold text-uppercase mb-4">Logo</h5>
        <p>© 2022 Copyright</p>

      </div>
      

      <hr class="clearfix w-100 d-md-none"></hr>

      
      <div class="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">

   
        <h5 class="font-weight-bold text-uppercase mb-4">Address</h5>

        <ul class="list-unstyled">
          <li>
            <p>
              <i class="fas fa-home mr-3"></i> Ismaning 85737 Deutschland</p>
          </li>
          <li>
            <p>
              <i class="fas fa-envelope mr-3"></i> holdenriederferdinand@gmail.com</p>
          </li>
          <li>
            <p>
              <i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
          </li>
          <li>
            <p>
              <i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </li>
        </ul>

      </div>
      

      <hr class="clearfix w-100 d-md-none"></hr>
      
      <div class="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">

        <h5 class="font-weight-bold text-uppercase mb-4">Über uns</h5>

        <p class="list-unstyled">
          Wir sind eine kleine Gruppe die zusammen etwas in der Tiervermittlungswelt verändern möchten.
        </p>

      </div>

    </div>


  </div>



  <div class="footer-copyright text-center py-3 text-light">© 2022 Copyright:
    <a href="https://github.com/Schlitzkopf?tab=repositories"> Schlitzkopf/Github</a>
  </div>

                <Link
                  className="nav-link active text-center"
                  aria-current="page"
                  to={"admin"}
                >
                  Admin
                </Link>

        </footer>
        </div>


    </>
  );
};

export default Footer;
