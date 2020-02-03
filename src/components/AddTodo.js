import React, { useState } from 'react';

const AddTodo = ({dispatch}) => {
    const [input, setInput] = useState("");
    return (
        <form>
            <input
                type="text"
                placeholder="Todo Name"
                value={input}
                onChange={ev => setInput(ev.target.value)}
            />
            <button onClick={ev => {
                ev.preventDefault();
                if (input.length === 0) {
                    return;
                }
                dispatch({
                    type: "ADD_TODO",
                    payload: {
                        item: input,
                    }
                })
            }}>Add Todo</button>
            <button onClick={ev => {
                ev.preventDefault();
                dispatch({
                    type: "CLEAR_COMPLETED"
                })
            }}>Clear Completed</button>
        </form>
    )
}

export default AddTodo;