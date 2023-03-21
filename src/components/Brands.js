import React from "react";
import Card from "./card";
import meritologo from "../images/meritologo.webp";

const Brands = () => {
  return (
    <>
      <div
        style={{
          margin: "10px",
        }}
      >
        <hr />
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "40px",
          margin: "10px",
        }}
      >
        Our Brands
      </div>
      {/* <div
        style={{
          width: "100%",
          height: "400px",
          marginTop: "20px",
        }}
      > */}
      <Card title="merito academy" subtitle="our brands" url={meritologo} />
      {/* <card/> */}
      {/* </div> */}
    </>
  );
};

export default Brands;
