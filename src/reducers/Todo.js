export const initialTodos = {
  todos: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 0
    }, {
      item: 'Learn Rust',
      completed: false,
      id: 1
    }, {
      item: 'Find the ultimate answer to life, the universe, everything',
      completed: false,
      id: 2
    }
  ]
};

export function reduceTodo(state, action) {
  switch (action.type) {
    case "ADD_TODO": {
      let todos = [
        ...state.todos,
        {
          item: action.payload.item,
          completed: false,
          id: Date.now(),
        }
      ];
      return {
        ...state,
        todos
      }
    }
    case "TOGGLE_COMPLETED": {
      let todos = [...state.todos];
      todos.forEach(todo => {
        if (todo.id === action.payload.id) {
          todo.completed = true;
        }
      })
      return {
        ...state,
        todos
      }
    }
    case "CLEAR_COMPLETED": {
      let todos = state.todos.filter(todo => !todo.completed);
      return {
        ...state,
        todos
      }
    }
    default: return state;
  }
}