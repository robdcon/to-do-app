import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ToDo from '../ToDo'
import { StyledToDoList } from './ToDoList.styles';


const ToDoList: React.FC = ({ children }) => {

   return ( 
      <StyledToDoList id="test-todo-list">
       {children}
      </StyledToDoList>
    )
}

export default ToDoList;
