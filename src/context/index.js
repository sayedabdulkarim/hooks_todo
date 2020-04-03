import React from 'react';

const TodosContext = React.createContext({
  todos: [
    { id: 1, text: 'html', complete: false},
    { id: 2, text: 'css', complete: false},
    { id: 3, text: 'javascript', complete: false}
  ],
  currentTodo: {}
})

export default TodosContext