import { useState, useEffect } from "react"
import axios from "axios"

import TodoInput from "../components/todo/TodoInput"
import TodoList from "../components/todo/TodoList"

const Todo = () => {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  
  const token = localStorage.getItem("token")

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    try {
      const res = await axios.get("http://localhost:5000/todos", {
      headers: {
      Authorization: `Bearer ${token}`
      }
    });
      setTodos(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  const addTodo = async () => {
    if (input.trim()) {
      try {
        const res = await axios.post("http://localhost:5000/todos",
          { text: input }, {
      headers: {
      Authorization: `Bearer ${token}`
      }
      });
       
        setTodos([res.data, ...todos])
        setInput("")
      } catch (err) {
        console.error(err)
      }
    }
  }

  return (
    <div className="min-h-screen flex items-start pt-10 sm:pt-16 md:pt-20 justify-center bg-gradient-to-r from-red-700 to-amber-400 p-4">
    
      <div className="bg-white shadow-lg rounded-[2vw] p-4 sm:p-8 md:p-12 lg:p-16 w-full max-w-5xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center cursor-default text-gray-900 mb-6">ToDo LIST<i className="fa-solid fa-bars-progress"></i></h1>
      
        <TodoInput input={input} setInput={setInput} addTodo={addTodo} />

        <TodoList todos={todos} fetchTodos={fetchTodos} token={token} />
      
      </div>

    </div>

  );
};    

export default Todo;