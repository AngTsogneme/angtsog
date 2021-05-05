import React from 'react'

class Education extends React.Component{

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
  
            <div id = "education" className = "education">
            
                <img className = "uoft_logo" src ={process.env.PUBLIC_URL + '/logo.png'}  alt ="logo"/>
                <img className = "uoft_logo2" src ={process.env.PUBLIC_URL + '/logo.png'}  alt ="logo"/>

                <div className = "education_name">
                    <h1>University of Toronto from 2015 - 2020</h1>
                        
                    <h2>Honours Bachelor of Science</h2>
                    <h2>Computer Science, Mathematics and Philosophy</h2>
                </div>
                <button className = "desc_button"
                    onClick = {this.state.show ? this.hide : this.show}>
                        {this.state.show ? "−" : "+"}
                </button>
                
                {this.state.show ? 
                    <div className = "education_description">
                        <li>   Developed and implemented a puzzle game and a paint program using object orientated programming, design patterns, and git </li>
                        <br/>
                        <li>   Through computer science courses, I have learned efficient coding practices, interacting with data structures, building algorithms, and writing clean, readable code</li>
                        <br/>
                        <li>   Through Math courses, I have improved my problem-solving skills and learned to think abstractly </li>
                        <br/>
                        <li>   Philosophy courses have taught me to think critically and articulate my thoughts </li>
                        <br/>
                        <li>   Taking 4 – 6 courses has made me highly organized, a fast learner, and effective at managing my time</li>
                    </div> : ""}



            </div>
        )
    }
    
}


export default Education