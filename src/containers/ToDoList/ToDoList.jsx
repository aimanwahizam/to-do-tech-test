import React from "react";
import ToDoCard from "../../components/ToDoCard/ToDoCard";

import "./ToDoList.scss";

const ToDoList = (props) => {
  const { toDoArray } = props;

  const ToDoListJSX = toDoArray.map(task => {
    return <ToDoCard />
  })
  return <div>ToDoList</div>;
};

export default ToDoList;
