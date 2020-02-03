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
          onFocus={onMouseEnter}
          onBlur={onMouseLeave}
          htmlFor={ `checkbox-${todo.id}`}
         
  
        >
          <StyledCheckBox id={ `checkbox-${todo.id}`} name="checkbox" type="checkbox" checked={todo.done} onChange={() => toggleToDo(todo)} />
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
            <label htmlFor="edit-todo">Edit To Do</label>
            <input type="text" id="edit-todo" name="edit-todo" onChange={handleChange} value={newToDo}  placeholder="What's to do?..." />
            <button type="submit">SAVE</button>
          </form>
         
          </StyledToDo>
        )
      }
    

  }

 
    return (

      renderComponent()
      // <StyledToDo 
      //   data-testid="test-todo" 
      //   done={todo.done} 
      //   className={`ToDoWrapper ${hover ? "active" : "inactive"}`}
      //   onMouseEnter={onMouseEnter}
      //   onMouseLeave={onMouseLeave}

      // >
      //   <StyledCheckBox type="checkbox" checked={todo.done} onChange={() => toggleToDo(todo)} />
      //   {todo.text}
      //   <StyledRemoveButton onClick={() => removeToDo(todo)} />
      //   <StyledEditButton onClick={() => editToDo()} />
      // </StyledToDo>
    )
  
};

export default ToDo;
