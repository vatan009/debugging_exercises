import { useState } from 'react';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  function handleAdd() {
    if (!input.trim()) return;
    // tasks.push(input);
    setTasks([...tasks,input]);
    setInput('');
  }

  return (
    <div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="New task"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {tasks.map((task, i) => <li key={i}>{task}</li>)}
      </ul>
    </div>
  );
}
