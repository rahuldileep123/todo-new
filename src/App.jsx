
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { addToDo, completeToDO, removeToDoItem } from './Redux/toDoSlice'
import { useState } from 'react'

function App() {
const {allToDO}=useSelector(state=>state.toDoReducer)
const dispatch=  useDispatch()
const [toDo,setToDo]=useState("")
const [checked,setChecked]=useState(false)
const [count,setCount]=useState(0)

const handleSet=(e)=>{
  setToDo(e)

}
const handleTodo=()=>{
  console.log(toDo);
  dispatch(addToDo(toDo))
   setToDo("")
}

const handleDelete=(item)=>{
 
  // if(item){
  //   setCount(count-1)
  // }
  dispatch(removeToDoItem(item))
}


const handleComplete=(id,e,nam)=>{ 

  
  if(e){
    setCount(count+1)
    document.getElementById(id).style.backgroundColor= "lightgreen"
  }
  else{
    setCount(count-1)
    document.getElementById(id).style.backgroundColor= "white"
  }
 
}

return (
    <>
      <div style={{height:"100vh"}} className="container d-flex justify-content-center align-items-center">
        <div style={{ width: "70%" }} className="to-do d-flex flex-column p-4">
          <h1>MY TODO LIST</h1>
          <div className="d-flex">
            <input value={toDo} onChange={(e)=>handleSet(e.target.value)}  placeholder='add todo' type="text" className='form-control w-25 me-2' />
            <button onClick={handleTodo} className='btn btn-primary'>Submit</button>
          </div>

          <div className="d-flex flex-column mt-3 p-3">
            {allToDO?.length>0?    allToDO?.map((item,index)=>(
                 <div key={index} id={index} className="d-flex rounded align-items-center justify-content-between border shadow p-3 " >
                 <div>
                   <input onChange={(e)=>handleComplete(index,e.target.checked)} class="form-check-input border border-primary me-2" type="checkbox" value="" id="flexCheckDefault" />
                   <label className="form-check-label " for="flexCheckDefault">
                    {item}
                   </label>
                 </div>
                 <button onClick={()=>handleDelete(item)} className='btn btn-danger'>Delete</button>
               </div>
            ))
          :
          <div className="text-center text-danger">
             Add To-Do Item
          </div>
          }
           
          </div>
           <p>Total Complete items:{count}</p>
        </div>

      </div>
    </>
  )
}

export default App
