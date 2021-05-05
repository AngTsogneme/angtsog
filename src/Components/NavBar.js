import React, {Component} from 'react'
import {Link} from "react-scroll"

import {Navbar, Nav, } from 'react-bootstrap'
import {BrowserRouter as Router} from "react-router-dom"

///import {GiJug} from 'react-icons/gi'

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
            
                
                    <div className = {this.state.show ? 'active' : 'hidden'} >
                        <Router>
                            <Navbar expand="md" fixed = 'top'>
                                <Navbar.Brand as = {Link} to = 'mainpage'><img className='my-logo' src = {process.env.PUBLIC_URL + '/mylogo.png'} alt = "Profile"/></Navbar.Brand>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className = 'ml-auto'>
                                        <Nav.Link as= {Link} to = 'projects'> Projects </Nav.Link>
                                        <Nav.Link as= {Link} to = 'skills' > Skills </Nav.Link>
                                        <Nav.Link as = {Link} to = 'education'> Education</Nav.Link>
                                        <Nav.Link as = {Link} to = 'workexperience'> Work Experience</Nav.Link>

                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                    
                        </Router>
                       
            
                        
                    </div>
                
                    
            </div>
        
        )
    }


}

export default NavBar