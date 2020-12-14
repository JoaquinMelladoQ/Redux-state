import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementar, decrementar, setear } from './reducers'
import logo from './logo.svg'
import './App.css'


class App extends Component {

  render() {
    const { incrementar, decrementar, setear, valor  } = this.props
    return (
      <div className="App">
        <p>{valor}</p>
        <button onClick={incrementar} >Incrementar</button>
        <button onClick={decrementar} >Decrementar</button>
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
