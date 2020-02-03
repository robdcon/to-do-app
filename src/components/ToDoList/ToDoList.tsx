import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ToDo from '../ToDo'
import { StyledToDoList } from './ToDoList.styles';


interface ToDoListProps {

    todos: Array<ToDo>
    toggleToDo: ToggleToDo
    removeToDo: RemoveToDo
    editToDo: EditToDo
  
}

const ToDoList: React.FC<ToDoListProps> = ({ todos, toggleToDo, removeToDo, editToDo}) => {

   return ( 
      <StyledToDoList>
        {
          todos.map((todo) => {
            return <li key={`${todo.id}`}><ToDo todo={todo} toggleToDo={toggleToDo} removeToDo={removeToDo} editToDo={editToDo}/></li>
          })
        }
      </StyledToDoList>
    )
}

export default ToDoList;
