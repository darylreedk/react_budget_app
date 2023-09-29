import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const {currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const newBudgetValue = event.target.value;

        //Get the total expenses 
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        //Check if new budget is lower than spending
        if(newBudgetValue < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending.");
            return;
        }

        setNewBudget(newBudgetValue);

        dispatch ({
            type: 'SET_BUDGET',
            payload: newBudgetValue, 
        })
    }
    return (
        //task: change pound symbol to currency prefix variable
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
