import React from 'react'

export const TodoItem = (Todo) => {
  return (
    <div>
      <h4>{Todo.title}</h4>
      <p>{Todo.des}</p>
    </div>

 
  )
}
