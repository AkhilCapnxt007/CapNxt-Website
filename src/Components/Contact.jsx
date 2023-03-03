import React, { useState, useRef } from "react";
import "../StyleComponents/ContactStyle.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [ShowError, setShowError] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("Phone");

  const form = useRef();

  const SubmitForm = (e) => {
    e.preventDefault();
    if (email.length <= 0 && phone.length <= 0) {
      setShowError(true);
      setErrorMessage("Email And Phone ")
    } else if (email.length <= 0) {
      setShowError(true);
      setErrorMessage("email");
    } else if (phone.length <= 0) {
      setShowError(true);
      setErrorMessage("phone");
    } else {
      setShowError(false);
      console.log({
        name,
        email,
        phone,
      });
      emailjs
        .sendForm(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          form.current,
          "YOUR_PUBLIC_KEY"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <>
      <header className="Heading">
        <h1> Contact Us</h1>
      </header>
      <section className="Contact">
        <form id="form" onSubmit={SubmitForm}>
          <div className="column">
            <div className="row">
              <div>
                <li> Name</li>
                <input
                  type="text"
                  placeholder="Enter Your Name Here"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <li>Email</li>
                <input
                  type="email"
                  placeholder="Enter Your Email Id Here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="row">
              <div>
                <li>Phone </li>
                <input
                  minLength={0}
                  maxLength={10}
                  type="text"
                  placeholder="Enter Your Phone No. Here"
                  value={phone}
                  onChange={(e) => {
                    const re = /^[0-9\b]+$/;

                    // if value is not blank, then test the regex

                    if (e.target.value === "" || re.test(e.target.value)) {
                      setPhone(e.target.value);
                    }
                  }}
                />
              </div>

              {/* <div>
                <li>How Can we Help</li>
                <input type="text" placeholder="How Can We Help you" />
              </div> */}
            </div>
          </div>
          <div className="Submitbtn">
            {ShowError && (
              <>
                <li> * {ErrorMessage} Cannot be empty</li>
              </>
            )}
            <button type="submit">Submit</button>
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
