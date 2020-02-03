import React, { useReducer } from 'react';
import './App.css';

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
