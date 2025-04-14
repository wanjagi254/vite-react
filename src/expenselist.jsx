export default function ExpenseList({ expenses }) {
    if (expenses.length === 0) {
      return <p className="no-expenses">No expenses found.</p>
    }
  
    return (
      <ul className="expense-list">
        {expenses.map(expense => (
          <li key={expense.id} className="expense-item">
            <div className="expense-details">
              <h3>{expense.title}</h3>
              <p>${expense.amount.toFixed(2)}</p>
              <p>{expense.date.toLocaleDateString()}</p>
            </div>
          </li>
        ))}
      </ul>
    )
  }