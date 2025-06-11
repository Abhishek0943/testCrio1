import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

Modal.setAppElement("#root");

const defaultBalance = 5000;

const App = () => {
  const [balance, setBalance] = useState(() => {
    const storedBalance = localStorage.getItem("balance");
    return storedBalance ? parseFloat(storedBalance) : defaultBalance;
  });

  const [expenses, setExpenses] = useState(() => {
    const storedExpenses = localStorage.getItem("expenses");
    return storedExpenses ? JSON.parse(storedExpenses) : [];
  });

  const [incomeModal, setIncomeModal] = useState(false);
  const [expenseModal, setExpenseModal] = useState(false);
  const [incomeAmount, setIncomeAmount] = useState("");
  const [expenseForm, setExpenseForm] = useState({
    title: "",
    price: "",
    category: "",
    date: ""
  });

  useEffect(() => {
    localStorage.setItem("balance", balance);
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [balance, expenses]);

  const addIncome = (e) => {
    e.preventDefault();
    const income = parseFloat(incomeAmount);
    if (income > 0) {
      setBalance(prev => prev + income);
      setIncomeAmount("");
      setIncomeModal(false);
    }
  };

  const addExpense = (e) => {
    e.preventDefault();
    const { title, price, category, date } = expenseForm;
    const expensePrice = parseFloat(price);
    if (expensePrice > balance) {
      alert("Cannot spend more than wallet balance");
      return;
    }
    const newExpense = { id: Date.now(), title, price: expensePrice, category, date };
    setExpenses(prev => [...prev, newExpense]);
    setBalance(prev => prev - expensePrice);
    setExpenseForm({ title: "", price: "", category: "", date: "" });
    setExpenseModal(false);
  };

  const deleteExpense = (id) => {
    const expenseToDelete = expenses.find(exp => exp.id === id);
    setExpenses(prev => prev.filter(exp => exp.id !== id));
    setBalance(prev => prev + expenseToDelete.price);
  };

  // Generate Pie Chart Data
  const pieData = Object.entries(
    expenses.reduce((acc, exp) => {
      acc[exp.category] = (acc[exp.category] || 0) + exp.price;
      return acc;
    }, {})
  ).map(([key, value]) => ({ name: key, value }));

  // Generate Bar Chart Data
  const barData = pieData;

  return (
    <div>
      <h1>Expense Tracker</h1>
      <h2>Wallet Balance: ${balance.toFixed(2)}</h2>

      <button type="button" onClick={() => setIncomeModal(true)}>+ Add Income</button>
      <button type="button" onClick={() => setExpenseModal(true)}>+ Add Expense</button>

      {/* Income Modal */}
      <Modal isOpen={incomeModal} onRequestClose={() => setIncomeModal(false)}>
        <h2>Add Income</h2>
        <form onSubmit={addIncome}>
          <input type="number" placeholder="Income Amount" value={incomeAmount} onChange={(e) => setIncomeAmount(e.target.value)} required />
          <button type="submit">Add Balance</button>
        </form>
      </Modal>

      {/* Expense Modal */}
      <Modal isOpen={expenseModal} onRequestClose={() => setExpenseModal(false)}>
        <h2>Add Expense</h2>
        <form onSubmit={addExpense}>
          <input name="title" placeholder="Title" value={expenseForm.title} onChange={(e) => setExpenseForm({ ...expenseForm, title: e.target.value })} required />
          <input type="number" name="price" placeholder="Amount" value={expenseForm.price} onChange={(e) => setExpenseForm({ ...expenseForm, price: e.target.value })} required />
          <select name="category" value={expenseForm.category} onChange={(e) => setExpenseForm({ ...expenseForm, category: e.target.value })} required>
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Shopping">Shopping</option>
            <option value="Health">Health</option>
          </select>
          <input name="date" type="date" value={expenseForm.date} onChange={(e) => setExpenseForm({ ...expenseForm, date: e.target.value })} required />
          <button type="submit">Add Expense</button>
        </form>
      </Modal>

      {/* Expenses List */}
      <h3>Expense History</h3>
      <ul>
        {expenses.map(exp => (
          <li key={exp.id}>
            {exp.title} - ${exp.price} ({exp.category}) on {exp.date}
            <button onClick={() => deleteExpense(exp.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Summary */}
      <h3>Expense Summary (Pie Chart)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
            {pieData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28', '#FF8042'][index % 4]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      {/* Trends */}
      <h3>Expense Trends (Bar Chart)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={barData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default App;
