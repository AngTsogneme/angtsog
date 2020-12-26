import React, {Component} from 'react'

import MainPage from "./Components/MainPage"
import Education from "./Components/Education"
import Skills from "./Components/Skills"
import NavBar from "./Components/NavBar"
import WorkExperience from "./Components/WorkExperience"
import AgendaProject from "./FunComponent/AgendaProject"
import JugPuzzle from "./FunComponent/JugPuzzle"
import "./style.css"
class App extends Component{

    
        render(){
            return(
                <div >
                    
                    {/* <Media query = "(min-width:600px)"> */}
                    
                       {/*  {matches => {
                            return matches ?  */}
                            <div>
                                <NavBar/>
                                <MainPage/>
                                <Skills/>
                                <Education/>  
                                <WorkExperience/> 
                                <AgendaProject/>
                                <JugPuzzle/>
                            </div> {/* : <h1>Please increase screen size</h1> */}
                        {/* }} */}

                    {/* </Media> */}
                    
                        
                    

                </div>

                
               
                )
            }
        }


export default App