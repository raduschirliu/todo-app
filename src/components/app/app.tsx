import React from 'react';
import { observer } from 'mobx-react';
import styles from './app.module.scss';
import Navbar from '../navbar/navbar';
import TodoCard from '../todo-card/todo-card';
import NewTodoCard from '../new-todo-card/new-todo-card';
import todoStore from '../../stores/todo-store';

@observer
class App extends React.Component {
  render() {
    let todos = todoStore.todos.slice().reverse();

    return (
      <div className={styles.container}>
        <Navbar />

        <div className={styles.cardContainer}>
          <NewTodoCard />
          
          {todos.map(todo => (
            <TodoCard key={todo.id} todo={todo}/>
          ))}
        </div>
      </div>
    );
  }
}

export default App;