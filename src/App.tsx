import React from 'react';
import styles from './App.module.css';
import TestComp from './test';

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h2>Test</h2>
        <p>More testing</p>
        <TestComp/>
      </div>
    );
  }
}

export default App;