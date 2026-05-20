import axios from "axios";

const TodoList = ({ todos, fetchTodos, token }) => {
    return (
        <ul>
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
        
  );
};

export default TodoList;