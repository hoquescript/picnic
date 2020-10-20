import React from "react";

const StaticCard = ({ position, digit }) => {
  return (
    <div className={position}>
      <span>{digit}</span>
    </div>
  );
};

export default StaticCard;
