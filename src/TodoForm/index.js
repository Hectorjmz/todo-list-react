import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";

function TodoForm(){

    const [newTodoValue, setNewTodoValue] = useState('');
    const {
        addTodo,
    } = useContext(TodoContext)

    const onChange = (event)=> {
        setNewTodoValue(event.target.value);
    }
    const onCancel = ()=> {
        
    }

    const onSubmit = (event)=> {
        event.preventDefault();
        console.log(newTodoValue)
        addTodo(newTodoValue)
    }

    return(
        <form onSubmit={onSubmit}>
            <label htmlFor="">Write TODO</label>
            <textarea 
                name="" 
                id="" 
                cols="30" 
                rows="10" 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar Cebollin..." 
            />
            <button
            type="button"
                onClick={onCancel}
            >
                Cancel
            </button>
            <button
            type="submit"
            >
                Add
            </button>
        </form>
    )
}

export { TodoForm }