import { useState } from 'react'
import ExpenseForm from './assets/ExpenseForm'
import ExpenseList from './assets/ExpenseList'
import ExpenseFilter from './assets/ExpenseFilter'
import './styles.css'

export default function App() {
  const [expenses, setExpenses] = useState([])
  const [filterYear, setFilterYear] = useState('2023')

  const addExpense = (newExpense) => {
    setExpenses(prev => [newExpense, ...prev])
  }

  const filteredExpenses = expenses.filter(
    expense => expense.date.getFullYear().toString() === filterYear
  )

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <div className="expenses-container">
        <ExpenseFilter
          selectedYear={filterYear}
          onChangeYear={setFilterYear}
        />
        <ExpenseList expenses={filteredExpenses} />
      </div>
    </div>
  )
}