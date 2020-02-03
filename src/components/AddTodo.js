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
            <button onClick={() => {
                dispatch({
                    type:"ADD_TODO",
                    payload: {
                        item: input,
                    }
                })
            }}>Add Todo</button>
        </form>
    )
}

export default AddTodo;