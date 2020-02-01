import React from 'react';
import { StyledToDo } from './ToDo.styles';
import Button from '../Button';

interface ToDoProps {
  todo: ToDo,
  toggleToDo: ToggleToDo,
  removeToDo: RemoveToDo
}

const ToDo: React.FC<ToDoProps> = ({todo, toggleToDo, removeToDo}) => (
  <StyledToDo 
    data-testid="test-todo" 
    done={todo.done} 
    className={`ToDoWrapper`}
  >
    <input type="checkbox" checked={todo.done} onChange={() => toggleToDo(todo)} />
    {todo.text}
    <button onClick={() => removeToDo(todo)} >REMOVE</button>
  </StyledToDo>
);

export default ToDo;
