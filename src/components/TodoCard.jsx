import { MdEditSquare } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
function TodoCard({children, handleDeleteTodo, handleEditTodo, index}) {
  return (
    <li>
      <div className="card">
        {children}
        <MdEditSquare onClick={() => handleEditTodo(index)}/>
        <button onClick={() => handleDeleteTodo(index)} ><FaRegTrashCan /></button>
      </div>
    </li>
  )
}

export default TodoCard