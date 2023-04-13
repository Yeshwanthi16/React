import React, { useState } from "react";

import './ExpensesForm.css';

const ExpenseForm = () => {

const [enteredTitle, setEnteredTitle] = useState('');
const [enteredAmount, setEnteredAmount] = useState('');
const [enteredDate, setEnteredDate] = useState('');

const textevent = (event) =>
{
    setEnteredTitle(event.target.value)
}

const amountEvent = (event) =>
{
    setEnteredAmount(event.target.value)
}

const dateEvent = (event) =>
{
    setEnteredDate(event.target.value)
}
    return (
        <form>
            <div className="new-expense__controls">
                <div className=".new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={textevent} />
                </div>
            </div>
            <div className="new-expense__controls">
                <div className=".new-expense__control">
                    <label>Amount</label>
                    <input type="number" min='0.01' step='0.01' onChange={amountEvent}/>
                </div>
            </div>
            <div className="new-expense__controls">
                <div className=".new-expense__control">
                    <label>Date</label>
                    <input type="date"  min='2023-01=01' max='2100-01-01' onChange={dateEvent}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;