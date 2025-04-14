export default function ExpenseTable({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return <p className="no-expenses">No expenses found</p>;
  }

  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.date.toLocaleDateString()}</td>
            <td>{expense.title}</td>
            <td>${expense.amount.toFixed(2)}</td>
            <td>
              <button 
                onClick={() => onDelete(expense.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}