import React, {useState} from 'react'
import {RiCalendarTodoFill} from 'react-icons/ri'


function AgendaProject(){
    
    const[task, setTask] = useState('')
    const[tasklist, setTaskList] = useState([])
    const[message, setMessage] = useState('')
    const[id, setId] = useState(1)

    
    const handleClear = (event) =>{
        setTask('')
        setTaskList([])
        setId(1)
        setMessage('')
        event.preventDefault()
    }
    const handleOverflow = () =>{
        setTaskList([])
        setMessage('')
    }

    const handleChange = (event) =>{
        event.preventDefault()
        
        if(task !== ""){
            setId(id+1)
            setTaskList(tasklist.concat({id:id,value:task}))
            setTask('')
        }
        
        else{
            setMessage("Please enter a task")
        }

    }
    const handleDelete = (event) =>{
        
        setTaskList(tasklist.filter(t=>t.id+t.value !== event.target.value))
        
     
    }

    return(
        
        <div className = "agenda_project">
            
            <form className = "agenda-form" >
                <h1 className="h1_agenda">Tasks <RiCalendarTodoFill/></h1>
            
                    <input className = "task_input"
                        type = "text"
                        value = {task}
                        placeholder = "Enter Task" 
                        onChange = {e=>setTask(e.target.value)}
                        />
                    <div className = 'button-wrapper'>
                        <button className = "button_add" onClick = {handleChange}> Add </button>
                        <button className = "button_clear" onClick = {handleClear}> Clear </button>
                    </div>
            </form>
                          
            <div className = "display_todo">
                                
                <p>{message}</p>
                    {tasklist.length < 14 ? tasklist.map((item)=> 
                        <ul key = {item.id}>
                                   
                            {item.value}
                            <button className= "delete-task" onClick = {handleDelete} value = {item.id+item.value}>✖</button>
                            
                        </ul>
                        )  : handleOverflow()}
            </div>
            
        </div>
       
    )
}
export default AgendaProject