import React, { useContext, useReducer } from 'react'
import ReactDOM from 'react-dom'

//
import TodosContext from './context'
import TodosReducer from './reducer'

//screens
import TodoList from './components/todos/todoList/TodoList'

const App = () => {
 const initialState = useContext(TodosContext)
 const [ state, dispatch ] = useReducer(TodosReducer, initialState)

 return (
   <TodosContext.Provider value={{ state, dispatch }}>
      <TodoList />
   </TodosContext.Provider>
 )
}


ReactDOM.render(<App />, document.getElementById('app'))