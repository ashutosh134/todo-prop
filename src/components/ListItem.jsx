import React from 'react'

const ListItem = ({todo, deleteTodo , editTodo }) => {
  return (
    <li className="list-group-item rounded-0 p-5 mx-5">
    <h1 className="display-6 mx-3 rounded-0">{todo.text}</h1>
    <span className='float-end'>
        <button className="btn btn-primary rounded-0 mx-5" onClick={()=>editTodo(todo)} >edit</button>
        <button className="btn btn-danger rounded-0 " onClick={()=>deleteTodo(todo.id)}>delete</button>
    </span>

  </li>
  )
}

export default ListItem
