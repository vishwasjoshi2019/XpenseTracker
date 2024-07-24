// src/components/AddExpenseModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import './AddExpenseModal.css';

const customStyles = {
  content: {
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    width: '538px',
    height: '335px',
    top: '150px',
    left: '371px',
    backgroundColor: '#EFEFEFD9',
    border: 'none',
    overflow: 'hidden',
  },
};

const AddExpenseModal = ({ addExpense, closeModal }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({
      title,
      amount: parseFloat(amount),
      category,
      date
    });
    closeModal();
  };

  return (
    <Modal isOpen={true} onRequestClose={closeModal} ariaHideApp={false} style={customStyles}>
      <div className='add-expenseCard'>
        <div className='expense-text'>Add Expense</div>
        <form onSubmit={handleSubmit} className='input-group'>
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <input type="number" placeholder="Price" value={amount} onChange={(e) => setAmount(e.target.value)} required />
          <input type="text" placeholder="Select Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
          <input type="date" placeholder="dd/mm/yyyy" value={date} onChange={(e) => setDate(e.target.value)} required />
          <button type="submit" className='add-expense-button'>Add Expense</button>
          <button type="button" onClick={closeModal} className='cancel-button'>Cancel</button>
        </form>
      </div>
    </Modal>
  );
};

export default AddExpenseModal;
