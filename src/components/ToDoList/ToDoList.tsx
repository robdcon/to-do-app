import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ToDo from '../ToDo'
//import { Test } from './ToDoList.styles';

const todos = [
  {text:"todo one", done:true, id: null},
  {text:"todo two",  done:false, id: null}
]

const ToDoList: React.FC<ToDoProps> = (props) => {

 const [toDoList, setToDoList] = useState(todos)

 const toggleStatus = (targetToDo: ToDo) => {
  console.log('done');
  const updatedToDos = toDoList.map((toDo) => {
    if(toDo === targetToDo){
      return {
        ...toDo,
        done: !toDo.done
      }
    }
    return toDo;
  })

  setToDoList(updatedToDos)

}

  return (

  <ul className="ToDoListWrapper">
   { 
      toDoList.map((todo, i) => {
       return <ToDo key={i} text={todo.text} done={todo.done} id={null} toggleDone={toggleStatus}/>
      })
    }
  </ul>

  )

};

ToDoList.propTypes = {
  // bla: PropTypes.string,
};

ToDoList.defaultProps = {
  // bla: 'test',
};

export default ToDoList;
