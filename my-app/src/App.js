import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './Container';
class App extends Component {
  render() {
    //const { title, size } = this.props;
    const styles = {
        Topdiv: {
             backgroundColor:"lightblue"
        }
    };


    return (
        <div style={styles.Topdiv} >
          <p>App level Area</p>
           <Container></Container>
           <p>End of App level Area</p>
        </div>
      );
  }
}

export default App;
