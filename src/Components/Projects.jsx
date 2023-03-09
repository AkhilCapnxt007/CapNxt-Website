import React from "react";
import "../StyleComponents/ProjectStyle.css";
import ProjectourWork from "../Assets/Images/ProjectOurWork.svg";
import ProductImg from "../Assets/Images/ProductImage.svg";
import TargetImg from "../Assets/Images/TarketImage.svg";
import UseCaseImg from "../Assets/Images/UseCaseImage.svg";
import vaikhari from "../Assets/Images/vaikhari.svg";
import ProjectDetails from "./ProjectDetails";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ProjectModalBG from "../Assets/Images/projectModalbackground.svg"

function Projects() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50vw",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  // handling modal state
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const OpenEnergon = () => {
    window.alert("opened energon")
  };

  const OpenCapnxt = () => {
    window.alert("opened capnxt")
  };
  const OpenArkiton = () => {
    window.alert("opened arki")
  };

  const OpenEnnessar = () => {
    window.alert("opened ennener")
  };
  const OpenVaikhari = () => {
    window.alert("opened vaikh")
  };
  const OpenPrakruthi = () => {
    window.alert("opened prak")
  };

  // json stored details here ......
  let ProjectDetails = [
    {
      ProjectName: "Energon",
      ProjectDesp:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde voluptates beatae fuga deleniti deserunt quisquam possimus laudantium veritatis quo sed.",
      ProjectImage: vaikhari,
      ProjectLink: "https://energon.in",
      ProductImage: ProductImg,
      ProductDesp:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis mattis erat eu molestie. Integer placerat, dui vel ullamcorper pretium, dui ipsum t",
      TargetImage: TargetImg,
      TargetDesp:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis mattis erat eu molestie. Integer placerat, dui vel ullamcorper pretium, dui ipsum t",
      useCaseImage: UseCaseImg,
      useCaseDesp:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis mattis erat eu molestie. Integer placerat, dui vel ullamcorper pretium, dui ipsum t",
      callBack: OpenEnergon,
    },

    {
      ProjectName: "CapNxt",
      ProjectDesp:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde voluptates beatae fuga deleniti deserunt quisquam possimus laudantium veritatis quo sed.",
      ProjectImage: vaikhari,
      ProjectLink: "https://energon.in",
      ProductImage: ProductImg,
      ProductDesp:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis mattis erat eu molestie. Integer placerat, dui vel ullamcorper pretium, dui ipsum t",
      TargetImage: { TargetImg },
      TargetDesp:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis mattis erat eu molestie. Integer placerat, dui vel ullamcorper pretium, dui ipsum t",
      useCaseImage: UseCaseImg,
      useCaseDesp:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis mattis erat eu molestie. Integer placerat, dui vel ullamcorper pretium, dui ipsum t",
      callBack: OpenCapnxt,
    },
    {
      ProjectName: "Arkiton",
      ProjectDesp:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde voluptates beatae fuga deleniti deserunt quisquam possimus laudantium veritatis quo sed.",
      ProjectImage: vaikhari,
      ProjectLink: "https://energon.in",
      ProductImage: ProductImg,
      ProductDesp:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis mattis erat eu molestie. Integer placerat, dui vel ullamcorper pretium, dui ipsum t",
      TargetImage: TargetImg,
      TargetDesp:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis mattis erat eu molestie. Integer placerat, dui vel ullamcorper pretium, dui ipsum t",
      useCaseImage: UseCaseImg,
      useCaseDesp:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis mattis erat eu molestie. Integer placerat, dui vel ullamcorper pretium, dui ipsum t",
      callBack: OpenArkiton,
    },
    {
      ProjectName: "Ennessaar",
      ProjectDesp:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde voluptates beatae fuga deleniti deserunt quisquam possimus laudantium veritatis quo sed.",
      ProjectImage: vaikhari,
      ProjectLink: "https://energon.in",
      ProductImage: ProductImg,
      ProductDesp:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis mattis erat eu molestie. Integer placerat, dui vel ullamcorper pretium, dui ipsum t",
      TargetImage: TargetImg,
      TargetDesp:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis mattis erat eu molestie. Integer placerat, dui vel ullamcorper pretium, dui ipsum t",
      useCaseImage: UseCaseImg,
      useCaseDesp:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis mattis erat eu molestie. Integer placerat, dui vel ullamcorper pretium, dui ipsum t",
      callBack: OpenEnnessar,
    },
    {
      ProjectName: "Prakruti school",
      ProjectDesp:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde voluptates beatae fuga deleniti deserunt quisquam possimus laudantium veritatis quo sed.",
      ProjectImage: vaikhari,
      ProjectLink: "https://energon.in",
      ProductImage: ProductImg,
      ProductDesp:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis mattis erat eu molestie. Integer placerat, dui vel ullamcorper pretium, dui ipsum t",
      TargetImage: TargetImg,
      TargetDesp:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis mattis erat eu molestie. Integer placerat, dui vel ullamcorper pretium, dui ipsum t",
      useCaseImage: UseCaseImg,
      useCaseDesp:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis mattis erat eu molestie. Integer placerat, dui vel ullamcorper pretium, dui ipsum t",
      callBack: OpenPrakruthi,
    },

    {
      ProjectName: "Vaikhari",
      ProjectDesp:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde voluptates beatae fuga deleniti deserunt quisquam possimus laudantium veritatis quo sed.",
      ProjectImage: vaikhari,
      ProjectLink: "https://energon.in",
      ProductImage: ProductImg,
      ProductDesp:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis mattis erat eu molestie. Integer placerat, dui vel ullamcorper pretium, dui ipsum t",
      TargetImage: TargetImg,
      TargetDesp:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis mattis erat eu molestie. Integer placerat, dui vel ullamcorper pretium, dui ipsum t",
      useCaseImage: UseCaseImg,
      useCaseDesp:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis mattis erat eu molestie. Integer placerat, dui vel ullamcorper pretium, dui ipsum t",
      callBack: OpenVaikhari,
    },
  ];
  const Card = (data) => {
    window.alert(data);
  };

  return (
    <>
      <section className="Projects">
        <header>
          <img src={ProjectourWork} alt="error loading in image." />
          <h1>Our Work</h1>
        </header>

        <section className="ProjectsCards">
          {/* <div className="Card">
            <img src={vaikhari} alt="error loading" />
            <h1>Vaikhari</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              posuere gravida semper. Donec maximus elit molestie.
            </p>
            <p className="Link">Learn More</p>
          </div>*/}

          {ProjectDetails.map((details, index) => {
            return (
              <>
                <div
                  className="Card"
                  onClick={details.callBack}
                >
                  <img src={details.ProjectImage} alt="error loading" />
                  <h1>{details.ProjectName}</h1>
                  <p>{details.ProjectDesp}</p>
                  <p className="Link">Learn More</p>
                </div>
                ;
              </>
            );
          })}
        </section>
      </section>

      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modalSection">
              header 
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default Projects;
