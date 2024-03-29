import React from 'react'
import { TodoListItem } from './TodoListItem'

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <>
      {todos.map(todo => {
        return <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
      })}
    </>
  )
}

export default TodoList
