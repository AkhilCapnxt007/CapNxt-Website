// import logo from "./logo.svg";
// import "./App.css";
import Home from "./Components/Home";
import { Link, Route, Routes } from "react-router-dom";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import AboutUs from "./Components/AboutUs";
import Team_Career from "./Components/Team_Career";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/team" element={<Team_Career />} />
        <Route
          path="*"
          element={
            <>
              <div>
                <h1>
                  Page Not Found...
                  <span>
                    {" "}
                    <Link to="/">Home</Link>
                  </span>
                </h1>
              </div>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
