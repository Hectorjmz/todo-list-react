import './App.css';
import { TodoProvider } from '../TodoContext';
import React from 'react';
import { AppUI } from './AppUI';


function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
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