import { useState } from "react";
import "./App.scss";
import Button from "./components/Button/Button";
import InputBar from "./components/InputBar/InputBar";
import ToDoList from "./containers/ToDoList/ToDoList";

function App() {
  const [toDoItems, setToDoItems] = useState([]);

  const pageReset = () => {
    window.location.reload(false);
  };

  const handleTaskAdd = (event) => {
    event.preventDefault();
    const taskInput = event.target[0].value;
    const copyToDoItemsArray = [...toDoItems];
    const arrayWithNewTask = copyToDoItemsArray.concat(taskInput);
    setToDoItems(arrayWithNewTask);
  };

  const handleTaskDelete = (event) => {
    event.preventDefault();
    event.target.style.display = "none";
  };

  const handleTaskDone = (event) => {
    const parentElement = event.target.parentElement;
    const parentElementChildren = parentElement.children;
    if (!parentElementChildren[1].style.textDecoration) {
      parentElementChildren[1].style.textDecoration = "line-through";
    }
    if ((parentElementChildren[0].checked = "false")) {
      parentElementChildren[0].checked = "true";
    }
  };

  return (
    <main>
      <section className="header">
        <h1>My Todos</h1>
        <Button buttonText="Reset" clickFunction={pageReset}/>
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
