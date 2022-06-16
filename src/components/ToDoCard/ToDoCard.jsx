import React from "react";
import "./ToDoCard.scss";

const ToDoCard = (props) => {
  const { cardText } = props;

  return (
    <form className="card">
      <div className="card__left">
        <input type="checkbox" className="card__checkbox" />
        <h2 className="card__text">{cardText}</h2>
      </div>
      <input type="submit" />
    </form>
  );
};

export default ToDoCard;
