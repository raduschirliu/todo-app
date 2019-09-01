import React from 'react';
import styles from './navbar.module.scss';

class Navbar extends React.Component {
  render(): React.ReactNode {
    return (
      <div className={styles.container}>
        <p className={styles.title}>Todo App</p>
      </div>
    );
  }
}

export default Navbar;