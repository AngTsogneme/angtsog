import React from 'react'

import AgendaProject from './AgendaProject'
import JugPuzzle from "./JugPuzzle"
import Main from "./Hatchways/Main"
// import CurrencyExchange from './Conversions/CurrencyExchange'
import OtherConversions from './Conversions/OtherConversions'
import { Card, Button, Accordion} from 'react-bootstrap'

function Projects(){

    return(
        
        <div id = "projects" className = "projects" >
            <h1 className = "h1-projects">Projects</h1>
            <Accordion>
                <Card className = 'give-green'>
                    <Card.Img className = "give-green-picture" variant="top" src = {process.env.PUBLIC_URL + '/givegreen.jpeg'} />
                    <Card.Title className = 'give-green-title'> Give Green </Card.Title>
                    <Card.Text className = 'give-green-text'> 
                            This is an e-commerce website focused on selling environmentally friendly products.
                    </Card.Text>
                    <Accordion.Toggle className = "give-green-toggle" as={Button} variant = 'link' eventKey='0'>See Project</Accordion.Toggle>
                    <Accordion.Collapse eventKey = "0">
                        <Card.Body>
                            <a className = "give-green-link"  
                                href="https://givegreen.netlify.app/" 
                                target = "_blank"
                                rel="noopener noreferrer"> 
                                givegreen.netlify.app

                            </a>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                
            </Accordion>
            <Accordion>
                <div className = "row">
                    <div className = 'column' >
                        
                        <Card className = "agenda-card" >
                
                            <Card.Img className = "agenda-card-image" variant="left" src = {process.env.PUBLIC_URL + '/taskImage.png'} />
                            <Card.Title> Tasks </Card.Title>
                            <Card.Text>Enter and delete tasks.</Card.Text>
                            <Accordion.Toggle className = "agenda-toggle" as={Button} variant = 'link' eventKey='0'>See Project</Accordion.Toggle>
                            <Accordion.Collapse eventKey = "0">
                                <Card.Body>
                                    <AgendaProject/>
                                </Card.Body>
                            </Accordion.Collapse>
                    
                        </Card>
                    </div>
                    <div className = "column">
                        <Card className = "jugpuzzle-card">
                
                            <Card.Img className = "jugpuzzle-image" variant="top" src = {process.env.PUBLIC_URL + '/puzzleimage.jpg'} />
                            <Card.Title> Jug Puzzle </Card.Title>
                            <Card.Text> To complete this puzzle, Jug 1 and  Jug 2 must have amounts both equal to 4/8. 
                            Lowest amount of moves you can finish in is 7.
                            </Card.Text>
                            <Accordion.Toggle className = "jugpuzzle-toggle" as={Button} variant = 'link' eventKey='1'>See Project</Accordion.Toggle>
                            <Accordion.Collapse eventKey = "1">
                                <Card.Body>
                                    
                                    <JugPuzzle/>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </div>
                </div>
            </Accordion>

            <Accordion>
            <Card className = "student-profile-card">
               
               <Card.Img className = "student-profile-image" variant="top" src = {process.env.PUBLIC_URL + '/profile.png'} />
               <Card.Title className = 'student-title'> Student Profile </Card.Title>
               <Card.Text className = 'student-text'> 
                    This is a student profile application in which the information was gathered from an API.
               </Card.Text>
               <Accordion.Toggle className = "student-profile-toggle" as={Button} variant = 'link' eventKey='0'>See Project</Accordion.Toggle>
               <Accordion.Collapse eventKey = "0">
                   <Card.Body>
                       <Main/>
                   </Card.Body>
               </Accordion.Collapse>
            </Card>
            </Accordion>

            <Accordion>
            <Card className = "conversions-card">
               
               <Card.Img className = "conversions-image" variant="top" src = {process.env.PUBLIC_URL + '/conversion.png'} />
               <Card.Title className = 'conversions-title'> Conversions </Card.Title>
               <Card.Text className = 'conversions-text'> 
                    Convert currencies or convert other measurements.
               </Card.Text>
               <Accordion.Toggle className = "conversions-toggle" as={Button} variant = 'link' eventKey='0'>See Project</Accordion.Toggle>
               <Accordion.Collapse eventKey = "0">
                   <Card.Body>
                        
                        <OtherConversions/>
                   </Card.Body>
               </Accordion.Collapse>
            </Card>
            </Accordion>
            
           
            
        </div>
    )
}

export default Projects