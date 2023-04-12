import React from "react";

import './ExpensesForm.css';

const ExpenseForm = () => {

const textevent = (event) =>
{
    console.log(event.target.value);
};
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
                    <input type="number" min='0.01' step='0.01' />
                </div>
            </div>
            <div className="new-expense__controls">
                <div className=".new-expense__control">
                    <label>Date</label>
                    <input type="date"  min='2023-01=01' max='2100-01-01'/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;