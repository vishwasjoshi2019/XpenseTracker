import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './ExpenseSummary.css';

const ExpenseSummary = ({ expenses }) => {
  // Aggregate expenses by category
  const aggregatedExpenses = expenses.reduce((acc, expense) => {
    const found = acc.find(item => item.category === expense.category);
    if (found) {
      found.amount += expense.amount;
    } else {
      acc.push({ category: expense.category, amount: expense.amount });
    }
    return acc;
  }, []);

  // Sort expenses by amount in descending order
  const sortedExpenses = aggregatedExpenses.sort((a, b) => b.amount - a.amount);

  return (
    <div className="expense-summary-container">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart layout="vertical" data={sortedExpenses}>
          <XAxis type="number" hide />
          <YAxis dataKey="category" type="category" width={80} />
          <Tooltip />
          <Bar dataKey="amount" fill="#8884d8" barSize={20} radius={[0, 10, 10, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseSummary;
