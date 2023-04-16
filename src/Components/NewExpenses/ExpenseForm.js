import React, { useState } from "react";

import './ExpensesForm.css';

const ExpenseForm = () => {
    
    //*Using multiple state approach  
const [enteredTitle, setEnteredTitle] = useState('');
const [enteredAmount, setEnteredAmount] = useState('');
const [enteredDate, setEnteredDate] = useState('');

//*Using Single sate 
// const [enteredInput, setUserInput] = useState({
//     enteredTitle: '',
//     enteredAmount: '',
//     enteredDate: '',
// })

const textevent = (event) =>
{
    setEnteredTitle(event.target.value)

    //*Using single state method 1
    // setUserInput({
    //     ...enteredInput,enteredTitle: event.target.value
    // })

    //*Using single state method 2 (storing the preState)
    // setUserInput((prevState) => {
    //     return { ...prevState, enteredTitle: event.target.value}
    // })
}

const amountEvent = (event) =>
{
    setEnteredAmount(event.target.value)

    
    // setUserInput({
    //     ...enteredInput,enteredAmount: event.target.value
    // })

    // setUserInput((prevState) =>{
    //     return { ...prevState,setEnteredAmount: event.target.value}
    // })
}

const dateEvent = (event) =>
{
    setEnteredDate(event.target.value)

    // setUserInput({
    //     ...enteredDate,enteredDate: event.target.value
    // })

    // setUserInput((prevState) => {
    //     return { ...prevState,setEnteredDate:event.target.value}
    // })
}

const submitEvent = (event) =>{
    event.preventDefault();

    const data = {
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate)
    }
    console.log(data)
    setEnteredAmount('')
    setEnteredDate('')
    setEnteredTitle('')
}
    return (
        <form onClick={submitEvent}>
            <div className="new-expense__controls">
                <div className=".new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={textevent} />
                </div>
            </div>
            <div className="new-expense__controls">
                <div className=".new-expense__control">
                    <label>Amount</label>
                    <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={amountEvent}/>
                </div>
            </div>
            <div className="new-expense__controls">
                <div className=".new-expense__control">
                    <label>Date</label>
                    <input type="date"  min='2023-01=01' max='2100-01-01' value={enteredDate} onChange={dateEvent}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;