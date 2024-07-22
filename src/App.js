import React, { useState, useEffect } from 'react';
import AddExpenseForm from './components/AddExpenseForm';
import AddIncomeForm from './components/AddIncomeForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import ExpenseTrends from './components/ExpenseTrends';
import './assets/styles/App.css';

const App = () => {
  const [walletBalance, setWalletBalance] = useState(() => parseFloat(localStorage.getItem('walletBalance')) || 5000);
  const [expenses, setExpenses] = useState(() => JSON.parse(localStorage.getItem('expenses')) || []);

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
    const newExpenses = [...expenses];
    const oldAmount = newExpenses[index].amount;
    const newAmount = prompt('Enter new amount', oldAmount);
    if (newAmount && !isNaN(newAmount)) {
      newExpenses[index].amount = parseFloat(newAmount);
      setWalletBalance(walletBalance + oldAmount - newExpenses[index].amount);
      setExpenses(newExpenses);
    }
  };

  const deleteExpense = (index) => {
    const newExpenses = [...expenses];
    setWalletBalance(walletBalance + newExpenses[index].amount);
    newExpenses.splice(index, 1);
    setExpenses(newExpenses);
  };

  return (
    <div className="App">
      <div className="wallet-info">
        <div>Wallet Balance: ₹{walletBalance}</div>
        <AddIncomeForm addIncome={addIncome} />
      </div>
      <div className="add-expense-form">
        <AddExpenseForm addExpense={addExpense} />
      </div>
      <div className="expense-list">
        <ExpenseList expenses={expenses} editExpense={editExpense} deleteExpense={deleteExpense} />
      </div>
      <div className="expense-summary">
        <ExpenseSummary expenses={expenses} />
      </div>
      <div className="expense-trends">
        <ExpenseTrends expenses={expenses} />
      </div>
    </div>
  );
};

export default App;
