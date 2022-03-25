import React from "react";
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }){

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