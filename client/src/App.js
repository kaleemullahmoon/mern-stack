import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    amount: 0,
    description: "",
    date: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("http:/localhost:4000/transaction", {
      method: "POST",
      body: form,  
    });
    console.log(res);
  }
  function handleInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="amount"
          type="number"
          onChange={handleInput}
          value={form.amount}
          placeholder="Enter Transaction Amount"
        />
        <input
          name="description"
          type="text"
          onChange={handleInput}
          value={form.description}
          placeholder="Enter Description"
        />

        <input
          name="date"
          onChange={handleInput}
          value={form.date}
          type="date"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
