import React, { useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import Todo from './Todo'
import './App.css';

function App() {
  const [todos, setTodos] = useState(["Take dogs for a walk", "Take the rubbish out", "Dellons wants to cook"]);
  const [input, setInput] = useState("");

  const addTodo = (event) => {
    event.preventDefault();
    console.log(input)
    setTodos([...todos, input]);
    setInput("");
  }

  return (
    <div className="App">
      <h1>Hello team codersHub</h1>
      <form>
      
      <FormControl>
        <InputLabel>Write a Todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>
      <Button disabled ={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
      Add Todo
      </Button>

      </form>
     
      <ul>
        {todos.map(todo => (
          <Todo text={todo}/>
        ))}
      </ul>
    
    </div>
  );
}

export default App; 
