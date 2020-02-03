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
    console.log(newToDo.length)
    addToDo(newToDo);

  }

  return (

  <StyledTextAreaContainer className="TextAreaWrapper" onSubmit={handleSubmit}>
    <StyledInput id="todo-text" value={newToDo} name="todo-text" placeholder="What's to do?..." onChange={handleChange} />
    <StyledToggleButton type="submit">SAVE</StyledToggleButton>
  </StyledTextAreaContainer>

  )

};

export default TextArea;
