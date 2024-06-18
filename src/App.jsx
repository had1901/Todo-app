import { useEffect, useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  const dataStores = (newList) => {
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }
  const handleAddTodo = (newTodo) => {
    const newTodoList = [...todos, newTodo]
    dataStores(newTodoList)
    setTodos(newTodoList)
  }
  const handleDeleteTodo = (index) => {
    const newTodoList = todos.filter((todo, i) => {
      return i !== index
    })
    dataStores(newTodoList)
    setTodos(newTodoList)
  }
  const  handleEditTodo= (index) => {
    const valueEdit = todos[index]
    setTodoValue(valueEdit)
    handleDeleteTodo(index)
  }
  useEffect(() => {
    if(!localStorage) {
      return
    }
    let stores = localStorage.getItem('todos')
    if(!stores) {
      return
    } 
    stores = JSON.parse(stores).todos
    setTodos(stores)
    
  },[])
  return (
    <main className="main">
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodo={handleAddTodo}/>
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo}/>
    </main>
  )
}

export default App
