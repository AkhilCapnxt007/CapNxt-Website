import { fontSize } from "@mui/system";
import React from "react";
import videoBackground from "../Assets/Videos/Logo Rotate-1.mp4";
import AboutImg from "../Assets/Images/aboutImg.svg";
import serviceImgOne from "../Assets/Images/servicesImg.svg";
import serviceImgTwo from "../Assets/Images/serviceImg2.svg";
import TechImg from "../Assets/Images/techImg.svg";
import BlogImg from "../Assets/Images/blogimg.svg";
import BlogImgtwo from "../Assets/Images/blogimg2.svg";
import BlogImgthree from "../Assets/Images/blogimg3.svg";
import CalenderImg from "../Assets/Images/calender.svg";
import clientOne from "../Assets/Images/clientOne.svg";
import clientTwo from "../Assets/Images/clientTwo.svg";
import clientThree from "../Assets/Images/ClientThree.svg";
import clientFour from "../Assets/Images/clientFour.svg";
import vaikhari from "../Assets/Images/vaikhari.svg";

function Home() {
  // we work to give results but  not apologies
  return (
    <>
      <section className="HomePage">
        <div className="HomeContainer">
          <div className="Quotation">
            <span className="LeftLine"></span>
            <div>
              <h1>
                Envisioning Is Your Right. <br />
                Building It Is Our Job
              </h1>
            </div>
          </div>
          <div className="Video">
            {/* <video src={videoBackground}  autoplay loop muted /> */}
            <video autoPlay loop muted id="video">
              <source src={videoBackground} type="video/mp4" />
            </video>
            {/* </video> */}
          </div>
        </div>
        <div className="HomeABout">
          <div className="aboutImg">
            <img src={AboutImg} alt="about img" />
          </div>
          <div className="aboutContent">
            <h1>About Us</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
              corporis quas commodi modi, omnis sint nesciunt repudiandae
              explicabo odio laboriosam aspernatur fugiat eveniet! Quos vitae ut
              quas neque, obcaecati unde fugiat modi nemo necessitatibus.
              Possimus unde illum doloribus repellendus sed excepturi, tempora
              veritatis iste consequatur ea. Neque, vero! Error magni nostrum
              sit et nobis, omnis maxime ut veritatis quam excepturi.
            </p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="HomeServices">
          <header>
            <p>Services</p>
            <h1>How Can We Help</h1>
          </header>
          <section className="serviceImages">
            <div className="box">
              <img src={serviceImgOne} alt="servie Image" />
              <p>Web Development</p>
              <p className="link"> Learn More</p>
            </div>

            <div className="box">
              <img src={serviceImgTwo} alt="servie Image" />
              <p>Data Science</p>
              <p className="link"> Learn More</p>
            </div>

            <div className="box">
              <img src={serviceImgOne} alt="servie Image" />
              <p>Web Development</p>
              <h1 className="link"> Learn More</h1>
            </div>
          </section>
        </div>
        <div className="HomeTech">
          <header>
            <p>Our Technologies</p>
            <h1>How Can We Help</h1>
          </header>
          <div className="techImg">
            <img src={TechImg} alt="tech Images" />
          </div>
        </div>

        <div className="HomeBlog">
          <header>
            <p>Blog</p>
            <h1>Stories and Reviews</h1>
          </header>

          <div className="blogImagecontainer">
            <div className="blogBox">
              <img className="blogImg" src={BlogImg} alt="blog image error" />
              <div className="time">
                <img src={CalenderImg} alt="calender image error" />
                <p>2 sep 2024</p>
              </div>
              <div className="content">
                <h1>Blog Title</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nihil perspiciatis excepturi udiandae.
                </p>
                <p className="link">Learn More </p>
              </div>
            </div>
            <div className="blogBox">
              <img className="blogImg" src={BlogImgtwo} alt="blog image error" />
              <div className="time">
                <img src={CalenderImg} alt="calender image error" />
                <p>2 sep 2024</p>
              </div>
              <div className="content">
                <h1>Blog Title</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nihil perspiciatis excepturi udiandae.
                </p>
                <p className="link">Learn More </p>
              </div>
            </div>
            <div className="blogBox">
              <img className="blogImg" src={BlogImgthree} alt="blog image error" />
              <div className="time">
                <img src={CalenderImg} alt="calender image error" />
                <p>2 sep 2024</p>
              </div>
              <div className="content">
                <h1>Blog Title</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nihil perspiciatis excepturi udiandae.
                </p>
                <p className="link">Learn More </p>
              </div>
            </div>
          </div>
        </div>

        <div className="HomeClients">
          <header>
            <h1>Our Clients</h1>
          </header>
          <div className="imageContainer">
            <div className="imageBox">
              <img src={clientOne} alt="clientOne" />
            </div>
            <div className="imageBox">
              <img src={vaikhari} alt="clientOne" />
            </div>
            <div className="imageBox">
              <img src={clientThree} alt="clientOne" />
            </div>
            <div className="imageBox">
              <img src={clientFour} alt="clientOne" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
