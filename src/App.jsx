import { useState, useEffect } from "react";
import "./App.scss";
import Button from "./components/Button/Button";
import InputBar from "./components/InputBar/InputBar";
import ToDoList from "./containers/ToDoList/ToDoList";

function App() {
  const [toDoItems, setToDoItems] = useState([]);


  const handleTaskAdd = (event) => {
    event.preventDefault();
    const taskInput = event.target[0].value;
    console.log(toDoItems)
    console.log(taskInput);
    const copyToDoItemsArray = [...toDoItems];
    const arrayWithNewTask = copyToDoItemsArray.concat(taskInput);
    console.log(arrayWithNewTask);
    setToDoItems(arrayWithNewTask);
  };

  return (
    <main>
      <section className="header">
        <h1>My Todos</h1>
        <Button buttonText="Reset" />
      </section>
      <InputBar addTask={handleTaskAdd} />
      <ToDoList toDoArray={toDoItems}/>
    </main>
  );
}

export default App;
