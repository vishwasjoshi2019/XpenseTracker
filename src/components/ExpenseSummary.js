import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const ExpenseSummary = ({ expenses }) => {
  const data = [
    { name: 'Food', value: expenses.filter(e => e.category === 'Food').reduce((a, b) => a + b.amount, 0) },
    { name: 'Entertainment', value: expenses.filter(e => e.category === 'Entertainment').reduce((a, b) => a + b.amount, 0) },
    { name: 'Travel', value: expenses.filter(e => e.category === 'Travel').reduce((a, b) => a + b.amount, 0) },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default ExpenseSummary;
