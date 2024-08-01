import React , { useState } from 'react';
import './App.css';

const App = () => {
  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    const newVal = e.target.value;
    setTask(newVal);
  }

  const addTask = () => {
    setItems((prev) => {
      return [...prev, task];
    })
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={task}/>
        <button onClick={addTask}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => {
            return <li>{item}</li>

          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
