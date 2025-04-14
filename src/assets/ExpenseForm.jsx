import { useState } from 'react';

export default function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title || !amount || !date) return;

    const expenseData = {
      title,
      amount: +amount,
      date: new Date(date),
      id: crypto.randomUUID()
    };

    onAddExpense(expenseData);
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <h2>Add New Expense</h2>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Amount ($)</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2025-12-31"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
}