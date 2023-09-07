import './App.css';
import React, {useState, useEffect} from "react"

function App() {
  const initialTodoList = JSON.parse(localStorage.getItem("todoList")) || [];

  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState(initialTodoList);


  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const onChangeTodoText =(e)=>{
    setTodoText(e.target.value)
  }
  const onClickAdd = ()=>{
    if (todoText === ""){
      alert("Enter text")
    }else{
      const newTodoList = [...todoList, {text: todoText , id: generateUniqueID(), completed: false} ]
      setTodoList(newTodoList)
      setTodoText("")
    }
  }
  const deleteTodoList = (todo) => {
    const index = todoList.findIndex((item) => item.id === todo.id);
    console.log(index)
    if (index !== -1) {
      const newTodoListafterDelete = [...todoList];
      newTodoListafterDelete.splice(index, 1);
      setTodoList(newTodoListafterDelete);
    }
  };
  const toggleTodoCompleted =(todo)=>{
    const updateTodoList = todoList.map((item) =>
    item.id === todo.id ? {...item, completed: !item.completed} :item
    )
    setTodoList(updateTodoList)
  }


  console.log(todoList)
  return (
    <div>
      <h1 className='title'>ToDo List</h1>
      <ul className='list-container'>
        {todoList.map((todo)=>(
          <li key={todo.id}>
            <input
            type='checkbox'
            checked={todo.completed}
            onChange={()=>toggleTodoCompleted(todo)}
            />
            {todo.text}
            <button onClick={()=>deleteTodoList(todo)}>delete</button>
          </li>
        ))}
      </ul>
        

    
      <div className='title'>
        <input value={todoText} onChange={onChangeTodoText}/>
        <button onClick={onClickAdd}>Add</button>
      </div>
    </div>
  )
}

export default App;

function generateUniqueID() {
  const timestamp = Date.now();
  return `${timestamp}`;
}