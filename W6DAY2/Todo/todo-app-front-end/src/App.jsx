import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import React from "react";
import axios from "axios";
import Lottie from 'lottie-react'
import Anime from './assets/Anime.json'

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
  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }

  return (
    <React.Fragment >
      <div className="m-1 w-screen p-4 h-screen flex  bg-slate-200  gap-5 justify-start ">
     
        <div className=" flex  flex-row justify-center items-center object-cover  w-1/2   ">
        <Lottie loop={true} animationData={Anime}
        style={{height:"700px" , width: "700px", paddingTop: "150px",color:'blue' }}/>
        </div>

        <div className="w-1/2 gap-5 p-4 flex  flex-row justify-center items-center ">
       
          <form required 
            className="m-2 p-2 flex flex-col gap-3 justify-end"
            onSubmit={async (e) => {  
              e.preventDefault();
              const response = await axios.post("http://localhost:7000/todo", {
                status: status,
                text: text,
                date : getDate(),
              });
              setText("")
            }}
          >
            <textarea required
           className="peer h-full min-h-[100px] w-full resize-none rounded-[15px] border border-blue-gray-600 border-t-transparent   px-3 py-2.5 font-sans text-sm font-normal 
           text-blue-gray-700 outline outline-0 transition-all
            placeholder-shown:border placeholder-shown:border-blue-gray-200 
           placeholder-shown:border-t-blue-gray-200 focus:border-2
            focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:resize-none 
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
            <button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
