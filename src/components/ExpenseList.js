import React, { useState } from 'react';
import { FaEdit, FaTrashAlt, FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import './ExpenseList.css';

const ITEMS_PER_PAGE = 3;

const ExpenseList = ({ expenses, editExpense, deleteExpense }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(expenses.length / ITEMS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentExpenses = expenses.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="expense-list-container">
        {currentExpenses.map((expense, index) => (
          <div key={index} className="expense-item">
            <div className="expense-details">
              <span className="expense-title">{expense.title}</span>
              <span className="expense-date">{expense.date}</span>
            </div>
            
            <div className="expense-actions">
              <div className="expense-amount">₹{expense.amount}</div>
              <FaTrashAlt className="delete-icon" onClick={() => deleteExpense(startIndex + index)} />
              <FaEdit className="edit-icon" onClick={() => editExpense(startIndex + index)} />
              
            </div>
            
          </div>
        ))}
        <div className="pagination">
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            <FaChevronCircleLeft />
          </button>
          <span>{currentPage}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            <FaChevronCircleRight />
          </button>
        </div>
    </div>
  );
};

export default ExpenseList;
