import { getTodos, postTodos, putTodos, deleteTodos } from "../model/todo.model.js";


export const getTodoController = async (req, res) => {
    
    const todoList = await getTodos()
    return res.json(todoList);
}
export const postTodoController = async (req, res) => {
    const { text } = req.body
    const addTodo = await postTodos(text)
    return res.json(addTodo);
}
export const putTodoController = async (req, res) => {
    const { id } = req.params
    const { completed } = req.body
    const updateTodo = await putTodos(id, completed)
    return res.json(updateTodo);
}
export const deleteTodoController = async  (req, res) => {
    const { id } = req.params
    const deleteTodo = await deleteTodos(id)
    return res.json(deleteTodo);
}