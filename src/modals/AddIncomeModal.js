import React, { useState } from 'react';
import Modal from 'react-modal';
import './AddIncomeModal.css';

const customStyles = {
  content: {
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    width: '538px',
    height: '164px',
    top: '259px',
    left: '371px',
    backgroundColor: '#EFEFEFD9',
    border: 'none',
    overflow: 'hidden',
  },
};

const AddIncomeModal = ({ addIncome, closeModal }) => {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(parseFloat(amount));
    closeModal();
  };

  return (
    <Modal isOpen={true} onRequestClose={closeModal} ariaHideApp={false} style={customStyles}>
      <div className="add-incomeCard">
        <div className='add-incomeText'>Add Balance</div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="number" placeholder="Income Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
            <button type="submit" className="add-button">Add Balance</button>
            <button type="button" className="cancel-button" onClick={closeModal}>Cancel</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddIncomeModal;
