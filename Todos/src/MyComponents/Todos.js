import React from 'react'
import {TodoItem} from "../MyComponents/TodoItem";
export const Todos = (props) => {
  return (

    <div className='Container'>
      <h3>Todos List</h3>
      {/* <h5>{props.todos}</h5> */}
      <TodoItem todo={props.todo[0]}/>
    </div>
  )
}
