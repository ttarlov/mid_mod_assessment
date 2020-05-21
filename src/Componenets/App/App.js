import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form'
import CardContainer from '../CardContainer/CardContainer'




class App extends Component {
    constructor() {
      super();
      this.state = {
        resCards: [{"id":1,"name":"Christie","date":"12/29","time":"7:00","number":12}]
      }
    }










  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        <Form />
        </div>
        <div className='resy-container'>
          <CardContainer resCards = {this.state.resCards} />
        </div>
      </div>
    )
  }
}

export default App;
