import React from 'react';
import styles from './app.module.scss';
import Navbar from '../navbar/navbar';
import TodoCard from '../todo-card/todo-card';
import NewTodoCard from '../new-todo-card/new-todo-card';
import todoStore from '../../stores/todo-store';

class App extends React.Component {
  render() {
    todoStore.add({});
    todoStore.add({});
    todoStore.add({});

    console.log(todoStore.todos.length);

    return (
      <div className={styles.container}>
        <Navbar />

        <div className={styles.cardContainer}>
          <NewTodoCard />
          
          {todoStore.todos.map(() => (
            <TodoCard />
          ))}
        </div>
      </div>
    );
  }
}

export default App;