import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from './logo.svg'
import './App.css'


class App extends Component {

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log({state})
  return {
    state,
  }
}  

export default connect(mapStateToProps, mapDispatchToProps)(App);
