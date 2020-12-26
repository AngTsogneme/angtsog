import React, {Component} from 'react'
import {Link} from "react-scroll"

class NavBar extends Component {
    constructor(){
        super()
        this.state = {
            show: true,
            scrollPos: 0 
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll )
    }
    handleScroll=()=>{
        this.setState({
            scrollPos: document.body.getBoundingClientRect().top,
            show: document.body.getBoundingClientRect().top > this.state.scrollPos
        })
    }

    render(){
        return(
            
            <div>
            
                
                    <nav className = {this.state.show ? 'active' : 'hidden'} >
                        <ul >
                            <li >
                                <Link 
                                    activeClass = "activeL"
                                    to = "mainpage"
                                    spy = {true}
                                    smooth = {true}
                                    offset = {-80}
                                    duration={800}>
                                    Main Page
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    activeClass = "activeL"
                                    to = "skills"
                                    spy = {true}
                                    smooth = {true}
                                    offset = {-80}
                                    duration={800}>
                                    Skills
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    activeClass = "activeL"
                                    to = "education"
                                    spy = {true}
                                    smooth = {true}
                                    offset = {-80}
                                    duration={800}>
                                    Education
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    activeClass = "activeL"
                                    to = "workexperience"
                                    spy = {true}
                                    smooth = {true}
                                    offset = {-80}
                                    duration={800}>
                                    Work Experience
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    activeClass = "activeL"
                                    to = "agendaproject"
                                    spy = {true}
                                    smooth = {true}
                                    offset = {-80}
                                    duration={800}>
                                    Agenda Project
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    activeClass = "activeL"
                                    to = "jugpuzzle"
                                    spy = {true}
                                    smooth = {true}
                                    offset = {-80}
                                    duration={800}>
                                    Jug Puzzle
                                </Link>
                            </li>
                        </ul>
                        
                    </nav>
                
                    
            </div>
        
        )
    }


}

export default NavBar