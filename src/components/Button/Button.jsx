import React from "react";

import "./Button.scss";

const Button = (props) => {
  const { buttonText, clickFunction } = props;
  return (
    <button className="button" onClick={clickFunction}>
      {buttonText}
    </button>
  );
};

export default Button;
