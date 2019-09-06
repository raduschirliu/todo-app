import React from 'react';
import styles from './new-todo-card.module.scss';

interface State {
  open: boolean;
}

class NewTodoCard extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      open: false
    };
  }

  open() {
    this.setState({ open: true });
  }

  renderContents(): React.ReactNode {
    if (this.state.open) {
      return (
        <div className={styles.content}>

        </div>
      );
    } else {
      return (
        <p className={styles.closedTitle}>Create a new todo...</p>
      );
    }
  }

  render(): React.ReactNode {
    return (
      <div
        className={ styles.container + ' ' + (this.state.open ? styles.open : '') }
        onClick={this.open.bind(this)}
      >
        { this.renderContents() }
      </div>
    );
  }
}

export default NewTodoCard;