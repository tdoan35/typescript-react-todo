import React, { ChangeEvent, FormEvent, useState } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';

interface AddTodoFormProps {
  addTodo: AddTodo;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    todoForm: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    }
  }),
);

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");
  const classes = useStyles();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  }

  return (
    <FormControl variant="outlined" className={classes.todoForm}>
      <InputLabel >Add a Todo</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        value={newTodo}
        onChange={handleChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="add"
              onClick={handleSubmit}
              edge="end"
            >
              <AddBoxIcon />
            </IconButton>
          </InputAdornment>
        }
        labelWidth={85}
      />
    </FormControl>

  )
}

export default AddTodoForm
