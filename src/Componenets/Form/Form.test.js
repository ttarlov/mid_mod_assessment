import React from 'react'
import { render, getByText, fireEvent, getByPlaceholderText } from '@testing-library/react'
import '@testing-library/jest-dom';
import Form from './Form'

describe('Form Component', () => {
    const mockAddReservation = jest.fn();

    const { getByPlaceholderText, getByText } = render(
        <Form addReservation = {mockAddReservation}/>
    )


    it('should be able to fill out inputs', () => {
        const nameInput = getByPlaceholderText('Name');
        const dateInput = getByPlaceholderText('Date (mm/dd)');
        const numGuests = getByPlaceholderText('Number of guests');
        const addResBtn = getByText('Make Reservation');

        fireEvent.change(nameInput, {target:{value:'Taras'}})
        fireEvent.change(dateInput, {target:{value:'10/10'}})
        fireEvent.change(numGuests, {target:{value:2}})
        fireEvent.click(addResBtn);

        expect(nameInput).toBeInTheDocument()
        expect(dateInput).toBeInTheDocument()
        expect(numGuests).toBeInTheDocument()
        expect(mockAddReservation).toHaveBeenCalledTimes(1)
    });




});