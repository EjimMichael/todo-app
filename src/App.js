import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import Todo from './Todo'
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // when the app loads we need to listen to the db and fetch new todosas they get added/removed
  useEffect(() => {
    db.collection('todos').orderBy("timestamp", "desc").onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, []);
 
  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault(); // stops refresh after clicking add todo button
    
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setInput(""); // clear up the input after clicking add todo button 
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
          <Todo todo={todo}/>
        ))}
      </ul>
    
    </div>
  );
}

export default App; 
