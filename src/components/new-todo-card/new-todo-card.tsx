import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import NoteAdd from '@material-ui/icons/NoteAdd';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import styles from './new-todo-card.module.scss';
import todoStore from '../../stores/todo-store';

interface State {
  open: boolean;
  title: string;
  date: Date;
}

class NewTodoCard extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      open: false,
      title: '',
      date: new Date()
    };
  }

  // Opens the card
  open() {
    if (this.state.open) return;
    this.setState({ open: true });
  }

  // Create the todo and close the card
  create() {
    todoStore.add({
      id: todoStore.todos.length.toString(),
      title: this.state.title,
      date: this.state.date,
      completed: false,
    })

    this.setState({
      open: false,
      title: '',
      date: new Date()
    })
  }

  onTitleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    event.persist();
    this.setState({ title: event.target.value });
  }

  onDateChange(date: MaterialUiPickersDate) {
    this.setState({ date: date as Date });
  }

  // Render the contents of the card based on whether it's opened or not
  renderContents(): React.ReactNode {
    if (this.state.open) {
      return (
        <div className={styles.content}>
          <IconButton className={styles.add} onClick={this.create.bind(this)}>
            <NoteAdd />
          </IconButton>

          <TextField
            label="Title"
            className={styles.title}
            value={this.state.title}
            onChange={this.onTitleChange.bind(this)}
            margin="normal"
          />

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              label="Date"
              value={this.state.date}
              onChange={this.onDateChange.bind(this)}
            />
          </MuiPickersUtilsProvider>
        </div>
      );
    } else {
      return (
        <p className={styles.closedTitle}>Create a new todo...</p>
      );
    }
  }

  // Render card container and contents
  render(): React.ReactNode {
    return (
      <div
        className={styles.container + ' ' + (this.state.open ? styles.open : '')}
        onClick={this.open.bind(this)}
      >
        {this.renderContents()}
      </div>
    );
  }
}

export default NewTodoCard;