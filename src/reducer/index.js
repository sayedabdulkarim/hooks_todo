  const TodosReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // const newTodo = {
      //   id: Math.random(),
      //   text: action.payload,
      //   complete: false
      // }
      // const newTodos = [...state.todos, newTodo ]
      const newTodos = [...state.todos, { id: Math.random(), text: action.payload, complete: false} ]
      return {
        ...state, 
        todos: newTodos
      }
    case 'TOGGLE_TODO':
      const todos = state.todos.map(todo => todo.id === action.payload.id ? { ...action.payload, complete: !action.payload.complete } : todo )
      return {
        ...state, 
        todos
      }
    case 'DELETE_TODO':
      const filterTodos = state.todos.filter(todo => todo.id !== action.payload.id )
      // const filterTodos = state.todos.find(todo => todo.id === action.payload.id )
      return {
        ...state, 
        todos: filterTodos
      }
    
    default:
      return state
  }
}

export default TodosReducer