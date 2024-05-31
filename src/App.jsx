import React, { useState } from 'react'
import Navbar from './components/Navbar'
import ListGroup from './components/ListGroup'
import Form from './components/Form'

const App = () => {
  
  const [todos , setTodos] = useState([
    // {
    //   id:1,
    //   text:"cry",
    // },

    // {
    //   id:2,
    //   text:"run",

    // },
  ])

  const [edit ,setEdit] = useState({
    todo:{},
    editMode: false
  });



const editTodo = (oldTodo) => {
 
setEdit({
  todo: oldTodo,
  editMode: true,
})
}




const updateTodo = (oldId , newText ) => {
  setTodos(todos.map((item) => item.id === oldId ? {id:oldId , text: newText} : item)) ,
  setEdit({
    todo:{},
    editMode:false,
  });
};







  const deleteTodo =(id)=>{
 setTodos(todos.filter((item)=>{
  if(item.id !== id){
    return true
  }
 }))
  }

  // add

  const addTodo = (text) => {

    const newTodo = {
      id:crypto.randomUUID(),
      text,
      // text:"text",
    };

    setTodos([
      newTodo , ...todos
    ])

  

  };

  




  return (
    <>
      <Navbar/>
      <Form addTodo={addTodo} edit={edit} updateTodo={updateTodo} />
      <ListGroup todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/>
      
    </>
  )
}

export default App
