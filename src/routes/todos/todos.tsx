import React from 'react';
import styles from './todos.module.scss';
import NewTodoCard from './new-todo-card/new-todo-card';
import TodoCard from './todo-card/todo-card';
import todoStore from '../../stores/todo-store';
import { observer } from 'mobx-react';

@observer
export default class Todos extends React.Component {
  render() {
    let todos = todoStore.todos.slice().reverse();

    return (
      <div className={styles.container}>
        <NewTodoCard />
        
        {todos.map(todo => (
          <TodoCard key={todo.id} todo={todo}/>
        ))}
      </div>
    );
  }
}