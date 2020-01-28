import React from 'react';
import PropTypes from 'prop-types';
import { StyledToDo } from './ToDo.styles';

interface ToDo {
  text: string,
  status: string
}


const ToDo: React.FC<ToDo> = (props) => (
  <StyledToDo className={`ToDoWrapper ${props.status}`}>
    {props.text}
  </StyledToDo>
);

ToDo.propTypes = {
  // bla: PropTypes.string,
};

ToDo.defaultProps = {
  // bla: 'test',
};

export default ToDo;
