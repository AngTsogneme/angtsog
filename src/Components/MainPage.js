import React, {Component} from 'react'
import {AiFillMail, AiFillLinkedin} from 'react-icons/ai'
import { Card} from 'react-bootstrap'
import AOS from 'aos'


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

    componentDidMount() {
        AOS.init({
        duration : 2000
        });
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

                <div>
                    <Card className = 'profile-card' >
                                
                        <Card.Img className = "profile-pic" src = {process.env.PUBLIC_URL + '/Profile.jpeg'} alt = "Profile"/>
                        <Card.Title className = "profile-card-title"> Ang Tsog </Card.Title>
                        <Card.Text className = "profile-card-text">Front End Developer</Card.Text>
                        
                            <Card.Body className = "profile-card-body">
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
                            </Card.Body>
                            
                  
                    </Card>
                  

                    <p className = 'intro'>Hello! I'm a <span className='front-end'>Front End Developer</span> with experience <span className = 'dev-alg'>developing algorithms</span>, 
                    <span className='data-str'> interacting with data structures</span> and working in a <span className='scrum'>Scrum Environment</span>. 
                    <br/>
                    <br/>
                    I'm also experienced with conducting user research, building empathy maps, personas, user stories, user journeys, 
                    <span className = 'ux-exp'> making wireframes and prototyping with Figma.</span>
                    <br/>
                    <br/>
                    I'm a <span className='prob-sol'>problem solver</span> and an overall <span className='passionate'>passionate</span> and <span className='hard-working'>hard working</span> individual. 
                    </p>
                </div>
            </div>
            
        )

    }

}

export default MainPage