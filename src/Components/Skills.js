import React from 'react'
import {FaJava, FaPython, FaHtml5, FaCss3, FaReact} from 'react-icons/fa'
import {SiJavascript, SiCplusplus, SiAdobeillustrator} from 'react-icons/si'
import {AiOutlineConsoleSql, AiOutlineGithub} from 'react-icons/ai'
import {FiFigma} from 'react-icons/fi'
import {DiEclipse} from 'react-icons/di'
function Skills(){
        return (
            <div id = "skills" className = "skills">
                <h1>Effecient with:</h1> 
                <div className = "icons_list">

                    
                    <div className = "icons-react"> 
                        <FaReact className ='react-icon'/>
                            <div className = 'react-overlay react-overlay--blur'>
                                React
                            </div>
                    </div>
                    <div className = "icons-js"> 
                        <SiJavascript className ='js-icon'/>
                            <div className = 'js-overlay js-overlay--blur'>
                                JavaScript
                            </div>
                    </div>
                    <div className = "icons-css"> 
                        <FaCss3 className ='css-icon'/>
                            <div className = 'css-overlay css-overlay--blur'>
                                CSS3
                            </div>
                    </div>
                    <div className = "icons-html"> 
                        <FaHtml5 className ='html-icon'/>
                            <div className = 'html-overlay html-overlay--blur'>
                                HTML5
                            </div>
                    </div>
                    <div className = "icons-java"> 
                        <FaJava className ='java-icon'/>
                            <div className = 'java-overlay java-overlay--blur'>
                                Java
                            </div>
                    </div>
                    <div className = "icons-python"> 
                        <FaPython className ='python-icon'/>
                            <div className = 'python-overlay python-overlay--blur'>
                                Python
                            </div>
                    </div>
                    <div className = "icons-c"> 
                        <SiCplusplus className ='c-icon'/>
                            <div className = 'c-overlay c-overlay--blur'>
                                C++
                            </div>
                    </div>
                    <div className = "icons-sql"> 
                        <AiOutlineConsoleSql className ='sql-icon'/>
                            <div className = 'sql-overlay sql-overlay--blur'>
                                SQL
                            </div>
                    </div>
                    <div className = "icons-git"> 
                        <AiOutlineGithub className ='git-icon'/>
                            <div className = 'git-overlay git-overlay--blur'>
                                GIT
                            </div>
                    </div>
                    <div className = "icons-figma"> 
                        <FiFigma className ='figma-icon'/>
                            <div className = 'figma-overlay figma-overlay--blur'>
                                Figma
                            </div>
                    </div>
                    <div className = "icons-eclipse"> 
                        <DiEclipse className ='eclipse-icon'/>
                            <div className = 'eclipse-overlay eclipse-overlay--blur'>
                                Eclipse
                            </div>
                    </div>
                    <div className = "icons-ai"> 
                        <SiAdobeillustrator className ='ai-icon'/>
                            <div className = 'ai-overlay ai-overlay--blur'>
                                Adobe Illustrator
                            </div>
                    </div>
                    {/*   <br/>
                    <FaJava/> <FaPython/> <SiCplusplus/> <AiOutlineConsoleSql/><br/>
                    <AiOutlineGithub/> <FiFigma/> <DiEclipse/> <SiAdobeillustrator/><br/>  */}
                    
                </div>
                

                
            </div>
        )
    
    
}


export default Skills