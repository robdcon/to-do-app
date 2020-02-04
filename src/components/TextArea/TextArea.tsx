import React, {useState, ChangeEvent, FormEvent} from 'react';
import { StyledTextAreaContainer, StyledToggleButton, StyledInput, StyledLabel } from './TextArea.styles';
import Button from '../Button';



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
  const handleSubmit  = (e: FormEvent<HTMLButtonElement>) => {

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
    <StyledInput id="todo-text" value={newToDo} name="todo-text" placeholder="What's to do?..." onChange={handleChange} />
    <StyledToggleButton data-testid="todo-submit-btn" type="submit" text="SAVE" />
  </StyledTextAreaContainer>

  )

};

export default TextArea;
