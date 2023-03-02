import React from "react";
import "../StyleComponents/ContactStyle.css";
function Contact() {
  return (
    <>
      <header className="Heading">
        <h1> Contact Us</h1>
      </header>
      <section className="Contact">
        <form id="form">
          <div className="column">
            <div className="row">
              <div>
                <li> Name</li>
                <input type="text" placeholder="Enter Your Name Here" />
              </div>

              <div>
                <li>Email</li>
                <input type="email" placeholder="Enter Your Email Id Here" />
              </div>
            </div>

            <div className="row">
              <div>
                <li>Phone </li>
                <input type="text" placeholder="Enter Your Phone No. Here" />
              </div>

              {/* <div>
                <li>How Can we Help</li>
                <input type="text" placeholder="How Can We Help you" />
              </div> */}
            </div>
          </div>
          <div className="Submitbtn">
            <button>Submit</button>
          </div>
        </form>
        <div className="map">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                width="100%"
                height="100%"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=3rd Floor, 95, Lumbini Avenue, Gachibowli, Hyderabad, Telangana 500032&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
