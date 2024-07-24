import React, { useState } from 'react';
import Modal from 'react-modal';
import './EditExpenseModal.css';

const EditExpenseModal = ({ expense, updateExpense, closeModal }) => {
  const [title, setTitle] = useState(expense.title);
  const [amount, setAmount] = useState(expense.amount);
  const [category, setCategory] = useState(expense.category);
  const [date, setDate] = useState(expense.date);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateExpense({ ...expense, title, amount: parseFloat(amount), category, date });
  };

  return (
    <Modal isOpen={true} onRequestClose={closeModal} ariaHideApp={false}>
      <h2>Edit Expense</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Amount</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </div>
        <div>
          <label>Category</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </div>
        <div>
          <label>Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <button type="submit">Update Expense</button>
        <button type="button" onClick={closeModal}>Cancel</button>
      </form>
    </Modal>
  );
};

export default EditExpenseModal;
