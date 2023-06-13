import { HttpClient } from "./httpClient";

console.log(process.env.REACT_APP_PROD_URL);

const port = process.env.PORT || 5000;

const API = process.env.REACT_APP_PROD_URL || `http://localhost:${port}`;

const TODO_API = `${API}/todos`;

const createTodo = todo => {
    return HttpClient.post(TODO_API,todo);
}
const getTodos = () => {
    return HttpClient.get(TODO_API)
}
    //Update
const updateTodo = todo => {
    return HttpClient.put(`${API}/todo/${todo._id}`, todo)
}
    //Delete
const removeTodo = todo => {
    return HttpClient.delete(`${API}/todo/${todo._id}`)
}
    //Encapsulating in a JSON object
const TodoApi = {createTodo, getTodos, updateTodo, removeTodo}

export {TodoApi}