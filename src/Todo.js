import React, { useState } from 'react'
import './Todo.css'
import { Button, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Modal } from '@material-ui/core'
import db from './firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function Todo(props) {
    const classes = useStyles;
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');

    const handleOpen = () => {
        setOpen(true);
    }
    const updateTodo = (event) => {
        event.preventDefault();

        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, {merge: true}); 
        setOpen(false);
    }

    return (
        <>
        <Modal
            open={open}
            onClose={e => setOpen(false)} >
            <div className={classes.paper}>
                <h1>Edit Me</h1>
                <form>
                <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
                <Button type="submit" onClick={updateTodo}>Update Todo</Button>
                </form>
            </div>
        </Modal>
        <List className="todo__list">
            <ListItem>
            <ListItemAvatar></ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Dummy deadline" />
            </ListItem>
            <button onClick={e => setOpen(true)}>Edit</button>
            <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
        </List>
        </>
    )
}

export default Todo
