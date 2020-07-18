import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <h1>华砼工程建设集团</h1>
      <h2>改善和丰富每个人的生活</h2>
      <p></p>
      <br />
      <p>The date according to Go is:</p>
      <p>{date ? date : 'Loading date...'}</p>
    </main>
  );
}

export default App;
