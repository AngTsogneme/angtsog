import React, {useState} from 'react'
import {RiCalendarTodoFill} from 'react-icons/ri'

// class AgendaProject extends Component{
//     constructor(){
//         super()
//         this.state = {
          
//             task: "",
//             list: [],
//             id: 1,
//             isChecked: false,
//             message: ""
            
//         }
        
//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//         this.handleClear = this.handleClear.bind(this)
//         this.handleOverflow =  this.handleOverflow.bind(this)
//     }

//     handleChange(event){
        
//         const{name, value, type} = event.target
        
//         type === "checkbox" ?
//         this.setState({
//             [name]: true     
//         }):
       
//         this.setState({
//             [name] : value,
           
//         })
//     }

//     handleSubmit(event){
        
//         if(this.state.task !== "" && this.state.time !== ""){
//             this.setState({
//                 id: this.state.id + 1,
//                 task: "",
//                 message:"",
//                 list: this.state.list.concat([{id: this.state.id, 
//                                 value:  this.state.task, 
//                                 completed: this.state.isChecked}]),
                
            
//             })
            
//         }else{
//             this.setState({
//                 message: "Please enter a task."
//             })
//         }
//         event.preventDefault()
//        /*  how to catch no entry */
//     }
    
//     handleClear(event){
        
//         this.setState({
            
//             task: "",
//             list: [],
//             id: 1,
//         })
//         event.preventDefault()
//     }
//     handleOverflow(){
//         this.setState({
//             list:[]
//         })
//     }
    

//     render(){
        
//         return(
            
//             <div id = "agendaproject" className = "agenda_project">
            
//                 <form className = "agenda-form" onSubmit = {this.handleSubmit}>
//                     <h1 className="h1_agenda">Agenda <RiCalendarTodoFill/></h1>

//                     <input className = "task_input"
//                         type = "text"
//                         value = {this.state.task}
//                         name = "task"
//                         placeholder = "Enter Task" 
//                         onChange = {this.handleChange}
//                     />
//                     <div className = 'button-wrapper'>
//                         <button className = "button_add" type = "submit"> Add </button>
//                         <button className = "button_clear" onClick = {this.handleClear}> Clear </button>
//                     </div>
//                 </form>
              
//                 <div className = "display_todo">
                    
//                     <p>{this.state.message}</p>
                     
//                     {this.state.list.length < 14 ? this.state.list.map((item)=> 
//                         <ul key = {item.id}>
                       
//                         <input type = "Checkbox"
                            
//                             name = "isChecked"
//                             value = {this.state.isChecked}
//                             onChange = {this.handleChange}
                            
//                             />
                           
//                             {item.value}
                            
               
//                         </ul>
                        
//                     )  : this.handleOverflow()}
//                     {console.log(this.state.list)}
//                 </div>
//                 <JugPuzzle/>
//                 <Main/>
//                 <CurrencyExchange/>
//                 <OtherConversions/>
//             </div>
//         )
            
        
//     }
        
// }
// export default AgendaProject

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