import React from 'react'
import './Todo.css'
import { Button, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import db from './firebase'

function Todo(props) {
    return (
        <List className="todo__list">
            <ListItem>
            <ListItemAvatar></ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Dummy deadline" />
            </ListItem>
            <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}> Delete me</Button>
        </List>
    )
}

export default Todo
