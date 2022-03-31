import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

function TodoSearch(){

    const { searchValue, setSearchValue } = useContext(TodoContext)

    // const [searchValue, setSearchValue] = useState("")

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)
        
    }

    return(
        <input 
            className="TodoSearch" type="text" 
            placeholder="Cebollon" 
            value={searchValue}
            onChange={onSearchValueChange}
        />
    )
}

export { TodoSearch }