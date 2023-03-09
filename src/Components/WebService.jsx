// import { Button, Modal, Backdrop, Fade } from '@material-ui/core';
// import { AddCircle } from '@material-ui/icons';
import React , {useState} from "react";
import "../StyleComponents/WebService.css";
import WebDevelopmentImage from "../Assets/Images/WebDevlopmentImg.svg";
import WebCardOne from "../Assets/Images/WebCardImage1.svg";
import WebCardTwo from "../Assets/Images/WebCardImage2.svg";
import WebCardThree from "../Assets/Images/WebCardImage3.svg";
import WebCardFour from "../Assets/Images/WebCardImage4.svg";

function WebService() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="WebService">
        <header>
          <div className="WebContent">
            <h1>Web Development</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              mollis mattis erat eu molestie. Integer placerat, dui vel
              ullamcorper pretium, dui ipsum tincidunt turpis, ac gravida nunc
              arcu non leo
            </p>
          </div>
          <div className="WebContentImage">
            <img src={WebDevelopmentImage} alt="Error loading in image" />
          </div>
        </header>
        <div className="WhatWeDo">
          <div className="whatWeDoImage">
            <h1>
              What <br /> we do?{" "}
            </h1>
          </div>
          <div className="WhatWeDoCards">
            <div className="card CardOne">
              <div className="CardContent">
                <h1>Market Analysis</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas mollis mattis erat eu molestie. Integer placerat, dui
                  vel ullamcorper pretium.
                </p>
              </div>
              <div className="CardImage">
                <img src={WebCardOne} alt="error loading image." />
              </div>
            </div>
            <div className="card CardTwo">
              <div className="CardContent">
                <h1>Customer Insights</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas mollis mattis erat eu molestie. Integer placerat, dui
                  vel ullamcorper pretium.
                </p>
              </div>
              <div className="CardImage">
                <img src={WebCardTwo} alt="error loading image." />
              </div>
            </div>
            <div className="card CardThree">
              <div className="CardContent">
                <h1>Marketing Strategy</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas mollis mattis erat eu molestie. Integer placerat, dui
                  vel ullamcorper pretium.
                </p>
              </div>
              <div className="CardImage">
                <img src={WebCardThree} alt="error loading image." />
              </div>
            </div>
            <div className="card cardFour">
              <div className="CardContent">
                <h1>Web Development</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas mollis mattis erat eu molestie. Integer placerat, dui
                  vel ullamcorper pretium.
                </p>
              </div>
              <div className="CardImage">
                <img src={WebCardFour} alt="error loading image." />
              </div>
            </div>
          </div>
        </div>
        <div className="GetQuote">
          <button>Get a Quote</button>
        </div>
      </section>

      {/* <div>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddCircle />}
        onClick={() => setOpen(true)}
      >
        Add Item
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div>
            <form>
              <h2>Add Item</h2>
              <label htmlFor="item-name">Name:</label>
              <input type="text" id="item-name" />
              <br />
              <label htmlFor="item-description">Description:</label>
              <textarea id="item-description" rows="3"></textarea>
              <br />
              <Button type="submit" variant="contained" color="primary">
                Save
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div> */}
    </>
  );
}



export default WebService;
