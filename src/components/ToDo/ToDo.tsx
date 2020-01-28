import React from 'react';
import PropTypes from 'prop-types';
import { StyledToDo } from './ToDo.styles';

interface ToDo {
  text: string,
  done: boolean
}


const ToDo: React.FC<ToDo> = (props) => (
  <StyledToDo className="ToDoWrapper">
    Test content
  </StyledToDo>
);

ToDo.propTypes = {
  // bla: PropTypes.string,
};

ToDo.defaultProps = {
  // bla: 'test',
};

export default ToDo;
