import React from "react";
import "./ToDoCard.scss";

const ToDoCard = (props) => {
  const { cardText, taskDelete, key, taskDone } = props;

  return (
    <form className="card" onSubmit={taskDelete} key={key}>
      <div className="card__left" onClick={taskDone}>
        <input type="checkbox" className="card__checkbox" />
        <h2 className="card__text">{cardText}</h2>
      </div>
      <input type="submit" value="X" checked={false}/>
    </form>
  );
};

export default ToDoCard;
