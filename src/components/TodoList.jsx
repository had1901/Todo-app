// eslint-disable-next-line no-unused-vars
import React from 'react'
import TodoCard from './TodoCard';
function TodoList({ todos , handleDeleteTodo, handleEditTodo}) {
  
  return (
    <div>
      <ul>
        {
          todos.map((todo, index) => {
            return (
              <TodoCard key={index} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} index={index}>
                  <p>{todo}</p>
              </TodoCard>
            )
          })
        }
      </ul>
    </div>
  )
}

export default TodoList