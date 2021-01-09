import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { api } from "../Services/AxiosService.js";


let url = 'trevor/todos/'

class TodoService {
  async getTodos() {
    console.log("Getting the Todo List");
    let res = await api.get(url);
    console.log(res.data)
    ProxyState.todos = res.data.map(t => new Todo(t))
  }

  async addTodo(todo) {
    let res = await api.post(url, todo);
    console.log(res.data)
    ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
  }

  async toggleTodoStatus(todoId) {
    let todos = ProxyState.todos

    let todo = todos.find(t => t.id == todoId);
    let todoIndex = todos.indexOf(todo)
    if(todo) {
      todo.completed ? todo.completed = false : todo.completed = true
      }
    await api.put(url + todoId, todo);
    todos.splice(todoIndex, 1, todo)
    ProxyState.todos = todos
  }

  async removeTodo(todoId) {
    let res = await api.delete(url + todoId);
    console.log(res.data)
    ProxyState.todos = ProxyState.todos.filter(t => t.id !== todoId)
  }
}

const todoService = new TodoService();
export default todoService;