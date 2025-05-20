import React from "react";

const Card = (props) => {
  return (
    <div className="bg-slate-700 my-10 py-4">
      <h1 className="text-3xl text-white">Username is {props.a}</h1>
    </div>
  );
};

export default Card;
