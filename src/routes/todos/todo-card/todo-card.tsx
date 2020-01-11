import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import styles from './todo-card.module.scss';
import Todo from '../../../models/todo';

interface Props {
  todo: Todo;
}

interface State {
  todo: Todo;
}

class TodoCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      todo: props.todo
    };
  }

  getCompletedStyle() {
    return this.state.todo.completed ? styles.completed : '';
  }

  checkChanged(event: React.ChangeEvent<HTMLInputElement>) {
    event.persist();

    this.setState(state => {
      let todo = state.todo;
      todo.completed = event.target.checked;

      return { todo };
    });
  }

  render() {
    let date = null;

    if (this.state.todo.date != null) {
      date = (
        <p className={[styles.text, this.getCompletedStyle()].join(' ')}>
          {this.state.todo.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </p>
      );
    }

    return (
      <div className={[styles.container, this.getCompletedStyle()].join(' ')}>
        <div className={styles.content}>
          <Checkbox
            classes={{ root: styles.checkbox }}
            checked={this.state.todo.completed}
            onChange={this.checkChanged.bind(this)}
            color="primary"
          />
          
          <p className={[styles.title, styles.text, this.getCompletedStyle()].join(' ')}>{this.state.todo.title}</p>

          {date}
        </div>
      </div>
    );
  }
}

export default TodoCard;