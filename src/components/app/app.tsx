import React from 'react';
import styles from './app.module.scss';
import Navbar from '../navbar/navbar';

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Navbar />
      </div>
    );
  }
}

export default App;