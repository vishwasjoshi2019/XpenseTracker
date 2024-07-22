import React, { useState } from 'react';

const AddIncomeForm = ({ addIncome }) => {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(parseFloat(amount));
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Income Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Add Balance</button>
    </form>
  );
};

export default AddIncomeForm;
