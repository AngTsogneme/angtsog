import React, {useEffect, useState} from 'react'
import {Button, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function CurrencyExchange(){
    const[response, setResponse] = useState([])
    const[rates,setRates] = useState([])
    const[fromCurrency,setFromCurrency] = useState('')
    const[toCurrency,setToCurrency] = useState('')
    const[amount, setAmount] = useState('')
    const[converted, setConverted] = useState('')
    const[errorM, setErrorM] = useState('')
    useEffect(()=>{

        if(fromCurrency!==""){

            fetch('https://api.currencylayer.com/live'.concat('?base='+fromCurrency))
                .then(r=>r.json())
                .then((r)=>{
                    console.log(r)
                    setResponse(r)
                    setRates(r.rates)
                }).catch(function() {
                    console.log("error");
                })
            }
        else{
            fetch('https://api.currencylayer.com/live')
                .then(r=>r.json())
                .then((r)=>{
                    console.log(r)

                    setResponse(r)
                    setRates(r.rates)
                    setFromCurrency(r.base)
                    setToCurrency('CAD')

                }).catch(function() {
                    console.log("error");
                });
        }

    },[fromCurrency])

    const handleClick = (event) =>{
        if(amount !== ''){
            setErrorM('')
            setConverted(parseFloat(amount*rates[toCurrency]).toFixed(2))
            
        }else{
            setErrorM('Enter amount to convert')
        }
            
        event.preventDefault()

            
        
    }
    

    return(
        
        <div className = 'currency_exchange'>
            <h2 className = 'h2ce'>Currency Exchange</h2>
            <Form className = 'custom-form'>
                <Form.Label>FROM:
                <Form.Control as = "select" className = 'custom-select-from' value = {fromCurrency}
                        onChange = {e=>setFromCurrency(e.target.value)}>
                    <option value = {fromCurrency}>{fromCurrency}</option>
                    {Object.keys(rates).map(currency_name=><option value = {currency_name} key={currency_name}>{currency_name}</option>)}
                </Form.Control>
                </Form.Label>
                <Form.Label>TO:
                    <Form.Control as = "select" className = 'custom-select-to' value = {toCurrency}
                            onChange = {e=>setToCurrency(e.target.value)}>
                        <option value = {toCurrency}>{toCurrency}</option>
                        {Object.keys(rates).map(currency_name=><option value = {currency_name} key={currency_name}>{currency_name}</option>)}
                    </Form.Control>
                </Form.Label>
                <Form.Control className = 'custom-enteramount'type = 'number' placeholder = 'Enter amount' value={amount} onChange = {e=>setAmount(e.target.value)}/>
                
                <Button className = 'custom-convert-button' onClick={handleClick}>Convert</Button>
                <Form.Control className = 'custom-display' type = 'text' placeholder = {errorM === '' ? converted + " as of " + response.date : errorM} readOnly/>
            </Form>
            
            
            
        </div>
       
       
    )
}

export default CurrencyExchange