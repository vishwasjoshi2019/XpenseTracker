import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const ExpenseList = ({ expenses, editExpense, deleteExpense }) => {
  return (
    <div>
      {expenses.map((expense, index) => (
        <div key={index}>
          <span>{expense.title}</span>
          <span>{expense.amount}</span>
          <span>{expense.category}</span>
          <span>{expense.date}</span>
          <FaEdit onClick={() => editExpense(index)} />
          <FaTrashAlt onClick={() => deleteExpense(index)} />
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
