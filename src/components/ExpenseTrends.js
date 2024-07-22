import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ExpenseTrends = ({ expenses }) => {
  const data = [
    { name: 'Food', value: expenses.filter(e => e.category === 'Food').reduce((a, b) => a + b.amount, 0) },
    { name: 'Entertainment', value: expenses.filter(e => e.category === 'Entertainment').reduce((a, b) => a + b.amount, 0) },
    { name: 'Travel', value: expenses.filter(e => e.category === 'Travel').reduce((a, b) => a + b.amount, 0) },
  ];

  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
};

export default ExpenseTrends;
