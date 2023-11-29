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
      <div className="m-2 w-screen h-screen bg-slate-200 flex  gap-5  items-center ">
        <div className=" p-2 border border-4 border-sky-500 rounded">
          <button className=" p-1 font-medium border border-2 border-purple-400 rounded text-white bg-purple-500 " onClick={getAllTodo}>
            Get Todo
          </button>
          {todos.map((todoItem, index) => (
            <div className=" flex flex-row gap-5" key={index}>
             <div className="border border-1 border-blue-200">
             Text: {todoItem.text}
              &nbsp; status: {todoItem.status ? "Completed ":"Pending"}
             
             </div>
              <button className=" p-1 border border-2 border-purple-500 bg-purple-400 text-white rounded "
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
          ))}
        </div>

        <div className="m-10 flex  flex-row justify-start items-start ">
       
          <form required 
            className="m-2 p-2 flex flex-col gap-3 justify-end"
            onSubmit={async (e) => {  
              e.preventDefault();
              const response = await axios.post("http://localhost:7000/todo", {
                status: status,
                text: text,
              });
              setText("")
            }}
          >
            <textarea required
           className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-600 border-t-transparent   px-3 py-2.5 font-sans text-sm font-normal 
           text-blue-gray-700 outline outline-0 transition-all
            placeholder-shown:border placeholder-shown:border-blue-gray-200 
           placeholder-shown:border-t-blue-gray-200 focus:border-2
            focus:border-purple-500 focus:border-t-transparent focus:outline-0 disabled:resize-none 
           disabled:border-0 disabled:bg-blue-gray-50"
          
     
           value={text}
              placeholder="Enter Tasks "
              id=""
              cols="30"
              rows="10"
              onChange={(e) => {
                setText(e.target.value);
              }}
            ></textarea>
                <div>
                <div class="grid sm:grid-cols-2 gap-2">
  <label htmlFor="false" class="flex p-3 block w-full bg-white border
   border-gray-200 rounded-lg text-sm
   focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
    <input  class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600
     focus:ring-blue-500 disabled:opacity-50
     disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" checked
     type="radio"
     placeholder="Task Text"
     name="status"
     id="false"
     value={status}
     onClick={() => {
       setStatus(false);
     }}
 
      />
    <span class="text-sm text-gray-500 ms-3 dark:text-gray-400">Pending</span>
  </label>

  <label htmlFor="true" class="flex p-3 block w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500
   dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
    <input class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700
     dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" 
               type="radio"
                name="status"
                id="true"
                onClick={() => {
                  setStatus(true);
                }}
                placeholder="Task Text"
                value={status}
                />
    <span class="text-sm text-gray-500 ms-3 dark:text-gray-400">Compelete</span>
  </label>
</div>
                </div>
            <button type="submit" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
