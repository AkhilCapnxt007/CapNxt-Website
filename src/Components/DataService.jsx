import React from "react";
import "../StyleComponents/DataService.css";
import dataScienceImg from "../Assets/Images/DataScienceImage.svg";
import ourApproachImg from "../Assets/Images/ourApproach.svg";
import solutionImageOne from "../Assets/Images/solutionImg1.svg";
import solutionImageTwo from "../Assets/Images/solutionImg2.svg";

function Service() {
  return (
    <section id="Service">
      <header className="ServiceHeader">
        <h1>Data</h1>
      </header>
      <section className="DataContent">
        <header>
          <h1>Data Analytics</h1>
          <p>
            Data analytics is the process of examining and interpreting data
            using statistical and computation methods to extract insights and
            knowledge from it. It involves the collection processing, cleaning,
            and analysis of large sets of data to dentify patterns,
            relationships, and trends.
          </p>
        </header>
        <div className="contentImg">
          <img src={dataScienceImg} alt="" />
        </div>
      </section>
      <section className="Approch">
        <header>
          <h1>Our Approach</h1>
        </header>
        <div className="sectionHolder">
          <section className="boxContainerTop">
            <div className="boxCollector">
              <div className="box">
                <h1>Data Collection</h1>
                <p>
                  Gathering relevant data from various sources, such as
                  databases, websites, social media platforms, and sensors.
                </p>
              </div>
              <div className="box middleBox">
                <h1>Data Analysis</h1>
                <p>
                  Using statistical and computational methods to analyze the
                  data, identify patterns and relationships.
                </p>
              </div>
              <div className="box">
                <h1>Data Interpretation</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                </p>
              </div>
            </div>
          </section>
          <section className="ApproachImage">
            <img src={ourApproachImg} alt="error loading image" />
          </section>
          <section className="boxContainerBottom">
            <div className="boxCollectorBottom">
              <div className="box">
                <h1>Problem understanding</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                </p>
              </div>
              <div className="box middleBox">
                <h1>Data Cleaning</h1>
                <p>
                  cleaning and preparing the data to ensure its quality,
                  consistency, and accuracy
                </p>
              </div>
              <div className="box">
                <h1>Data Modelling</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="Solutions">
        <header>
          <h1>Solutions</h1>
        </header>
        <div className="solutionImgContainer">
          <div className="solutionBox">
            <img src={solutionImageOne} alt="error loading in image.." />
            <div className="Solutioncontent">
              <h1>Descriptive Analytics</h1>
              <p>
                Summarizes and describes data using statistical techniques and
                visualization tools, providing a foundation for more advanced
                analysis techniques and data-driven decision making.
              </p>
            </div>
          </div>
          <div className="solutionBox">
            <img
              src={solutionImageTwo}
              className="solutionImageTwo"
              alt="error loading in image.."
            />
            <div className="Solutioncontent">
              <h1>Diagnostic Analytics</h1>
              <p>
                Uses statistical and machine learning algorithms to analyze
                historical data and make predictions about events or outcomes,
                enabling organizations to make data-driven decisions
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Service;
