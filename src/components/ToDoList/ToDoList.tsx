import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './ToDoList.styles';

const todos: Array<ToDo> = [
  {text:"todo one", done:false, id: null},
  {text:"todo two",  done:false, id: null}
]

const ToDoList: React.FC = (props) => (
  <ul className="ToDoListWrapper">
    
  </ul>
);

ToDoList.propTypes = {
  // bla: PropTypes.string,
};

ToDoList.defaultProps = {
  // bla: 'test',
};

export default ToDoList;
