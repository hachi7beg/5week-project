import './App.css';
import React, {useState} from "react"

function App() {
  const [todoText, setTodoText] = useState("")
  const [todoList, setTodoList] = useState([])
  const onChangeTodoText =(e)=>{
    setTodoText(e.target.value)
  }
  const onClickAdd = ()=>{
    if (todoText === ""){
      alert("Enter text")
    }else{
      const newTodoList = [...todoList, todoText]
      setTodoList(newTodoList)
      setTodoText("")
    }
  }

  console.log(todoList)
  return (
    <div>
      <h1>ToDo List</h1>
      <ul>
        {todoList.map((todo)=>(
          <li>
            <input
            type='checkbox'
            />
            {todo}
          </li>
        ))}
      </ul>
        

    
      <div>
        <input value={todoText} onChange={onChangeTodoText}/>
        <button onClick={onClickAdd}>Add</button>
      </div>
    </div>
  )
}

export default App;
