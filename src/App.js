import logo from "./logo.svg";
import "./App.css";
import Imageslider from "./components/Imageslider.js";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Aboutus from "./components/Aboutus";
import Impact from "./components/Impact";
import Brands from "./components/Brands";
import Footer from "./components/Footer";
const slides = [
  {
    url: "https://i0.wp.com/career-corner.in/wp-content/uploads/2022/05/Delhi-2012.jpg?w=640&ssl=1",
  },
  {
    url: "https://i0.wp.com/career-corner.in/wp-content/uploads/2022/05/IMG_6146-scaled.jpg?resize=640%2C427&ssl=1",
  },
  {
    url: "https://i0.wp.com/career-corner.in/wp-content/uploads/2022/05/DSC_8135-scaled.jpg?resize=640%2C425&ssl=1",
  },
  {
    url: "https://i0.wp.com/career-corner.in/wp-content/uploads/2022/05/delhi-2012-2.jpg?w=640&ssl=1",
  },
  {
    url: "https://i0.wp.com/career-corner.in/wp-content/uploads/2022/05/DSC_8134-scaled.jpg?resize=640%2C425&ssl=1",
  },
];
function App() {
  return (
    <>
      <Navbar />
      <div
        style={{
          width: "700px",
          maxWidth: "100%",
          height: "392px",
          margin: "0 auto",
          marginTop: "30px",
        }}
      >
        <Imageslider slides={slides} />
      </div>
      <div
        style={{
          width: "100%",
          height: "auto",
          marginTop: "20px",
        }}
      >
        <Aboutus />
      </div>
      <div
        style={{
          width: "100%",
          height: "auto",
          marginTop: "20px",
          overflow: "hidden",
        }}
      >
        <Impact />
      </div>
      {/* <div
        style={{
          width: "100%",
          height: "400px",
          marginTop: "20px",
        }}
      >
        <Brands />
      </div> */}
      <div
        style={{
          width: "100%",
          height: "400px",
        }}
      >
        <Footer />
      </div>
    </>
  );
}

export default App;
