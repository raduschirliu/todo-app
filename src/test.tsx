import React from 'react';
import styles from './test.module.css';

class TestComp extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h3>Test comp!</h3>
      </div>
    );
  }
}

export default TestComp;