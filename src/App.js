import React, { useReducer } from 'react';
import './App.css';
import {initialTodos, reduceTodo} from './reducers/Todo';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  const [todoState, dispatch] = useReducer(reduceTodo, initialTodos);

  return (
    <div className="App">
      <TodoList
        todoState={todoState}
        dispatch={dispatch}
      />
      <AddTodo dispatch={dispatch}/>
    </div>
  );
}

export default App;
