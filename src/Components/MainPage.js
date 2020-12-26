import React, {Component} from 'react'
import {AiFillMail, AiFillLinkedin} from 'react-icons/ai'

class MainPage extends Component{
    constructor(){
        super()
        this.state = {
            firstName: "",
            showName: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event){
        const{name, value} = event.target
        this.setState({[name]:value })
    }
    handleClick(event){
        /* this.setState(prevState => {
            return {
                showName: !prevState.showName
            }
        }) */
        event.preventDefault()
        this.setState({
            showName: true
            
        });
        
       
    }
    

    render(){
        return(
            
            <div id = "mainpage" className = "main_page" > 
  
                
                <h1 className = "h1_main_page" >
                    <img className = "profile_pic" src = {require("../images/profile.jpeg")} alt = "profile"/>
                    Hi! I'm <p className = "name">Ang Tsog</p>

                </h1>
                
                <div className = "first_name_form">
                    <h2 className = "h2_main_page"> Please enter your first name</h2>
                    <form >
                        
                        <input 
                            className = "input_first_name"
                            type = 'text'
                            placeholder = "First Name"
                            value = {this.state.firstName}
                            name = "firstName"
                            onChange = {this.handleChange}
                            />
                        
                        <button className = "enter_button" onClick = {this.handleClick}>Enter</button>
                    </form>
     
                </div>
                {this.state.showName &&this.state.firstName !== "" ? 
                    <h2 className = "first_name_message">Nice to meet you {this.state.firstName}! </h2> : null}

                <h2 className = "contact_info">Feel free to contact me via: </h2>

                    <div className = "links">
                        <a className = "linkedin_link"  
                            href="https://www.linkedin.com/in/ang-tsog" 
                            target = "_blank"
                            rel="noopener noreferrer"> 
                            <AiFillLinkedin/>

                        </a>

                        <a className = "email_link" 
                            href="mailto:angarag97@gmail.com">    
                            <AiFillMail/>        

                        </a>
                    </div>
                
                        
            </div>
            
        )

    }

}

export default MainPage