import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  const fetchTasks = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/tasks`);
    setTasks(data);
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (!title) return;
    await axios.post(`${import.meta.env.VITE_API_URL}/tasks`, { title });
    setTitle('');
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${import.meta.env.VITE_API_URL}/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', fontFamily: 'sans-serif' }}>
      <h1>Task Manager</h1>
      <form onSubmit={addTask} style={{ marginBottom: '20px' }}>
        <input
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a task"
        />
        <button type="submit" style={{ width: '100%', padding: '8px' }}>Add Task</button>
      </form>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map(task => (
          <li key={task.id} style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
            <span>{task.title}</span>
            <button onClick={() => deleteTask(task.id)} style={{ padding: '4px 8px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
