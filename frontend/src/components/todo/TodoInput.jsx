        
 const TodoInput = ({ input, setInput, addTodo }) => {      
    return (
        <div className="flex items-center my-7 bg-gray-200 rounded-full">
            
            <input
            value={input}
            onChange={ (e) => setInput(e.target.value)}
            onKeyDown={(e) => {
            if (e.key === "Enter") addTodo()
            }}
            className='bg-transparent rounded-full outline-none flex-1 h-12 sm:h-14 pl-4 sm:pl-6 pr-2 placeholder:text-slate-600 font-semibold text-sm sm:text-base'
            type="text"
            placeholder='Add new task'/>
            
           <button onClick={addTodo}
             className='border-none rounded-full bg-amber-600 w-24 sm:w-28 md:w-32 h-12 sm:h-14 text-white text-sm sm:text-base md:text-lg
             font-medium cursor-pointer transform transition-transform duration-200 hover:scale-110'
             >ADD<i className="fa-solid fa-plus"></i>

            </button>
        </div>
    )
 }
 export default TodoInput