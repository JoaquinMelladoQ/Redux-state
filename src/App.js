import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as duck from './reducers'
import UserForm from './components/UserForm'
import logo from './logo.svg'
import './App.css'


class App extends Component {
  handleSetear = e => {
    const { setear } = this.props
    const { valor } = this.state 
    setear(Number(valor)) 
  }

  handleChange = e => {
     const { name, value } = e.target
     this.setState({ [name]: value })
  }

  render() {
    const { incrementar, decrementar, valor  } = this.props
    return (
      <div className="App">

        <p>{valor}</p>
        <button onClick={incrementar} >Incrementar</button>
        <button onClick={decrementar} >Decrementar</button>
        <input name='valor' onChange={this.handleChange} />
        <button onClick={this.handleSetear} >Setear</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
   return {
    valor: state.contador,
  }
}  

const mapDispatchToProps = dispatch => bindActionCreators(duck, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
