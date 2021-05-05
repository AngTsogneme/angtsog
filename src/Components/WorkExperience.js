import React from 'react'
import {BiSwim} from 'react-icons/bi'


class WorkExperience extends React.Component{

    constructor(){
        super()
        this.state = {
            showDescription: false,
        }
        this.show = this.show.bind(this)
        this.hide = this.hide.bind(this)
    }



    show(event){
        event.preventDefault()
        this.setState({
            show: true
        })
    }

    hide(event){
        event.preventDefault()
        this.setState({
            show: false
        })
    }


    render(){
        return (
            <div id = "workexperience" className = "work_experience">
  
                <BiSwim className = "swim_icon1"/>
                <BiSwim className = "swim_icon2"/>

                <div className = "work_name">
                    <br/>
                    <h1> Lifeguard and Swim Instructor from 2015 - 2017</h1>
                    <h2> At River Grove Community Centre </h2>
                    
                </div>
              
                <button className = "desc_button_we"
                    onClick = {this.state.show ? this.hide : this.show}>
                        {this.state.show ? "−" : "+"}
                </button>
                
                {this.state.show ?
                    <div className = "work_description">
                        <li> Experienced with interacting and serving clients </li>
                        <br/>
                        <li> Taught children and adults how to swim </li>
                        <br/>
                        <li> Worked in a group to maintain the safety of the pool</li>
                        <br/>
                        <li> Handled issues and concerns of parents and facility users</li>
                        <br/>
                        <li> Improved my interpersonal skills</li>
                        
                    </div>: ""}

                
            </div>
        )
    }
}


export default WorkExperience