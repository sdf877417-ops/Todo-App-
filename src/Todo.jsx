import React from "react";
import { useState } from "react";

function Todo() {
  const [newtodo, setNewtodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newtodo) {
      setTodos([...todos, { text: newtodo}]);
      console.log(`value of todos obj :`, todos);
      setNewtodo("");
    }
  };

  //   const handleDelete = (index) => {
  //     const newtodos = [...todos];
  //     newtodos[index].completed = !newtodos[index].completed;
  //     setTodos(newtodos);

  //     console.log(`delet wale nowtodos :`, newtodos);
  //   };
  const handleDelete = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
    console.log(`now value in setodo :`,todos)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          ✨ Todo App
        </h1>
        <p className="text-center text-gray-500 mb-6">
          
          furqans Todo Stay organized. Stay productive.
        </p>

        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
          <input
            placeholder="Add New Todo..."
            type="text"
            value={newtodo}
            onChange={(e) => setNewtodo(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition duration-300"
          >
            Add
          </button>
        </form>

        <div className="space-y-3">
          {todos.map((elem, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <span
                style={{
                  textDecoration: elem.completed ? "line-through" : "none",
                }}
                className="text-lg font-medium text-gray-700 break-words"
              >
                {elem.text}
              </span>

              <button
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition duration-300"
                onClick={() => handleDelete(index)}
              >
                Done
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;
