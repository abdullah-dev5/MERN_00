import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
const Table = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getAllTodo();
  }, []);
  const getAllTodo = async () => {
    const response = await axios.get("http://localhost:7000/todo");
    setTodos(response.data);
  };

  return (
    <React.Fragment>
      
      <div className="m-2 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Date&Time
              </th>

              <th scope="col" className="px-6 py-3">
                Update
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todoItem, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {todoItem.text}
                </th>
                <td className="px-6 py-4">
                  {todoItem.status ? "Completed " : "Pending"}
                </td>
                <td className="px-6 py-4">
                 {
                  todoItem.date
                 } </td>
                <td className="px-6 py-4">
                  <button
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
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
                </td>

                <td className="px-6 py-4">
                <button
                    className="p-2  font-medium text-white bg-blue-600 dark:bg-blue-500 hover:underline rounded border border-1 border-blue-500"
                    onClick={async () => {
                      const id = todoItem._id;
                        console.log("ID in React :"+id)
                      await axios.delete(`http://localhost:7000/todo/${id}`, {id} );
                      getAllTodo();
                    }}
                  >
                    Remove{" "}
                  </button>
 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default Table;
