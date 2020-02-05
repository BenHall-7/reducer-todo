import React from 'react';

const Todo = ({item, completed, id, dispatch}) => {
    return (
        <div className={completed ? "todo complete" : "todo"}
            onClick={() => {
                dispatch({type: "TOGGLE_COMPLETED", payload: {id}})
            }}
        >
            <p>#{id}</p>
            <p>{item}</p>
        </div>
    )
}

export default Todo;