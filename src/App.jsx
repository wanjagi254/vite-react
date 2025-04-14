import { useState, useEffect } from 'react';
import ExpenseForm from './assets/ExpenseForm';
import ExpenseTable from './assets/ExpenseTable';
import SearchBar from './assets/SearchBar';
import './styles.css';

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('expenses');
    if (saved) {
      setExpenses(JSON.parse(saved).map(exp => ({
        ...exp,
        date: new Date(exp.date)
      })));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (newExpense) => {
    setExpenses(prev => [newExpense, ...prev]);
  };

  const deleteExpense = (id) => {
    setExpenses(prev => prev.filter(expense => expense.id !== id));
  };

  const filteredExpenses = expenses.filter(expense => 
    expense.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.amount.toString().includes(searchTerm) ||
    expense.date.toISOString().includes(searchTerm)
  );

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <div className="container">
        <ExpenseForm onAddExpense={addExpense} />
        <SearchBar onSearch={setSearchTerm} />
        <ExpenseTable 
          expenses={filteredExpenses} 
          onDelete={deleteExpense} 
        />
      </div>
    </div>
  );
}