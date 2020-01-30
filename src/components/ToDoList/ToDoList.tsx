import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ToDo from '../ToDo'
//import { Test } from './ToDoList.styles';

interface ToDoListProps {

    todos: Array<ToDo>
    toggleToDo: ToggleToDo
}

const ToDoList: React.FC<ToDoListProps> = ({ todos, toggleToDo}) => {

   return ( 
    <ul>
      {
        todos.map((todo) => {
          return <ToDo key={todo.text} todo={todo} toggleToDo={toggleToDo} />
        })
      }
      </ul>
    )
}

 



export default ToDoList;
