import React, {useState, ChangeEvent, FormEvent} from 'react';
import { StyledTextAreaContainer, StyledToggleButton, StyledInput, StyledLabel } from './TextArea.styles';
import Button from '../Button';
import { MdAddCircle } from "react-icons/md";



interface TextAreaProps {
  addToDo: AddToDo
}

const TextArea: React.FC<TextAreaProps> = ({addToDo}) => {

  const [newToDo , setNewToDo] = useState('');
  
  //SET VALUE OF INPUT ELEMENT USING HOOKS
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    setNewToDo(e.target.value)
   
  }

  // SUBMIT FOR TO CREATE NEW TODO
  const handleSubmit  = (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    // Check if newToDo has text
    if(newToDo)
    { 
      console.log("New To Do:", newToDo);
      addToDo(newToDo);
    }
   

  }

  return (

  <StyledTextAreaContainer  data-testid="test-textarea" className="TextAreaWrapper" onSubmit={handleSubmit}>
    <StyledLabel htmlFor="todo-text">New To Do</StyledLabel>
    <StyledInput id="todo-text" value={newToDo} name="todo-text" placeholder="What do you need to do?" onChange={handleChange} />
    <Button data-testid="todo-submit-btn" type="submit"><MdAddCircle size={'1.5rem'} color={'#ffffff'}/></Button>
  </StyledTextAreaContainer>

  )

};

export default TextArea;
