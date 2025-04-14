export default function ExpenseFilter({ selectedYear, onChangeYear }) {
    return (
      <div className="expense-filter">
        <label>Filter by Year</label>
        <select
          value={selectedYear}
          onChange={(e) => onChangeYear(e.target.value)}
        >
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>
    )
  }