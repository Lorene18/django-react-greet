import React, { useState } from 'react';

export default function App() {
  const [nameInput, setNameInput] = useState('');
  const [message, setMessage] = useState('');

  const handleGreet = async () => {
    const url = nameInput.trim()
      ? `http://127.0.0.1:8000/api/greet/?name=${encodeURIComponent(nameInput)}`
      : 'http://127.0.0.1:8000/api/greet/';

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMessage(data.message);
    } catch {
      setMessage('Error connecting to backend');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <input
        type="text"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={handleGreet}>Greet</button>
      <p>{message}</p>
    </div>
  );
}