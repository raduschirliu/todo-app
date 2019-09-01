import React from 'react';
import styles from './App.module.scss';
import Navbar from './components/navbar/navbar';

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Navbar/>
      </div>
    );
  }
}

export default App;