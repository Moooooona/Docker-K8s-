import React, {useState , useEffect} from "react";
import axios from "axios";
import './App.css'
import Addtask from "./Components/Addtask";
import Todolist from "./Components/Todolist";

function App(){
  const [todolist,setTodolist] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/api/tasks').then(res => {
      setTodolist(res.data)
    }).catch(err => console.log(err))
  },[])
  
  const addTask= newTask =>{
    setTodolist([...todolist, newTask])
  }

  const taskComplete = task =>{
    const newList = [...todolist]
    newList.forEach(item => {
      if(item._id === task._id){
        item.isComplete = task.isComplete
      }
    })
    setTodolist(newList)

  }

  const removeTask=task => {
    const newList = todolist.filter(item => !(item._id === task._id))
    setTodolist(newList)

  }

return(
<div>
<h1>
  <Addtask addTask= {addTask}/>
  <Todolist todolist= {todolist} taskComplete = {taskComplete } removeTask = {removeTask}/>
</h1>

</div>

)
}
export default App