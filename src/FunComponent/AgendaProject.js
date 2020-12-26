import React, {Component} from 'react'
import {RiCalendarTodoFill} from 'react-icons/ri'

class AgendaProject extends Component{
    constructor(){
        super()
        this.state = {
            time: "",
            task: "",
            list: [],
            id: 1,
            isChecked: false
            
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleOverflow =  this.handleOverflow.bind(this)
    }

    handleChange(event){
        const{name, value, type, checked} = event.target

        type === "checkbox" && this.state.list.task === name?
        this.setState({
            [name]: checked     
        }):

        this.setState({
            [name] : value

        })

    }

    handleSubmit(event){
        
        
        this.setState({
            id: this.state.id + 1,
            list: this.state.list.concat([{id: this.state.id, 
                            value: this.state.time + ": " + this.state.task, 
                            completed: this.state.isChecked}]),
           
        })
        

        event.preventDefault()
       /*  how to catch no entry */
    }
    
    handleClear(event){
        
        this.setState({
            time: "",
            task: "",
            list: [],
            id: 1,
        })
        event.preventDefault()
    }
    handleOverflow(){
        this.setState({
            list:[]
        })
    }

    render(){
        
        return(
            
            <div id = "agendaproject" className = "agenda_project">
            
                <form className = "agenda-form" onSubmit = {this.handleSubmit}>
                    <h1 className="h1_agenda">Agenda <RiCalendarTodoFill/></h1>
                    
                    <select className = "select_time"
                        value = {this.state.time}
                        onChange = {this.handleChange}
                        name = "time">
                        
                        <option value = "Select">Select Time</option>
                        <option value = "12am">12am</option>
                        <option value = "1am">1am</option>
                        <option value = "2am">2am</option>
                        <option value = "3am">3am</option>
                        <option value = "4am">4am</option>
                        <option value = "5am">5am</option>
                        <option value = "6am">6am</option>
                        <option value = "7am">7am</option>
                        <option value = "8am">8am</option>
                        <option value = "9am">9am</option>
                        <option value = "10am">10am</option>
                        <option value = "11am">11pm</option>
                        <option value = "12pm">12pm</option>
                        <option value = "1pm">1pm</option>
                        <option value = "2pm">2pm</option>
                        <option value = "3pm">3pm</option>
                        <option value = "4pm">4pm</option>
                        <option value = "5pm">5pm</option>
                        <option value = "6pm">6pm</option>
                        <option value = "7pm">7pm</option>
                        <option value = "8pm">8pm</option>
                        <option value = "9pm">9pm</option>
                        <option value = "10pm">10pm</option>
                        <option value = "11pm">11pm</option>

                    </select>
                
           
                    <input className = "task_input"
                        type = "text"
                        value = {this.state.task}
                        name = "task"
                        placeholder = "Enter Task" 
                        onChange = {this.handleChange}
                    />
                    <br/>
                    <button className = "button_add" type = "submit"> Add </button>
                    <br/>
                    <button className = "button_clear" onClick = {this.handleClear}> Clear </button>
                </form>
                
                <div className = "display_todo">
                    

                     
                    {this.state.list.length < 14 ? this.state.list.map((item)=> 
                    
                        <label key = {item.id}>
                        <input type = "Checkbox"
                            
                            name = "isChecked"
                            checked = {this.state.list.completed}
                            onChange = {this.handleChange}
                            
                            />
                            {item.value}
                            <br/>
                        </label>
                        
                        
                    )  : this.handleOverflow()}

                </div>
          
            </div>
        )
            
        
    }
        
}
export default AgendaProject