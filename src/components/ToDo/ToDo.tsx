import React, {useState, ChangeEvent, FormEvent} from 'react';
import { StyledToDo, StyledCheckBox, StyledRemoveButton, StyledEditButton } from './ToDo.styles';
import Button from '../Button';
import TextArea from '../TextArea';


interface ToDoProps {
  todo: ToDo
  toggleToDo: ToggleToDo
  removeToDo: RemoveToDo
  editToDo: EditToDo
}

const ToDo: React.FC<ToDoProps> = ({todo, toggleToDo, removeToDo, editToDo}) => {

  const [hover, setHover] = useState(false);
  const [editing, setEditing] = useState(false);
  const [newToDo , setNewToDo] = useState('');

  const onMouseEnter = () => {
    setHover(true)
  //  console.log('enter')
  }

  const onMouseLeave = () => {
    setHover(false)
    // console.log('leave')
  }

  const handleFocus = (e:KeyboardEvent) => {
    
    e = e || window.event;
    let direction;
    switch(e.which || e.keyCode) {
      case 37: // left
        direction = 'LEFT';
      break;

      case 38: // up
        direction = 'UP';
      break;

      case 39: // right
        direction = 'RIGHT';
      break;

      case 40: // down
        direction = 'DOWN';
      break;

      case 13: // down
        direction = 'ENTER';
        toggleToDo(todo);
      break;

      default: return; // exit this handler for other keys
    }

      console.log(direction)


  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewToDo(e.target.value)
  }

  const handleSubmit  = (e: FormEvent) => {

    e.preventDefault();
    editToDo({...todo, text:newToDo})
    toggleEditingMode();

  }

  // EDITING MODE
  const toggleEditingMode = () => {
    setEditing(!editing);
  }

  const renderComponent = () => {

    if(!editing) { 
      return (
        <StyledToDo 

          data-testid="test-todo" 
          done={todo.done} 
          className={`ToDoWrapper ${hover ? "active" : "inactive"}`}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onKeyDown={handleFocus}
          onFocus={onMouseEnter}
          onBlur={onMouseLeave}
          htmlFor={ `checkbox-${todo.id}`}
         
  
        >
          <StyledCheckBox id={ `checkbox-${todo.id}`} name="checkbox" type="checkbox" checked={todo.done} onFocus={() => console.log('checkbox')} onChange={() => toggleToDo(todo)} />
          {todo.text}
          <StyledRemoveButton onClick={() => removeToDo(todo)} />
          <StyledEditButton onClick={() => toggleEditingMode()} />
        </StyledToDo>
      )
    } else {
     
        return (
          <StyledToDo 
            data-testid="test-todo" 
            done={todo.done} 
            className={`ToDoWrapper ${hover ? "active" : "inactive"}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onFocus={onMouseEnter}
            onBlur={onMouseLeave}
    
          >
          
          <form onSubmit={handleSubmit} aria-label="Edit To Do Text">
            <label htmlFor="edit-todo" aria-hidden="true">Edit To Do</label>
            <input type="text" id="edit-todo" name="edit-todo" onChange={handleChange} value={newToDo}  placeholder="What's to do?..." />
            <button type="submit">SAVE</button>
          </form>
         
          </StyledToDo>
        )
      }
    

  }

 
    return (

      renderComponent()
    )
  
};

export default ToDo;
