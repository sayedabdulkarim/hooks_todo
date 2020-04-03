import React, { useContext } from 'react'

import TodosContext from '../../../context'

import styles from './TodoList.css'

//comps
import TodoForm from '../todoForm/TodoForm'

export default function TodoList() {
  const { state, dispatch } = useContext( TodosContext )
  const { todos } = state
  // console.log(state, ' stateeeee');

  return (
    <div className={ styles.TodoList }>
      <TodoForm />
      <h1>{ todos.length ? `${ todos.length } Todos Items` : 'No Todos' }</h1>
      <span>Click todo text to toggle</span>
      <hr/>
      <hr/>
      <ul>
        {
          todos.map(todo => {
            return <li key={ todo.id }>
              <strong style={{ color: todo.complete ? 'red': '', textDecoration: todo.complete ? 'line-through': '' }} onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo})}>{ todo.text }</strong>
              <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo })}>Delete</button>
            </li>
          })  
        }
      </ul>
    </div>
  )
}
