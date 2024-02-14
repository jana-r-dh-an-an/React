import { useState } from 'react';
import Box from './components/Header/Box';

export default function App() {
  const [count, setCount] = useState([]);

  const addBox = () => {
    const newBox = {
      id: count.length + 1
    };
    setCount([...count, newBox]);
  };

  return (
    <div>
    <button onClick={addBox}>
      You pressed me  times
    </button>

    <div>
      
    </div>
    </div>
  );
}


