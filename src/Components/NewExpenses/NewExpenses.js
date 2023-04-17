import React from "react";

import ExpenseForm from './ExpenseForm';
import './NewExpenses.css';

const NewExpenses = (props) => {

    const newDataHandler = (setData) =>{
        const newData = {
            ...setData,
            id: Math.random().toString()
        }
        props.onData(newData)
    }
    return (
        <div className="new-expense">
            <ExpenseForm onNewData={newDataHandler}/>
        </div>
    );
};

export default NewExpenses;