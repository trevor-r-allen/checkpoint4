export default class Todo {
  constructor({_id, id, description, completed}) {
    this.id = id || _id;
    this.description = description;
    this.completed = completed;
  }

  get Template() {
    return /*html*/`
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onclick="app.todoController.toggleTodoStatus('${this.id}')" ${this.completed?'checked':''}>
        <label class="form-check-label" for="flexCheckDefault">
          ${this.description}
        </label>
        <i class="fa fa-times text-danger" onclick="app.todoController.removeTodo('${this.id}')" aria-hidden="true"></i>
      </div>
    `
  }
}