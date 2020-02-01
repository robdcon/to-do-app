import React, {useState} from 'react';
import { StyledToDo, StyledCheckBox, StyledRemoveButton } from './ToDo.styles';
import Button from '../Button';

interface ToDoProps {
  todo: ToDo,
  toggleToDo: ToggleToDo,
  removeToDo: RemoveToDo
}

const ToDo: React.FC<ToDoProps> = ({todo, toggleToDo, removeToDo}) => {

  const [hover, setHover] = useState(false);

  const onMouseEnter = () => {
    setHover(true)
   console.log('enter')
  }

  const onMouseLeave = () => {
    setHover(false)
    console.log('leave')
  }

  return (
    <StyledToDo 
      data-testid="test-todo" 
      done={todo.done} 
      className={`ToDoWrapper ${hover ? "active" : "inactive"}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}

    >
      <StyledCheckBox type="checkbox" checked={todo.done} onChange={() => toggleToDo(todo)} />
      {todo.text}
      <StyledRemoveButton onClick={() => removeToDo(todo)} />
    </StyledToDo>
  )
};

export default ToDo;
