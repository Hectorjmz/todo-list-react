import './App.css';
import React, { useState, useEffect } from 'react';
import { AppUI } from './AppUI';


function useLocalStorage(itemName, initialValue){
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [item, setItem] = useState(initialValue)

  useEffect(()=>{
    
    setTimeout(()=>{
      try{
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem)
        setLoading(false)
      }catch(error){
        setError(error)
      }
      
    }, 1000);
  });


  const saveItem = (newItem) => {
    try{
      const stringifiedItem = JSON.stringify(newItem)
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem)
    }catch(error){
      setError(error)
    }
  }

  return {
    item,
    saveItem, 
    loading,
    error,
  }
}


function App() {
  const {
    item: todos, 
    saveItem: saveTodos, 
    loading, error
  } = useLocalStorage('TODOS_V1', [])
  
  const [searchValue, setSearchValue] = useState("")

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  // console.log(loading)


  let searchedTodos = [];
 //! down
  if(!searchValue.length >= 1){
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
    })
  }
  

  

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    if(todos[todoIndex].completed === false){
      todos[todoIndex].completed = true
      saveTodos(newTodos)
    } else {
      todos[todoIndex].completed = false
      saveTodos(newTodos)
    }
  }
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

 

  return (
    <AppUI 
      loading={loading}
      error={error}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue} 
      setSearchValue={setSearchValue} 
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;






// const defaultTodos = [
//   {
//     text: 'Cortar cebolla', 
//     completed: false
//   },
//   {
//     text: 'Tomar curso React', 
//     completed: false
//   },
//   {
//     text: 'Llorar con la chisquiada', 
//     completed: true
//   },
//   {
//     text: 'Llorar con la llorona', 
//     completed: false
//   },
// ]