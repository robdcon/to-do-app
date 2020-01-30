import React from 'react';
import { StyledToDo } from './ToDo.styles';

interface ToDoProps {
  todo: ToDo,
  toggleToDo: ToggleToDo
}

const ToDo: React.FC<ToDoProps> = ({todo, toggleToDo}) => (
  <StyledToDo 
    data-testid="test-todo" 
    done={todo.done} 
    className={`ToDoWrapper`}
  >
    <input type="checkbox" checked={todo.done} onChange={() => toggleToDo(todo)} />
    {todo.text}
  </StyledToDo>
);

export default ToDo;
