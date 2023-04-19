import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filterValue, setfilterValue] = useState('2020')
  const filterChange = (data) => {
    setfilterValue(data)
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter defaultvalue={filterValue} onChangeFilter={filterChange} />
        {props.items.map((expenses) => (
        <ExpenseItem 
        title={expenses.title} 
        amount={expenses.amount} 
        date={expenses.data} 
        />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
