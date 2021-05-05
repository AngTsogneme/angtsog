import React, {Component} from 'react'

import MainPage from "./Components/MainPage"
import Education from "./Components/Education"
import Skills from "./Components/Skills"
import NavBar from "./Components/NavBar"
import WorkExperience from "./Components/WorkExperience"
import Projects from "./ProjectComponent/Projects"
import "./style.css"
import AOS from 'aos'
import "aos/dist/aos.css";

class App extends Component{

        componentDidMount() {
            AOS.init({
            duration : 1000
            });
            AOS.refresh()
        }
        render(){
            return(
                <div>
                    
                    
                    <div>
                        
                        <NavBar/>
                        <div data-aos='fade-right'><MainPage/></div>
                        <div data-aos='fade-left'><Projects /></div>
                        <div data-aos='fade-right'><Skills/></div>
                        <div data-aos='fade-left'><Education/> </div> 
                        <div data-aos='fade-right'><WorkExperience/></div> 
                        
                        
                    </div> 
                </div>

                
               
                )
            }
        }


export default App