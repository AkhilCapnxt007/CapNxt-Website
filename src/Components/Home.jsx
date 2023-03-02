import { fontSize } from "@mui/system";
import React from "react";
import videoBackground from "../Assets/Videos/Logo Rotate-1.mp4";

function Home() {
  // we work to give results but  not apologies
  return (
    <>
      <section className="HomePage">
        <div className="HomeContainer">
          <div className="Quotation">
            <h1>
              "We Work To Give Results <br /> Not Apologies.
            </h1>
          </div>
          <div className="Video">
            {/* <video src={videoBackground}  autoplay loop muted /> */}
            <video autoPlay loop muted id="video">
              <source src={videoBackground} type="video/mp4" />
            </video>
            {/* </video> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
