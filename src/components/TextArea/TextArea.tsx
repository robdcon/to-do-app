import React, {useState, ChangeEvent} from 'react';
import PropTypes from 'prop-types';
import { StyledTextAreaContainer, StyledToggleButton, StyledInput } from './TextArea.styles';

interface Props {
  text:string,
  toggleToDo: () => void,
  newToDoActive: boolean
}

const TextArea: React.FC<Props> = (props) => {

  const [newToDoActive , setNewToDoActive] = useState(true);
  const [newToDoText , setNewToDoText] = useState('');
  const [toDoList , setToDoList] = useState([]);

 
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewToDoText(e.target.value)
  }

  const handleSubmit  = (e: ChangeEvent<HTMLInputElement>) =>{
    e.preventDefault();
    setToDoList()
  }

  const toggleTodDo = () => {
    console.log('toggleToDo')
    setNewToDoActive(!newToDoActive)
    console.log(newToDoActive)

  }




  return(
  <StyledTextAreaContainer className="TextAreaWrapper" active={newToDoActive}>
    <StyledInput id="todo-text" name="todo-text" value={newToDoText} onChange={handleChange} placeholder="What's to do?..." />
    <StyledToggleButton onSubmit={handleSubmit}>SAVE</StyledToggleButton>
  </StyledTextAreaContainer>
  )
};

TextArea.propTypes = {
  // bla: PropTypes.string,
};

TextArea.defaultProps = {
  // bla: 'test',
};

export default TextArea;
