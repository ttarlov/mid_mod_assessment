import React, { Component } from 'react';
import './Form.css'



class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {name:'', date:'', time: '', number: ''}
    }



    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };

    submitReservation = (event) => {
        event.preventDefault();
        this.props.addReservation(
            { id: Date.now(),
                name: this.state.name,
                date: this.state.date,
                time: this.state.time,
                number: this.state.number
            }
        );
        this.setState({name:'', date:'', time: '', number: ''});

    }



    render() {

        return(

            <form>
                <input
                    type = 'text'
                    name= 'name'
                    value = {this.state.name}
                    placeholder = 'Name'
                    onChange = {this.handleChange}
                    >
                </input>
                <input
                    type = 'date'
                    name= 'date'
                    value = {this.state.date}
                    placeholder = 'Date (mm/dd)'
                    onChange = {this.handleChange}
                    >
                </input>
                <input
                    type = 'time'
                    name= 'time'
                    value = {this.state.time}
                    placeholder = 'Time'
                    onChange = {this.handleChange}
                    >
                </input>
                <input
                    type = 'number'
                    name= 'number'
                    value = {this.state.number}
                    placeholder = 'Number of guests'
                    onChange = {this.handleChange}
                    >
                </input>
                <button onClick= {this.submitReservation}>Make Reservation</button>
            </form>


        )

    }






}


export default Form