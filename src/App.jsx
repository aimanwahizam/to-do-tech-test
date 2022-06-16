import { useState } from "react";
import "./App.scss";
import Button from "./components/Button/Button";
import InputBar from "./components/InputBar/InputBar";
import ToDoList from "./containers/ToDoList/ToDoList";

function App() {
  const [toDoItems, setToDoItems] = useState([]);

  const handleTaskAdd = (event) => {
    event.preventDefault();
    const taskInput = event.target[0].value;
    console.log(toDoItems);
    console.log(taskInput);
    const copyToDoItemsArray = [...toDoItems];
    const arrayWithNewTask = copyToDoItemsArray.concat(taskInput);
    console.log(arrayWithNewTask);
    setToDoItems(arrayWithNewTask);
  };

  const handleTaskDelete = (event) => {
    event.preventDefault();
    event.target.style.display = "none";
  };

  const handleTaskDone = (event) => {
    console.log(event);
    const parentElement = event.target.parentElement;
    console.log(parentElement);
    const parentElementChildren = parentElement.children;
    console.log(parentElementChildren);
    if(parentElementChildren[0].checked = false) {
      parentElementChildren[0].checked = true;
    }
    if (!parentElementChildren[1].style.textDecoration) {
      parentElementChildren[1].style.textDecoration = "line-through"
    }

  };

  return (
    <main>
      <section className="header">
        <h1>My Todos</h1>
        <Button buttonText="Reset" />
      </section>
      <InputBar addTask={handleTaskAdd} />
      <ToDoList
        toDoArray={toDoItems}
        taskDelete={handleTaskDelete}
        taskDone={handleTaskDone}
      />
    </main>
  );
}

export default App;
