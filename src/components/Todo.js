import React from 'react';

const Todo = ({item, completed, id, dispatch}) => {
    return (
        <div className="todo"
            onClick={() => {

            }}
        >
            <p>#{id}</p>
            <p style={{
                textDecoration: completed ? "linethrough" : "none",
            }}>{item}</p>
        </div>
    )
}

export default Todo;