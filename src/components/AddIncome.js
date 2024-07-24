import React, { useState } from 'react';
import AddIncomeModal from '../modals/AddIncomeModal';
import './AddIncome.css';

const AddIncome = ({ addIncome }) => {
  const [isAddingIncome, setIsAddingIncome] = useState(false);

  return (
    <div className='incomeCard'>
      <div className='incomeText'>
        Wallet Balance : <span>₹{localStorage.getItem('walletBalance')}</span>
      </div>
      <button className="incomeButton" onClick={() => setIsAddingIncome(true)}>+ Add Income</button>
      {isAddingIncome && (
        <AddIncomeModal
          addIncome={addIncome}
          closeModal={() => setIsAddingIncome(false)}
        />
      )}
    </div>
  );
};

export default AddIncome;
