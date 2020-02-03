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
      return {
        ...state,
        todos: [...state.todos, {
          item: action.payload.item,
          completed: false,
          id: Date.now(),//TODO: Fix
        }]
      }
    }
  }
  return state;
}