import React from "react";
import "./impactcss.css";
import CountUp from "react-countup";

const Impact = () => {
  return (
    <>
      <div
        style={{
          margin: "20px",
        }}
      >
        <hr></hr>
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "40px",
          color: "orange",
          marginTop: "20px",
        }}
      >
        Our Impact
      </div>
      <div className="row">
        <div className="column">
          <div
            style={{
              fontSize: "60px",
              textAlign: "center",
              color: "darkgray",
            }}
          >
            <CountUp end={300} duration={3} />
          </div>
          <h2 style={{ color: "skyblue" }}>Career Guidance Sessions</h2>
        </div>
        <div className="column">
          <div
            style={{ fontSize: "60px", textAlign: "center", color: "darkgray" }}
          >
            <CountUp end={10} duration={3} />
          </div>
          <h2 style={{ color: "skyblue" }}>Years in Action</h2>
        </div>
        <div className="column">
          <div
            style={{ fontSize: "60px", textAlign: "center", color: "darkgray" }}
          >
            <CountUp end={50000} duration={3} />
          </div>
          <h2 style={{ color: "skyblue" }}>Students and Professionals</h2>
        </div>
      </div>
    </>
  );
};

export default Impact;
