//goals for this todo application:
// we have to firstly complete what sonny is doing, we have to style it, and then publish it to github...
// after our code is safe, Its time to break it.
// we are going to have a delete function, we are going to have a sig-up/sign-in function,
// and of course we will try to make it a MERN stack build.
import React, { useState } from "react";
import Todo from "./Todo";
import "@material-ui/core";
import Button from "@material-ui/core/Button";
import "./App.css";
function App() {
  // react way of writing a variable
  const [inputText, setInputText] = useState("");

  const [todos, setTodos] = useState([]);
  const addATodo = (e) => {
    e.preventDefault();
    setInputText("");
    setTodos([...todos, inputText]);
    console.log("here are your todos: ", [...todos, inputText]);
  };
  return (
    <div className="app">
      <form>
        <h1>Pri's To-do List</h1>
        <input
          type="text"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
          placeholder="Enter A Todo Here!"
        ></input>
        <Button
          variant="contained"
          color="primary"
          onClick={addATodo}
          disabled={!inputText}
          type="submit"
        >
          Add A Todo
        </Button>
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </form>
    </div>
  );
}

export default App;
