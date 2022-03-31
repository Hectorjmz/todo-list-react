import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }){

    const onClickButton = () => {
        setOpenModal(prev => {return !prev})
    }

    return(
        <button 
            className="CreateTodoButton"
            onClick={onClickButton}

        >
            +
        </button>
    )
}

export { CreateTodoButton };