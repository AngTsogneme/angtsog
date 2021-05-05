import React, {useState} from 'react'

function Expand(props){
    const [expand, setExpand] = useState([])
    const [display, setDisplay] = useState("+")
    const [grades_index, setIndex] = useState()
    const handleClick = () =>{
        setExpand(props.grades)
        setDisplay(display === "+" ? "−" : "+")
        const d = props.grades.map(c=>props.grades.indexOf(c, props.grades.indexOf(c)+1))
        const d2 = d.filter(c=>c!==-1).pop()
        const i = props.grades.map(i=>props.grades.indexOf(i))
        i[d2] = d2
        setIndex(i)
    }


    return(
        <div>
            <button className = "expand_button" onClick = {handleClick}>{display}</button>
            <div className = "grades">
                <br/>
                <br/>
                {display === "−" ? grades_index.map(i => <p key ={i}> Test {i+1}: {expand[i]}%</p>) : ''}
            </div>
        </div>
    )



}
export default Expand