import React from "react";
import { useState } from "react";

function Todo() {
  const [newtodo, setNewtodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();

    if (isUpdating !== false) {
      setTodos((prev) =>
        prev.map((elem) =>
          elem.id === isUpdating ? { ...elem, text: newtodo } : elem,
        ),
      );

      setNewtodo("");
      setIsUpdating(false);

      return;
    }

    if (newtodo) {
      setTodos([...todos, { id: id, text: newtodo }]);
      console.log(`value of todos obj :`, todos);

      setNewtodo("");
      console.log(`testing chage`);
    }
  };

  // delting items in todos
  const handleDelete = (indexToDelete) => {
    setTodos(todos.filter((elem, index) => index !== indexToDelete));
  };

  const handleUpdate = (updateData) => {
    console.log("udpated data is :->", updateData);
    setNewtodo(updateData.text);
    setIsUpdating(updateData.id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          ✨ Todo App ✨
        </h1>
        <p className="text-center text-gray-700 mb-6 p-5">
          Furqans Todo Stay organized. Stay productive.
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
              <span className="text-lg font-medium text-gray-700 break-words">
                {elem.text}
              </span>

              <button
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition duration-300"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>

              <button
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg transition duration-300"
                onClick={() => handleUpdate(elem)}
              >
                update
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;
