import React from "react";

const Card = ({ title, subtitle, url }) => {
  return (
    <>
      <div className="card">
        <img src={url} className="card-img" />
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <h5 className="card-subtitle">{subtitle}</h5>
        </div>
      </div>
    </>
  );
};

export default Card;
