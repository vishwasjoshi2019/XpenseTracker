import React, { useState } from 'react';
import AddExpenseModal from '../modals/AddExpenseModal';
import './AddExpense.css';

const AddExpense = ({ addExpense,expenses }) => {
  const [isAddingExpense, setIsAddingExpense] = useState(false);

  // const expenses=localStorage.getItem("expenses");

  const expenseAmt= expenses.reduce((total, expense) => total + expense.amount, 0);
  return (
    <div className='expenseCard'>
      <div className='expenseText'>
        Expenses: <span>₹{expenseAmt}</span>
      </div>
      <button className="expenseButton" onClick={() => setIsAddingExpense(true)}>+ Add Expense</button>
      {isAddingExpense && (
        <AddExpenseModal
          addExpense={addExpense}
          closeModal={() => setIsAddingExpense(false)}
        />
      )}
    </div>
  );
};

export default AddExpense;
