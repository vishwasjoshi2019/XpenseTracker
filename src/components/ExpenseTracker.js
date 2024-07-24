import React, { useState, useEffect } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseSummary from './ExpenseSummary';
import ExpenseTrends from './ExpenseTrends';
import EditExpenseModal from '../modals/EditExpenseModal';
import AddIncome from './AddIncome';
import AddExpense from './AddExpense';
import './ExpenseTracker.css';

const ExpenseTracker = () => {
  const [walletBalance, setWalletBalance] = useState(() => parseFloat(localStorage.getItem('walletBalance')) || 5000);
  const [expenses, setExpenses] = useState(() => JSON.parse(localStorage.getItem('expenses')) || []);
  const [isEditing, setIsEditing] = useState(false);
  const [currentExpense, setCurrentExpense] = useState(null);

  useEffect(() => {
    localStorage.setItem('walletBalance', walletBalance);
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [walletBalance, expenses]);

  const addExpense = (expense) => {
    if (walletBalance - expense.amount < 0) {
      alert('Insufficient Balance');
      return;
    }
    setExpenses([...expenses, expense]);
    setWalletBalance(walletBalance - expense.amount);
  };

  const addIncome = (amount) => {
    setWalletBalance(walletBalance + amount);
  };

  const editExpense = (index) => {
    setCurrentExpense({ ...expenses[index], index });
    setIsEditing(true);
  };

  const updateExpense = (updatedExpense) => {
    const newExpenses = [...expenses];
    const oldExpense = newExpenses[updatedExpense.index];
    setWalletBalance(walletBalance + oldExpense.amount - updatedExpense.amount);
    newExpenses[updatedExpense.index] = {
      title: updatedExpense.title,
      amount: updatedExpense.amount,
      category: updatedExpense.category,
      date: updatedExpense.date
    };
    setExpenses(newExpenses);
    setIsEditing(false);
    setCurrentExpense(null);
  };

  const deleteExpense = (index) => {
    const newExpenses = [...expenses];
    setWalletBalance(walletBalance + newExpenses[index].amount);
    newExpenses.splice(index, 1);
    setExpenses(newExpenses);
  };

  return (
    <div className="ExpenseTracker">
      <div className='title-text'>Expense Tracker</div>
      <div className="wallet-info">
        <AddIncome addIncome={addIncome} />
        <AddExpense addExpense={addExpense} expenses={expenses} />
        <ExpenseTrends expenses={expenses} />
      </div>
      <div className='expense-info'>
        <div className="expense-list">
                <h2>Recent Transactions</h2>
                <ExpenseList expenses={expenses} editExpense={editExpense} deleteExpense={deleteExpense} />
            </div>
            <div className="expense-summary">
                <h2>Top Expenses</h2>
                <ExpenseSummary expenses={expenses} />
            </div>
      </div>
        

      {isEditing && (
        <EditExpenseModal
          expense={currentExpense}
          updateExpense={updateExpense}
          closeModal={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default ExpenseTracker;
