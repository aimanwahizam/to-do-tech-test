import { useState, useEffect } from "react";
import "./App.scss";
import Button from "./components/Button/Button";
import SearchBar from "./components/SearchBar/SearchBar";
import ToDoList from "./containers/ToDoList/ToDoList";

function App() {
  const [toDoItem, setToDoItem] = useState([]);


  const handleTaskAdd = (event) => {
    event.preventDefault();
    const taskInput = event.target[0].value;
    console.log(toDoItem)
    console.log(taskInput);
    const copyToDoItemArray = [...toDoItem];
    const arrayWithNewTask = copyToDoItemArray.concat(taskInput);
    console.log(arrayWithNewTask);
    setToDoItem(arrayWithNewTask);
  };

  return (
    <main>
      <section className="header">
        <h1>My Todos</h1>
        <Button buttonText="Reset" />
      </section>
      <SearchBar addTask={handleTaskAdd} />
      <ToDoList />
    </main>
  );
}

export default App;
