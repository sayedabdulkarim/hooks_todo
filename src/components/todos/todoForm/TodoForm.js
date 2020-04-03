import React, { useState, useContext } from 'react'
import TodosContext from '../../../context'

export default function TodoForm() {

  const [ todo, setTodo ] = useState('')
  const { state, dispatch } = useContext(TodosContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: 'ADD_TODO', payload: todo})
    setTodo('')
    // console.log(todo, 'hello world');
  }
  return (
    <form style={{ margin: '10px 0'}} onSubmit={ handleSubmit }>
      <input autoFocus type="text" name="text" placeholder="Add TODO" onChange={ e => setTodo(e.target.value) } value={ todo }/> <br/> <br/>
      <button type="submit">SUBMIT</button>
    </form>
  )
}
