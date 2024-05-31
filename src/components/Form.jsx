import React, { useEffect, useState } from 'react'

const Form = ({addTodo , edit , updateTodo}) => {


    const [text ,setText] =useState("")

const handleSubmit = (e) => {
   e.preventDefault()
  //  addTodo(text);
  if (edit.editMode){
    updateTodo(edit.todo.id , text)}
    else {
      addTodo(text)
    } 
 setText("");
}

useEffect(()=>{
 setText(edit.todo.text);
},[edit]);






  return (
    <form action="" className='my-5 p-5' onSubmit={(e)=>handleSubmit(e)}>

        <input type="text" className="form-control rounded-0 my-3" placeholder="text"
        onChange={(e)=> setText(e.target.value)}
        value={text}
        required
        />
        <button className="btn btn-success rounded-0 w-100">save</button>
    </form>
  )
}

export default Form
