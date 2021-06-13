import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/AddExpense/NewExpense';
import { useState } from 'react';

const expensesData = [
  { id: "el1", title: "Shirts", amount: 1800, date: new Date(2021, 4, 24) },
  { id: "el2", title: "Books", amount: 300.50, date: new Date(2020, 2, 24) },
  { id: "el3", title: "CellPhone", amount: 15900, date: new Date(2020, 3, 24) },
  { id: "el4", title: "Pen", amount: 50, date: new Date(2021, 3, 12) },
  { id: "el5", title: "Shoes", amount: 1200, date: new Date(2021, 5, 24) }
];

function App() {
  //stateFul list
  const [expenses, setExpenses] = useState(expensesData);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
