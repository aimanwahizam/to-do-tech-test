import React from "react";

import "./InputBar.scss";

const InputBar = (props) => {
  const { addTask } = props;

  return (
    <form className="input-bar" onSubmit={addTask}>
      <input type="text" className="input-bar__entry" />
      <input type="submit" value="+" />
    </form>
  );
};

export default InputBar;
