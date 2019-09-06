class TodoStore {
  public todos: {}[] = [];

  add(todo: {}) {
    this.todos.push(todo);
  }
}

const todoStore = new TodoStore();
export default todoStore;