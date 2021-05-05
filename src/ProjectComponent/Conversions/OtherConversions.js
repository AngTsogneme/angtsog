import React, { useState } from 'react'
import {Button, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function OtherConversions(){
    const[conversion, setConversion] = useState('')
    const[amount, setAmount] = useState('')
    const [result, setResult] = useState('')
    const [placeholder, setPlaceholder] = useState('Mile')
    const [placeholder2, setPlaceholder2] = useState('Foot')
    const [placeholder3, setPlaceholder3] = useState('Inches')
    const [placeholder4, setPlaceholder4] = useState('Mile')
    const [placeholder5, setPlaceholder5] = useState('Gallon')

    const getAmount = (event) =>{
        event.preventDefault()
        
        if(conversion === 'MLFT') {
            if(placeholder === 'Mile'){
                setResult(amount*5280)
            }else{
                setResult(amount/5280)
            }
        }
        else if(conversion === 'FtIn'){
            if(placeholder2 === 'Foot'){
                setResult(amount*12)
            }else{
                setResult(amount/12)
            }
        }
        else if(conversion === 'InCm'){
            if(placeholder3 === 'Inches'){
                setResult(amount*2.54)
            }else{
                setResult(amount/2.54)
            }
        }
        else if(conversion === 'MKm'){
            if(placeholder4=== 'Mile'){
                setResult(amount*1.609)
            }else{
                setResult(amount/1.609)
            }
        }
        else if(conversion === 'GL'){
            if(placeholder5=== 'Gallon'){
                setResult(amount*3.785)
            }else{
                setResult(amount/3.785)
            }
        }

        // placeholder === 'Mile' && conversion === 'MLFT' ? setResult(amount*5280) : setResult(amount/5280)
        // placeholder2 === 'Foot' && conversion === 'FtIn' ? setResult(amount*12) : setResult(amount/12)
    }
    const Reverse = (event) => {
        event.preventDefault()
        placeholder === 'Mile'  ? setPlaceholder('Foot') : setPlaceholder('Mile')
        placeholder2 === 'Foot' ? setPlaceholder2('Inches') : setPlaceholder2('Foot')
        placeholder3 === 'Inches' ? setPlaceholder3('Centimeter') : setPlaceholder3('Inches')
        placeholder4 === 'Mile' ? setPlaceholder4('Kilometer') : setPlaceholder4('Mile')
        placeholder5 === 'Gallon' ? setPlaceholder5('Liter') : setPlaceholder5('Gallon')

        setResult('')
        setAmount('')
    }
    

    return(
        <div className = 'other_conversions'>
            <h2 className = 'h2oc'>Other Conversions</h2>
            <div className = 'form-other-wrapper'>
                <Form className = "custom-form-other">
                    <Form.Control className = 'custom-select-other'as = "select" multiple onChange = {e=>setConversion(e.target.value) + setAmount('') +setResult('')}>
                        <option value = "MLFT">Mile and Foot</option>
                        <option value = "FtIn">Foot and Inches</option>
                        <option value = "InCm">Inch and Centimeter</option>
                        <option value = "MKm">Mile and Kilometer</option>
                        <option value = "GL">Gallon and Liter</option>

                    </Form.Control>
                </Form>
                
                {conversion === 'MLFT' ? 
                    
                    <Form className='mf-wrapper'>
                            
                            <Form.Control type = 'number'value = {amount} className= 'mf-input'
                                        placeholder = {placeholder === 'Mile' ? 'Mile' : 'Foot'} 
                                        onChange = {e=>setAmount(e.target.value)}>
                            </Form.Control>
                            <Button className = 'mf-convert'onClick = {getAmount}>Convert</Button>
                            <Button className = 'mf-reverse'onClick = {Reverse}>Reverse</Button>
                            <Form.Control className = 'mf-readonly' type = "text" placeholder={result} readOnly/>
                    </Form>
                :''}
                {conversion === 'FtIn' ?
                    
                    <Form className = 'mf-wrapper'>
                    
                        <Form.Control type = 'number' value = {amount} className = 'mf-input'
                                    placeholder = {placeholder2 === 'Foot' ? 'Foot' : "Inches"}
                                    onChange = {e=>setAmount(e.target.value)}>
                        </Form.Control>
                        <Button className = 'mf-convert' onClick = {getAmount}>Convert</Button>
                        <Button className = 'mf-reverse'onClick = {Reverse}>Reverse</Button>
                        <Form.Control className = 'mf-readonly' type = "text" placeholder={result} readOnly/>
                    </Form>
                : ''}
                {conversion === 'InCm' ? 
                    <Form className = 'mf-wrapper'>
                        
                        <Form.Control type = 'number' value = {amount} className = 'mf-input'
                                    placeholder = {placeholder3 === 'Inches' ? 'Inches' : "Centimeter"}
                                    onChange = {e=>setAmount(e.target.value)}>
                        </Form.Control>
                        <Button className = 'mf-convert' onClick = {getAmount}>Convert</Button>
                        <Button className = 'mf-reverse'onClick = {Reverse}>Reverse</Button>
                        <Form.Control className = 'mf-readonly' type = "text" placeholder={result} readOnly/>
                    </Form>
                    
                : ''}
                {conversion === 'MKm' ? 
                    <Form className = 'mf-wrapper'>
                        
                        <Form.Control type = 'number' value = {amount} className = 'mf-input'
                                    placeholder = {placeholder4 === 'Mile' ? 'Mile' : "Kilometer"}
                                    onChange = {e=>setAmount(e.target.value)}>
                        </Form.Control>
                        <Button className = 'mf-convert' onClick = {getAmount}>Convert</Button>
                        <Button className = 'mf-reverse'onClick = {Reverse}>Reverse</Button>
                        <Form.Control className = 'mf-readonly' type = "text" placeholder={result} readOnly/>
                    </Form>
                    
                : ''}
                {conversion === 'GL' ? 
                    <Form className = 'mf-wrapper'>
                        
                        <Form.Control type = 'number' value = {amount} className = 'mf-input'
                                    placeholder = {placeholder5 === 'Gallon' ? 'Gallon' : "Liter"}
                                    onChange = {e=>setAmount(e.target.value)}>
                        </Form.Control>
                        <Button className = 'mf-convert' onClick = {getAmount}>Convert</Button>
                        <Button className = 'mf-reverse'onClick = {Reverse}>Reverse</Button>
                        <Form.Control className = 'mf-readonly' type = "text" placeholder={result} readOnly/>
                    </Form>
                    
                : ''}
            </div>
            
    

        </div>
    )


}




export default OtherConversions