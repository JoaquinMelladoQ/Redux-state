import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from './logo.svg'
import './App.css'


class App extends Component {

  render() {
    console.log(this.props)
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

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(App);
