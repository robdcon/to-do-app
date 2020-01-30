import React, {useState, ChangeEvent} from 'react';
import PropTypes from 'prop-types';
import { StyledTextAreaContainer, StyledToggleButton, StyledInput } from './TextArea.styles';

interface Props {
  // text:string,
  // toggleToDo: () => void,
  // newToDoActive: boolean
}

const TextArea: React.FC<Props> = (props) => {

  // const [newToDoActive , setNewToDoActive] = useState(true);
  // const [newToDoText , setNewToDoText] = useState('');
  // const [toDoList , setToDoList] = useState([]);

 
  
  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setNewToDoText(e.target.value)
  // }

  // const handleSubmit  = (e: ChangeEvent<HTMLInputElement>) =>{
  //   e.preventDefault();
  // }

  // const toggleTodDo = () => {
  //   console.log('toggleToDo')
  //   setNewToDoActive(!newToDoActive)
  //   console.log(newToDoActive)

  // }

  return(
  <StyledTextAreaContainer className="TextAreaWrapper">
    <StyledInput id="todo-text" name="todo-text" placeholder="What's to do?..." />
    <StyledToggleButton >SAVE</StyledToggleButton>
  </StyledTextAreaContainer>
  )
};

export default TextArea;
