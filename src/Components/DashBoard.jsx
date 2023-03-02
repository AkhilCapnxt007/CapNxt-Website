import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../StyleComponents/HomeStyle.css";
import capnxtHeading from "../Assets/Images/capnxtLogoHeading.png";
import capnxtLogWhite from "../Assets/Images/Capnxt-Logo-Final--White.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import AboutUs from "./AboutUs";
import Service from "./Service";
import Projects from "./Projects";
import OurPeople from "./OurPeople";
import Contact from "./Contact";
import Home from "./Home";

function DashBoard() {
  const [HomePage, setHomePage] = useState(true);
  const [AboutPage, setAboutPage] = useState(false);
  const [PeoplePage, setPeoplePage] = useState(false);
  const [ServicesPage, setServicesPage] = useState(false);
  const [ProjectsPage, setProjectsPage] = useState(false);
  const [ContactPage, setContactPage] = useState(false);

  function ShowHome() {
    setHomePage(true);
    setAboutPage(false);
    setPeoplePage(false);
    setServicesPage(false);
    setProjectsPage(false);
    setContactPage(false);
    document.querySelector("#menuToggle input").checked = false;
  }

  function ShowAbout() {
    setHomePage(false);
    setAboutPage(true);
    setPeoplePage(false);
    setServicesPage(false);
    setProjectsPage(false);
    setContactPage(false);
    document.querySelector("#menuToggle input").checked = false;
  }
  function ShowServices() {
    setHomePage(false);
    setAboutPage(false);
    setPeoplePage(false);
    setServicesPage(true);
    setProjectsPage(false);
    setContactPage(false);
    document.querySelector("#menuToggle input").checked = false;
  }
  function ShowProjects() {
    setHomePage(false);
    setAboutPage(false);
    setPeoplePage(false);
    setServicesPage(false);
    setProjectsPage(true);
    setContactPage(false);
    document.querySelector("#menuToggle input").checked = false;
  }

  function ShowContact() {
    setHomePage(false);
    setAboutPage(false);
    setPeoplePage(false);
    setServicesPage(false);
    setProjectsPage(false);
    setContactPage(true);
    document.querySelector("#menuToggle input").checked = false;
  }

  function ShowOurPeople() {
    setHomePage(false);
    setAboutPage(false);
    setPeoplePage(true);
    setServicesPage(false);
    setProjectsPage(false);
    setContactPage(false);
    document.querySelector("#menuToggle input").checked = false;
  }

  return (
    <>
      {/* Navbar from heree */}
      <section className="Universal">
        <header className="Navbar">
          <div className="logo">
            <img src={capnxtHeading} alt="" onClick={ShowHome} />
          </div>
          <nav className="NavLink">
            <li className="links" onClick={ShowServices}>
              Service
            </li>

            <li className="links" onClick={ShowOurPeople}>
              Our People
            </li>

            <li className="links" onClick={ShowAbout}>
              About Us
            </li>
            <li className="links" onClick={ShowProjects}>
              Projects
            </li>
            {/* <li className="links" onClick={ShowProjects}>
              Contact
            </li> */}
          </nav>
          <nav className="contact">
            <li className="links" onClick={ShowContact}>
              Contact us
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
                  <li onClick={ShowHome}>Home</li>
                </a>
                <Link
                  to="#"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  <li onClick={ShowAbout}>About Us</li>
                </Link>
                <a href="#">
                  <li onClick={ShowServices}>Services</li>
                </a>
                <a href="#">
                  <li onClick={ShowProjects}>Projects</li>
                </a>
                <a href="#">
                  <li onClick={ShowContact}>Contact Us</li>
                </a>
                <a href="#">
                  <li onClick={ShowOurPeople}>Our People</li>
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
        <section className="Components">
          {HomePage && (
            <>
              <Home />
            </>
          )}
          {AboutPage && (
            <>
              <AboutUs />
            </>
          )}

          {ServicesPage && (
            <>
              <Service />
            </>
          )}

          {PeoplePage && (
            <>
              <OurPeople />
            </>
          )}

          {ProjectsPage && (
            <>
              <Projects />
            </>
          )}
          {ContactPage && (
            <>
              <Contact />
            </>
          )}

          {}
        </section>
        {/* <section className="Footer">
          <div className="logo">
            <img src={capnxtLogWhite} alt="error loding" />
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
        </section> */}
      </section>
    </>
  );
}

export default DashBoard;
