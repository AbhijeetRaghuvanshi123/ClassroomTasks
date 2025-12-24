import React from 'react'
import { useSelector } from 'react-redux'

const ViewToDo = () => {
    const todo = useSelector((state) => state.todo);
    console.log(todo);
  return (
    <div>ViewToDo</div>
  )
}

export default ViewToDo