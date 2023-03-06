import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../StyleComponents/HomeStyle.css";
import "../StyleComponents/FooterStyle.css";

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
import instagram from "../Assets/Images/instagram.svg";
import facebook from "../Assets/Images/faceBook.svg";
import linkedIn from "../Assets/Images/linkedIn.svg";
import Home from "./Home";
import AddressLogo from "../Assets/Images/addressLogo.svg";
import PhoneLogo from "../Assets/Images/mobileLogo.svg";
import EmailLogo from "../Assets/Images/EmailLogo.svg";

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

  // code for closing side nav bar on clicking anywhere
  document.addEventListener("click", function (event) {
    var ignoreElement = document.querySelector("#menuToggle");
    // console.log(ignoreElement)
    if (ignoreElement !== null) {
      var clickElement = ignoreElement.contains(event.target);
      if (!clickElement) {
        document.querySelector("#menuToggle input").checked = false;
      }
    }
  });

  return (
    <>
      {/* Navbar from heree */}
      <section className="Universal">
        <header className="Navbar">
          <div className="logo">
            <img src={capnxtHeading} alt="" onClick={ShowHome} />
          </div>
          <nav className="NavLink">
            <li className="links" onClick={ShowHome}>
              Home
            </li>

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
            <li className="links" onClick={ShowContact}>
              Contact
            </li>
          </nav>
          {/* <nav className="contact">
            <li className="links" onClick={ShowContact}>
              Contact us
            </li>
          </nav> */}
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
        <section className="Footer">
          <div className="socailMedia">
            <img className="CapNxtLogo" src={capnxtLogWhite} alt="error loading in image" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
              nesciunt numquam ipsum iste. Illo id quia optio enim voluptatem.
              Dolores exercitationem odit.
            </p>
            <div className="socailMediaLinks">
              <a href="#">
                <img src={linkedIn} alt="error loading image" />
              </a>
              <a href="#">
                <img src={facebook} alt="error loading image" />
              </a>
              <a href="#">
                <img src={instagram} alt="error loading image" />
              </a>
            </div>
          </div>
          <section className="Links">
            <div className="Navlinks">
              <h1>Links</h1>
              <p onClick={ShowAbout}>About Us</p>
              <p onClick={ShowProjects}>Projects</p>
              <p onClick={ShowServices}>Our Services</p>
              <p onClick={ShowContact}>Contact Us</p>
            </div>
            <div className="ContactDetails">
              <section className="contactLinks">
                <h1>Contact Info</h1>
                <div>
                  <img src={AddressLogo} alt="error loading Image" />
                  <span>
                    95, Lumbini Avenue, Gachibowli, Hyderabad, <br />
                    Telangana 500032
                  </span>
                </div>

                <div>
                  <img src={PhoneLogo} alt="error loading Image" />
                  <span>+91 7981516766</span>
                </div>

                <div>
                  <img src={EmailLogo} alt="error loading Image" />
                  <span>info@capnxt.com</span>
                </div>

              </section>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}

export default DashBoard;
