import React, {Component} from 'react'
import {GiJug, GiDrop} from 'react-icons/gi'

class JugGame extends Component{
    constructor(){
        super()
        
        this.state = {
            j1amount: 8,
            j2amount: 0,
            j3amount: 0,
            moves: 0,
            select:""
        }
        this.handleClick = this.handleClick.bind(this)
        this.Reset = this.Reset.bind(this)
    }

    handleClick(event){
        

        const limit2 = 5
        const limit3 = 3
        if(event.target.value === "1to2"){
            if(this.state.j1amount >= limit2){
                this.setState({
                    j1amount: this.state.j1amount - (limit2 - this.state.j2amount),
                    j2amount: limit2,
                    moves: this.state.moves+1
                })
            }else{
                if(this.state.j1amount + this.state.j2amount <= limit2){
                    this.setState({
                        j1amount: 0,
                        j2amount: this.state.j1amount + this.state.j2amount,
                        moves: this.state.moves+1
                    })
                }else{
                    this.setState({
                        j1amount: this.state.j1amount - (limit2 - this.state.j2amount),
                        j2amount: limit2,
                        
                    })
                }
            }
           
        }


        if(event.target.value === "1to3"){
            if(this.state.j1amount >= limit3){
                this.setState({
                    j1amount: this.state.j1amount - (limit3 - this.state.j3amount),
                    j3amount: limit3,
                    moves: this.state.moves+1
                })
            }else{
                if(this.state.j1amount + this.state.j3amount <= limit3){
                    this.setState({
                        j1amount: 0,
                        j3amount: this.state.j1amount + this.state.j3amount,
                        moves: this.state.moves+1
                    })
                }else{
                    this.setState({
                        j1amount: this.state.j1amount - (limit3 - this.state.j3amount),
                        j3amount: limit3,
                        
                    })
                }
            }
           
        }
        
        if(event.target.value === "2to1"){
            this.setState({
                j2amount: 0,
                j1amount: this.state.j1amount + this.state.j2amount,
                moves: this.state.moves+1
            })
           
        }


        if(event.target.value === "2to3"){
            if(this.state.j2amount >= limit3){
                this.setState({
                    j2amount: this.state.j2amount - (limit3 - this.state.j3amount),
                    j3amount: limit3,
                    moves: this.state.moves+1
                })
            
            }else{
                if(this.state.j2amount + this.state.j3amount <= limit3){

                    this.setState({
                        j2amount: 0,
                        j3amount: this.state.j2amount + this.state.j3amount,
                        moves: this.state.moves+1
                    })
                }else{
                    this.setState({
                        j2amount: this.state.j2amount - (limit3 - this.state.j3amount),
                        j3amount: limit3,
                        
                    })
                }
            }
        }


        if(event.target.value === "3to1"){
            this.setState({
                j3amount: 0,
                j1amount: this.state.j1amount + this.state.j3amount,
                moves: this.state.moves+1
            })
        
        }


        if(event.target.value === "3to2"){
            if(this.state.j3amount >= limit2){
                this.setState({
                    j3amount: this.state.j3amount - (limit2 - this.state.j2amount),
                    j2amount: limit2,
                    moves: this.state.moves+1
                })
            }
            else{
                if(this.state.j3amount + this.state.j2amount <= limit2){

                    this.setState({
                        j3amount: 0,
                        j2amount: this.state.j2amount + this.state.j3amount,
                        moves: this.state.moves+1
                    })
                }else{
                    this.setState({
                        j3amount: this.state.j3amount - (limit2 - this.state.j2amount),
                        j2amount: limit2,
                        
                    })
                }
            }

        }
    const{name, value} = event.target
    this.setState({
        [name]:value
    })
    }

    Reset(event){
        event.preventDefault()
        this.setState({
            j1amount: 8,
            j2amount: 0,
            j3amount: 0,
            moves: 0,
            select: ""
        })
        
    }
    

     render(){
         /* let ids = [{id:1}, {id:2}, {id: 3}] */
         return(
            <div id = "jugpuzzle" className = "jug_puzzle">
        
               {/*  {ids.map((item)=>{return <button onClick = {()=>this.handleClick(item.id)}>{item.id}</button>})}
                 */}
                <h1 className = "jug_instructions"> To complete this puzzle, Jug 1 and  Jug 2 must have amounts both equal to 4/8. 
                    <br/> Lowest amount of moves you can finish in is 7.</h1>
                <div className = "jug_status">
                    <h1><GiJug/> 1: <GiDrop className="drop"/>{this.state.j1amount}<GiDrop className="drop"/> / 8</h1> 
                    <h1><GiJug/> 2: <GiDrop className="drop"/>{this.state.j2amount}<GiDrop className="drop"/> / 5 </h1>
                    <h1><GiJug/> 3: <GiDrop className="drop"/>{this.state.j3amount}<GiDrop className="drop"/> / 3 </h1>
                </div>
                <form className = "form_jug">
                    <select className = "select_move"
                            onChange = {this.handleClick}
                            name = "select"
                            value = {this.state.select}>
                            <option value = "Select">Select Move</option>
                            <option value = "1to2">1 to 2</option>
                            <option value = "1to3">1 to 3</option>
                            <option value = "2to1">2 to 1</option>
                            <option value = "2to3">2 to 3</option>
                            <option value = "3to1">3 to 1</option>
                            <option value = "3to2">3 to 2</option>
                            
                    </select>
                    <br/>
                    <br/>
                    <button className = "reset_button" onClick = {this.Reset}>Reset</button>
                    {this.state.j1amount===4 & this.state.j2amount === 4 ? <h2>Congratulations, you won in {this.state.moves} moves</h2> : null}

                </form>
            </div>  

         )
     }
    }

export default JugGame