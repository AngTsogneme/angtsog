import React from 'react'
import {FaJava, FaPython, FaHtml5, FaCss3, FaReact} from 'react-icons/fa'
import {SiJavascript, SiCplusplus} from 'react-icons/si'
import {AiOutlineConsoleSql, AiOutlineGithub} from 'react-icons/ai'
function Skills(){
        return (
            <div id = "skills" className = "skills">
                
                <div className = "icons_list">

                    <h1>Experienced with: <br/> <p className = "icons"> <FaJava/>, <FaPython/>, <FaHtml5/>, <FaCss3/>, <SiJavascript/>, <FaReact/>, <SiCplusplus/>, <AiOutlineConsoleSql/>, <AiOutlineGithub/></p></h1>
                </div>
             
                <div className  = "others_list">
                    <h2>Here are some other skills:</h2>
                    <li>Experienced with Objected Orientated Programming, working in an Agile (Scrum) environment, implementing Design Patterns </li>
                    <br/>
                    <li>Efficient with command lines </li>
                    <br/>
                    <li>Experienced in problem solving, complexity analysis, and linear programming</li>
                    <br/>
                    <li>Diligent in everything I work on</li>
                    <br/>
                    <li>Strong desire to learn</li>
                    <br/>
                    <li>Friendly and positive, a great listener and a good team member. Loves to work in diverse team environments</li>
                    
                </div>

                
            </div>
        )
    
    
}


export default Skills