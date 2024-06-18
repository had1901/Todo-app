import { useRef, useState } from "react"

function TodoInput({handleAddTodo,todoValue, setTodoValue}) {
  const input = useRef()
  const handleInput = (e) => {
    setTodoValue(e.target.value)
    
  }
  return (
    <div>
      <input ref={input} value={todoValue} placeholder="Text..." onChange={(e) => handleInput(e)}  />
      <button onClick={() => {
          handleAddTodo(todoValue)
          setTodoValue('')
          input.current.focus()
        }}>Add</button>
    </div>
  )
}

export default TodoInput