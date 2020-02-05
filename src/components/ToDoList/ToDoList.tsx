import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ToDo from '../ToDo'
import { StyledToDoList } from './ToDoList.styles';

// interface ToDoListProps {
//    toDoList: Array<ToDo>
//    noListText: string
//    toDoFunctions:{
//       toggleToDo:() => void,
//       removeToDo:() => void,
//       editToDo: () => void
//    }
// }

const ToDoList: React.FC = ({children }) => {

   return ( 
      <StyledToDoList role="list" data-testid="test-todo-list">

      { 
       children
      //   (toDoList && toDoList.length > 0) ? // If a list exists return the list items
      //   ( toDoList.map(todo => {
      //     return <ToDo todo={todo} />
      //    })) : // If no list return appropriate text message
      //   (<div>
      //       <p>{noListText}</p>
      //    </div>)
      }
      </StyledToDoList>
    )
}

export default ToDoList;
