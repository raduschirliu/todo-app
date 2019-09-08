import { observable } from 'mobx';
import Todo from '../models/todo';

class TodoStore {
  @observable public todos: Todo[] = [];

  // Adds a new Todo to the list
  add(todo: Todo) {
    this.todos.push(todo);
  }

  // Changes the 'completed' state of a Todo
  mark(target: Todo, state: boolean) {
    this.todos = this.todos.map(todo => {
      if (todo !== target) return todo;
      
      todo.completed = state;
      return todo;
    });
  }
}

const todoStore = new TodoStore();
export default todoStore;