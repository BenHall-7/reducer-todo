import React from 'react';
import Todo from './Todo';

const TodoList = ({todoState, dispatch}) => {
    return (
        <div>
            <h1>My Todo List</h1>
            {todoState.todos.map(todo =>
                <Todo {...todo} dispatch={dispatch} key={todo.id}/>
            )}
        </div>
    )
}

export default TodoList;