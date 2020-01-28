import React from 'react';
import PropTypes from 'prop-types';
import { StyledToDo } from './ToDo.styles';
// Test
import { render, fireEvent, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

interface ToDo {
  text: string,
  status: string
}


const ToDo: React.FC<ToDo> = (props) => (
  <StyledToDo data-testid="test-todo" className={`ToDoWrapper ${props.status}`}>
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
