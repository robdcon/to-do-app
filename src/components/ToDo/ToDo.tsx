import React from 'react';
import PropTypes from 'prop-types';
import { StyledToDo } from './ToDo.styles';

const ToDo: React.FC<ToDoProps> = (props) => (
  <StyledToDo id={props.id} data-testid="test-todo" done={props.done} className={`ToDoWrapper ${props.done}`}>
    <input type="checkbox" checked={props.done} />
    {props.text}
  </StyledToDo>
);

ToDo.propTypes = {
  // bla: PropTypes.string,
};

ToDo.defaultProps = {
  // bla: 'test',
  done:false
};

export default ToDo;
