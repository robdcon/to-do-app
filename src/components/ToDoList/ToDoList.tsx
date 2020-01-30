import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ToDo from '../ToDo'
import { StyledToDoList } from './ToDoList.styles';
//import { Test } from './ToDoList.styles';

interface ToDoListProps {

    todos: Array<ToDo>
    toggleToDo: ToggleToDo
}

const ToDoList: React.FC<ToDoListProps> = ({ todos, toggleToDo}) => {

   return ( 
      <StyledToDoList>
        {
          todos.map((todo) => {
            return <li key={todo.text}><ToDo todo={todo} toggleToDo={toggleToDo} /></li>
          })
        }
      </StyledToDoList>
    )
}

 



export default ToDoList;
