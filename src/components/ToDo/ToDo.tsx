import React, {useState, ChangeEvent, FormEvent} from 'react';
import { StyledToDo, StyledCheckBox, StyledRemoveButton, StyledEditButton, StyledEditForm, StyledEditInput } from './ToDo.styles';
import Button from '../Button';
import TextArea from '../TextArea';
import { MdCheckCircle, MdEdit, MdRemoveCircle, MdSave, MdCancel } from "react-icons/md";


interface ToDoProps {
  todo: ToDo
  toggleToDo: ToggleToDo
  removeToDo: RemoveToDo
  editToDo: EditToDo
}

const ToDo: React.FC<ToDoProps> = ({todo, toggleToDo, removeToDo, editToDo}) => {

  const [hover, setHover] = useState(false); // Handle hover styles
  const [checkboxFocus, setCheckboxFocus] = useState(false); // Handle focus of pseudo element for accessibility, effected by onChange of hidden native checkbox
  const [editing, setEditing] = useState(false); // Set editing mode of ToDo to reveal a form for modifying text
  const [newToDo , setNewToDo] = useState(''); // Set new ToDo text

  const onMouseEnter = () => {
    setHover(true)
  //  console.log('enter')
  }

  const onMouseLeave = () => {
    setHover(false)
    // console.log('leave')
  }

  const handleCheckboxFocus = () =>{

    setCheckboxFocus(!checkboxFocus);

  }

  const handleFocus = (e:KeyboardEvent) => {
    
    e = e || window.event;
    let keyevent;
    switch(e.which || e.keyCode) {
      // case 37: // left
      //   keyevent = 'LEFT';
      // break;

      // case 38: // up
      //   keyevent = 'UP';
      // break;

      // case 39: // right
      //   keyevent = 'RIGHT';
      // break;

      // case 40: // down
      //   keyevent = 'DOWN';
      // break;

      case 13: // down
        keyevent = 'ENTER';
        toggleToDo(todo);
      break;

      default: return; // exit this handler for other keys
    }

      console.log(keyevent)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewToDo(e.target.value)
  }

  const handleSubmit  = (e: FormEvent) => {
    
    e.preventDefault();
    if(newToDo) {
      editToDo({...todo, text:newToDo})
      toggleEditingMode();
    }
   

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
          checkBoxfocused={checkboxFocus}
         
  
        >
          <MdCheckCircle size="1.15rem" style={{position:'absolute', left:'30px', borderRadius:'3px', border: `${checkboxFocus ? '1px solid #009688' : 'none'}`}} className="todo-done-check" color={todo.done ? '#03c503' : '#c1c1c1'}/>
          <StyledCheckBox tabindex="0" id={ `checkbox-${todo.id}`} name="checkbox" type="checkbox" checked={todo.done} onBlur={handleCheckboxFocus} onFocus={handleCheckboxFocus} onChange={() => toggleToDo(todo)}>
            </StyledCheckBox>
          {todo.text}
          <StyledRemoveButton onClick={() => removeToDo(todo)} ><MdRemoveCircle  size="1.15rem" style={{color:'#ff0000'}} /></StyledRemoveButton>
          <StyledEditButton onClick={() => toggleEditingMode()}><MdEdit  size="1.15rem" style={{color:'#000000'}}/></StyledEditButton>
        </StyledToDo>
      )
    } else { // Display a form to edit ToDo when editing mode is true
     
        return (

          <StyledToDo 
            data-testid="test-todo" 
            done={todo.done} 
            className={`ToDoWrapper ${hover ? "active" : "inactive"}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onFocus={onMouseEnter}
            onBlur={onMouseLeave}
            onKeyDown={toggleToDo} 
    
          >
          
          <StyledEditForm onSubmit={handleSubmit} aria-label="Edit To Do Text">
            <label htmlFor="edit-todo" aria-hidden="true">
            <StyledEditInput type="text" id="edit-todo" name="edit-todo" onChange={handleChange} value={newToDo} placeholder="What do you need to do?" />
            </label>
            <Button type="submit"><MdSave size="1.25em" color={'#009688'} /></Button>
            <Button handleClick={toggleEditingMode} ><MdCancel size="1.25em" color={'#e91e1e'}/></Button>
          </StyledEditForm>
         
          </StyledToDo>
        )
      }
    

  }
    return (

      renderComponent()
    )
  
};

export default ToDo;
