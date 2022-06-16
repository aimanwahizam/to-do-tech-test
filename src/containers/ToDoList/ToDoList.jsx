import React from "react";
import ToDoCard from "../../components/ToDoCard/ToDoCard";

import "./ToDoList.scss";

const ToDoList = (props) => {
  const { toDoArray, taskDelete, taskDone } = props;

  const ToDoListJSX = toDoArray.map((task, index) => {
    return <ToDoCard cardText={task} taskDelete={taskDelete} key={index} taskDone={taskDone}/>
  })
  return <div className="card-list">{ToDoListJSX}</div>;
};

export default ToDoList;
