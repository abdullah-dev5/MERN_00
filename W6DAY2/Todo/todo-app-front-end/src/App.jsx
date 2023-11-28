import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import React from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [status, setStatus] = useState(false);
  useEffect(() => {
    getAllTodo();
  }, []);
  const getAllTodo = async () => {
    const response = await axios.get("http://localhost:7000/todo");
    setTodos(response.data);
  };

  return (
    <React.Fragment>
     <div className="m-2 bg-slate-500 flex flex-col gap-2 justify-center items-center "> 
      <form className="m-2 p-2"
        onSubmit={async (e) => {
          e.preventDefault();
          const response = await axios.post("http://localhost:7000/todo", {
            status: status,
            text: text,
          });
        }}
      >
        <textarea
          value={text}
          placeholder="Enter Tasks "
          id=""
          cols="30"
          rows="10"
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>

        <label htmlFor="true">Complete</label>
        <input
          type="radio"
          name="status"
          id="true"
          onClick={() => {
            setStatus(true);
          }}
          placeholder="Task Text"
          value={status}
        />
        <label htmlFor="false">Pending</label>
        <input
          type="radio"
          placeholder="Task Text"
          name="status"
          id="false"
          value={status}
          onClick={() => {
            setStatus(false);
          }}
        />
        <button type="submit">Submit</button>
      </form>

      <button onClick={getAllTodo}>Get Todo</button>
      {todos.map((todoItem, index) => (
        <div key={index}>
          Text: {todoItem.text}
          &nbsp; status: {JSON.stringify(todoItem.status)}
          <button
            onClick={async () => {
              const id = todoItem._id;
              const updatedStatus = !todoItem.status;
              await axios.patch("http://localhost:7000/todo", {
                id,
                status: updatedStatus,
              });
              getAllTodo();
            }}
          >
            Change Status{" "}
          </button>
        </div>
      ))}</div>
    </React.Fragment>
  );
}

export default App;
