import { useState, useEffect } from "react"
import axios from "axios"

import TodoInput from "../components/todo/TodoInput"
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

        <ul className="">
            {
               todos.map((todo) => (
                    <li
                    key={todo["number of list"]}
                    className="flex items-center p-1 sm:p-2 md:p-3
                    rounded-full bg-slate-100 border-0 bg-transparent"
                     >
                        <input type="checkbox"
                        checked={todo.completed}
                        onChange={async () => {
                          await axios.put(`http://localhost:5000/todos/${todo["number of list"]}`, {
                            completed: !todo.completed
                          } , {
                             headers: {
                              Authorization: `Bearer ${token}`
                            }
                            }
                          );    
                          fetchTodos()
                        }}
                        className="mr-2 sm:mr-2 h-4 sm:h-5 w-4 sm:w-5 text-gray-600 cursor-pointer"
                        />
                        <span
                            className={`flex-grow ${todo.completed ? "line-through text-gray-500" : "text-gray-800"} font-medium`}
                        >
                            {todo["todo list"]}
                        </span>

                        <button onClick={async () => { await axios.delete(`http://localhost:5000/todos/${todo["number of list"]}`, {
                              headers: {
                            Authorization: `Bearer ${token}`
                              }
                            });  
                              fetchTodos()
                              }} className="cursor-pointer">
                             <div className="bg-transparent hover:opacity-75 text-black p-2 rounded-full transition-opacity duration-200">
                                <i className="fa-solid fa-delete-left text-3xl transform transition-transform duration-200 hover:scale-115"></i>
                             </div>

                        </button>
                        
                     </li>

                ))
            }
        </ul>
      </div>
    </div>
  )
}

export default Todo