import { ProxyState } from "../AppState.js";
import todoService from "../Services/TodoService.js";

function _drawTodos() {
  let completedCount = 0
  let template = ``
  ProxyState.todos.forEach(t => {template += t.Template; if(t.completed){completedCount++}})
  let countTemplate = /*html*/`<h4 class="text-center">To-Dos</h4><h5 class="text-center">${completedCount}/${ProxyState.todos.length}</h5>`
  document.getElementById('todos').innerHTML = countTemplate + template
}

export default class TodoController {
  constructor() {
    ProxyState.on("todos", _drawTodos)
    todoService.getTodos();
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }
  addTodo(e) {
    e.preventDefault();
    var form = e.target;
    var todo = {
      description: form.description.value,
    };
    try {
      todoService.addTodo(todo);
    } catch (error) {
      console.error(error)
    }
    form.reset()
  }

  /**
 * This method takes in an id of the Todo that should be togggled as complete
 * @param {string} todoId 
 */
  toggleTodoStatus(todoId) {
    try {
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId 
   */
  removeTodo(todoId) {
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }
}