import React, {useState, ChangeEvent, FormEvent} from 'react';
import { StyledTextAreaContainer, StyledToggleButton, StyledInput } from './TextArea.styles';



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

  <StyledTextAreaContainer tabindex="0" data-testid="test-textarea" className="TextAreaWrapper" onSubmit={handleSubmit}>
    <label htmlFor="todo-text">New To Do</label>
    <StyledInput id="todo-text" value={newToDo} name="todo-text" placeholder="What's to do?..." onChange={handleChange} />
    <StyledToggleButton data-testid="todo-submit-btn" type="submit">SAVE</StyledToggleButton>
  </StyledTextAreaContainer>

  )

};

export default TextArea;
