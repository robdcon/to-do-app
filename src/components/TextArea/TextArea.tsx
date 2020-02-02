import React, {useState, ChangeEvent, FormEvent} from 'react';
import { StyledTextAreaContainer, StyledToggleButton, StyledInput } from './TextArea.styles';



interface TextAreaProps {
  addToDo: AddToDo
}

const Input = React.forwardRef<HTMLInputElement>((props, ref) => (
  <input ref={ref} className="TextInput" />
));

const TextArea: React.FC<TextAreaProps> = ({addToDo}) => {

  const [newToDo , setNewToDo] = useState('');
 
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    setNewToDo(e.target.value)
   
  }

  const handleSubmit  = (e: FormEvent<HTMLButtonElement>) => {

    e.preventDefault();
    addToDo(newToDo);

  }

  return (

  <StyledTextAreaContainer className="TextAreaWrapper" onSubmit={handleSubmit}>
    <StyledInput id="todo-text" value={newToDo} name="todo-text" placeholder="What's to do?..." onChange={handleChange} />
    <Input />
    <StyledToggleButton type="submit" >SAVE</StyledToggleButton>
  </StyledTextAreaContainer>

  )

};

export default TextArea;
