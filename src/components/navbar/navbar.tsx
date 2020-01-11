import React from 'react';
import styles from './navbar.module.scss';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
  render(): React.ReactNode {
    return (
      <div className={styles.container}>
        <Link className={styles.title} to="/">Todo App</Link>

        <div className={styles.actions}>
          <Link className={styles.item} to="/login">Login</Link>
        </div>
      </div>
    );
  }
}