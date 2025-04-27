import axios from 'axios'
import React, { useState } from 'react'

const CreateTodo = () => {
    // we will create a function to create todo
    const [title ,setTitle]= useState('')
    const [toast,setToast]= useState(false)
    

    const createTodo= async ()=>{

      try {
        
        const create= await axios.post('http://localhost:4000/task',{
          title
      })
      console.log(create);
      setToast(true)
    setTimeout(() => {
      setToast(false)
    }, 3000);
      } catch (error) {
        console.error(error);
        
      }
        
    
    } 
    // delete todo
    const deleteTodo= async ()=>{
      const res= await axios.get('http://localhost:4000/task/:id/delete')
    }

    // find all task 
    const findall= async()=>{
      console.log("Making findall request..."); // Debug log

      const find= await axios.get('http://localhost:4000/task')
      console.log(find.data);
      
    }
  return (
    <div className='flex justify-center my-9'>
      <div className="card bg-base-100 w-96 shadow-sm">
        {/** creating input field checkbox */}
  
  <div className="card-body">
    <h2 className="card-title">Todo Task</h2>
    <div className="px-4 pt-4">
  < div className=" flex items-center justify-between m-auto gap-4">

<input type="checkbox" defaultChecked className="checkbox" />
<input type="text" placeholder="Type Task here" className="input input-bordered flex-1" value={title} onChange={(e)=>setTitle(e.target.value)} />
<button className="btn btn-secondry">Delete</button>

</div>
  </div>
    <div className="card-actions justify-between">
      <button className="btn btn-primary " >Add Task</button>
      <button className="btn btn-primary " onClick={findall} >findall Task</button>
      <button className="btn btn-primary" onClick={createTodo}>Save Task</button>
    </div>
  </div>
</div>
{toast && (<div className="">
<div class="toast toast-top toast-center">
  
  <div class="alert alert-success">
    <span>Task Created successfully.</span>
  </div>
</div>
</div>)}
    </div>
  )
}

export default CreateTodo
