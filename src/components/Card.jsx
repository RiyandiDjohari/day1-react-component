import React from "react";

const Card = ({ title, subTitle }) => {
  return (
    <div className="card">
      <h2 style={{ marginBottom: "1rem" }}>{title}</h2>
      <h3>{subTitle}</h3>
    </div>
  );
};

export default Card;
