import React, {useState} from 'react';
import { StyledToDo, StyledCheckBox, StyledRemoveButton, StyledEditButton } from './ToDo.styles';
import Button from '../Button';

interface ToDoProps {
  todo: ToDo
  toggleToDo: ToggleToDo
  removeToDo: RemoveToDo
  editToDo: EditToDo
}

const ToDo: React.FC<ToDoProps> = ({todo, toggleToDo, removeToDo, editToDo}) => {

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
      <StyledEditButton onClick={() => editToDo()} />
    </StyledToDo>
  )
};

export default ToDo;
