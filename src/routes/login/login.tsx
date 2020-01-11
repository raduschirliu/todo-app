import React from 'react';
import styles from './login.module.scss';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export default class Login extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <form className={styles.form}>
          <TextField
            required
            className={styles.textField}
            label="Username"
            variant="outlined"
          />
          <TextField
            required
            className={styles.textField}
            label="Password" 
            type="password"
            variant="outlined"
          />

          <Button color="primary">Login</Button>
        </form>
      </div>
    );
  }
}