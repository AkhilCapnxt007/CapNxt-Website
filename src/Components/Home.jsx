import React from "react";
import { Link } from "react-router-dom";
import "../StyleComponents/HomeStyle.css";
import capnxtHeading from "../Assets/Images/capnxtLogoHeading.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

function Home() {
  return (
    <>
      {/* Navbar from heree */}
      <section className="Universal">
        <header className="Navbar">
          <div className="logo">
            <img src={capnxtHeading} alt="" />
          </div>
          <nav className="NavLink">
            <li className="links">
              <Link to="/service">Service</Link>
            </li>

            <li className="links">
              <Link to="/team">Our People</Link>
            </li>

            <li className="links">
              <Link to="/about">About Us</Link>
            </li>
            <li className="links">
              <Link to="/">Projects</Link>
            </li>
          </nav>
          <nav className="contact">
            <li className="links">
              <Link to="/contact">Contact us</Link>
            </li>
          </nav>
        </header>
        <header className="mobileView">
            <nav>
              <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                  <a href="#">
                    <li>Home</li>
                  </a>
                  <Link
                    to="#"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    <li>About Us</li>
                  </Link>
                  <a href="#">
                    <li>Services</li>
                  </a>
                  <a href="#">
                    <li>Projects</li>
                  </a>
                  <a href="#">
                    <li>Contact Us</li>
                  </a>
                  <a href="#">
                    <li>Our People</li>
                  </a>
                </ul>
              </div>
              <div class="logo-title">
                <div class="logo-mobile">
                  <div
                    style={{
                      display: "flex",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <img src={capnxtHeading} alt="not found" />
                    <h2 class="title">
                      {/* <a onClick={MobileHome}>Energon</a> */}
                    </h2>
                  </div>
                </div>
              </div>
            </nav>
          </header>

        <section className="Components">Components Here..</section>
        <section className="Footer">
          <div className="logo">
            <img src={capnxtHeading} alt="error loding" />
          </div>
          <div className="SocialMedia">
            <li>
              <InstagramIcon />
            </li>
            <li>
              <FacebookOutlinedIcon />
            </li>
            <li>
              <LinkedInIcon />
            </li>
            <li>
              <TwitterIcon />
            </li>
          </div>
          <div className="copyright">&#169; CapNxt Global Pvt Ltd</div>
        </section>
      </section>
    </>
  );
}

export default Home;
