import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography, Paper, Grid } from '@material-ui/core';

import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';


const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: 350,
  },
}),
);

const initialTodos: Array<Todo> = [
  {text: "Walk the dog", complete: true}, 
  {text: "Write app", complete: false}
];

function App() {
  const [ todos, setTodos ] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" && setTodos([...todos, {text: newTodo, complete: false}])
  };

  // const deleteTodo: DeleteTodo = selectedTodo => {
  //   const todoListAfterDel
  // };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div style={{height: 20}} />
      <Grid 
        container 
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item>
          <Paper className={classes.paper}>
            <Typography variant="h6" gutterBottom>
              What's the Plan for Today?
            </Typography>
            <AddTodoForm addTodo={addTodo}/>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
