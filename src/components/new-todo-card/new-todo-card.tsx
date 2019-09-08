import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import NoteAdd from '@material-ui/icons/NoteAdd';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import styles from './new-todo-card.module.scss';
import todoStore from '../../stores/todo-store';
import { ClickAwayListener } from '@material-ui/core';

interface State {
  open: boolean;
  title: string;
  date: Date | null;
}

class NewTodoCard extends React.Component<{}, State> {
  datePickerOpen: boolean = false;

  // Returns if the card inputs are empty or not
  get cardEmpty() {
    return this.state.title === '' && this.state.date == null;
  }

  constructor(props: any) {
    super(props);

    this.state = {
      open: false,
      title: '',
      date: null
    };
  }

  // Opens the card
  open() {
    if (this.state.open) return;
    this.setState({ open: true });
  }

  // Closes the card and resets all fields
  close() {
    this.setState({
      open: false,
      title: '',
      date: null
    });
  }

  // Create the todo and close the card
  create() {
    todoStore.add({
      id: todoStore.todos.length.toString(),
      title: this.state.title,
      date: this.state.date,
      completed: false,
    })

    this.close();
  }

  // Called when the card is open, and user clicks away
  onClickAway() {
    if (this.cardEmpty && !this.datePickerOpen) this.close();
  }

  // Called when the title input changes
  onTitleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    event.persist();
    this.setState({ title: event.target.value });
  }

  // Called when the date input changes
  onDateChange(date: MaterialUiPickersDate) {
    this.setState({ date: date as Date });
  }

  // Render the contents of the card based on whether it's opened or not
  renderContents(): React.ReactNode {
    if (this.state.open) {
      return (
        <ClickAwayListener onClickAway={this.onClickAway.bind(this)}>
          <div className={styles.content}>
            <IconButton
              className={styles.add}
              onClick={this.create.bind(this)}
              disabled={this.state.title === ''}
            >
              <NoteAdd />
            </IconButton>

            <TextField
              label="Title"
              classes={{ root: styles.title }}
              value={this.state.title}
              onChange={this.onTitleChange.bind(this)}
              margin="none"
            />

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                variant="inline"
                className={styles.date}
                format="MM/dd/yyyy"
                margin="none"
                label="Date"
                value={this.state.date}
                onChange={this.onDateChange.bind(this)}
                onOpen={() => this.datePickerOpen = true}
                onClose={() => this.datePickerOpen = false}
              />
            </MuiPickersUtilsProvider>
          </div>
        </ClickAwayListener>
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