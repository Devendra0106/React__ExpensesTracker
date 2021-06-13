import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
    const [eneteredTitle, setEnteredTitle] = useState('');
    const [eneteredAmount, setEnteredAmount] = useState('');
    const [eneteredDate, setEnteredDate] = useState('');

    //or Use one state
    // const [userInput, setUserInput] = useState({
    //     eneteredTitle: '',
    //     eneteredAmount: '',
    //     eneteredDate: ''
    // });

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     eneteredTitle: e.target.value
        // })
    };

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    };

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: eneteredTitle,
            amount: +eneteredAmount,
            date: new Date(eneteredDate)
        }
        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={eneteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.1" step="0.1" value={eneteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={eneteredDate} onChange={dateChangeHandler} />
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={props.onCancel}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm
