import React from 'react';
import './TodoListItem.css';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Paper, Divider, Box, Checkbox, Typography, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
      margin: theme.spacing(2),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: 'auto',
    },
    divider: {
      height: 28,
      margin: 4,
    },
    todoCompleted: {
      textDecoration: 'line-through'
    },
  }),
);

export const TodoListItem: React.FC<TodoListItemProps> = ({ 
  todo, 
  toggleTodo 
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Box display="flex" alignItems="center">
        <Checkbox 
          checked={todo.complete}
          onChange={()=> toggleTodo(todo)}
          color="primary"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <Divider className={classes.divider} orientation="vertical" />
        <Typography 
          variant="caption" 
          style={{paddingLeft: 8}} 
          className={todo.complete ? classes.todoCompleted : undefined }
        >
          {todo.text}
        </Typography>
      </Box>
      <Box>
        <IconButton
          aria-label="delete"
          onClick={() => {}}
          edge="end"
          style={{marginRight: 1}}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};