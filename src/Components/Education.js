import React from 'react'

function Education(){
        return (
  
            <div id = "education" className = "education">
            
                <img className = "uoft_logo" src ={require( "../images/logo.png")} alt ="logo"/>
                <img className = "uoft_logo2" src ={require( "../images/logo.png")} alt ="logo"/>

                <div className = "education_name">
                    <h1>University of Toronto from 2015 - 2020</h1>
                        
                    <h2>Honours Bachelor of Science</h2>
                    <h2>Computer Science, Mathematics and Philosophy</h2>
                </div>
                <br/>
                <br/>
                
                <div className = "education_description">
                    <li>   Developed a paint program using Java and Git </li>
                    <br/>
                    <li>   Created and designed a personal website, technology involved HTML, CSS and JavaScript</li>
                    <br/>
                    <li>   Implemented a puzzle game in Java/Java beans, cross platform desktop application</li>
                    <br/>
                    <li>   Taking 4 – 6 courses has forced me to be highly organized, become an efficient learner, and made me effective at managing my time</li>
                    <br/>
                    <li>   Through Computer Science and Math courses, I have improved my problem-solving skills and learned to think abstractly </li>
                    <br/>
                    <li>   Philosophy courses have taught me to think critically and articulate my thoughts </li>
                    <br/>
                    <li>   My experience has also taught me to be an effective communicator and an overall friendly and passionate person</li>
                </div>



            </div>
        )
    
    
}


export default Education