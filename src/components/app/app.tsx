import React from 'react';
import styles from './app.module.scss';
import Navbar from '../navbar/navbar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Todos from '../../routes/todos/todos';
import Login from '../../routes/login/login';

export default class App extends React.Component {
  render() {
    let theme = createMuiTheme({
      palette: {
        primary: {
          main: '#2D9CDB'
        }
      }
    });

    return (
      <ThemeProvider theme={theme}>
        <div className={styles.container}>
          <Router>
            <Navbar />

            <div className={styles.content}>
              <Switch>
                <Route path="/login">
                  <Login />
                </Route>

                <Route exact path="/">
                  <Todos />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      </ThemeProvider>
    );
  }
}