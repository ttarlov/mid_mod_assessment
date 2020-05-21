import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form'
import CardContainer from '../CardContainer/CardContainer'
import '../../apiCalls'
import { getResCards } from '../../apiCalls';



class App extends Component {
    constructor() {
      super();
      this.state = {
        // resCards: [{"id":1,"name":"Christie","date":"12/29","time":"7:00","number":12}]
      resCards: []
      }
    }



    componentDidMount() {
      getResCards()
      .then(reservations=> {
        this.setState({resCards:[...this.state.resCards, ...reservations]})
      })
    }



    addReservation = (incomingRes) => {
      this.setState({resCards: [...this.state.resCards, incomingRes]})
    }




  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        <Form addReservation = {this.addReservation}/>
        </div>
        <div className='resy-container'>
          <CardContainer resCards = {this.state.resCards} />
        </div>
      </div>
    )
  }
}

export default App;
