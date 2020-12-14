import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementar, decrementar, setear } from './reducers'
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
    valor: state,
  }
}  

const mapDispatchToProps = dispatch => ({
  incrementar: () => dispatch(incrementar()),
  decrementar: () => dispatch(decrementar()),
  setear: payload => dispatch(setear(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
