import React, { useEffect, useState } from 'react'
import Expand from "./Expand"
import Tag from "./Tag"

function Main(){
    const [students, setStudents] = useState([])
    const [search, setSearch] = useState('')
    const [searchtag, setSearchTag] = useState('')
    // const [array, setArray] = useState()
    useEffect(() => {
        fetch('https://api.hatchways.io/assessment/students')
            .then(response => response.json())
            .then((response )=>{
                // response['tags'] = []
                // setArray(response)
               
                response.students.map(c=>response.students[response.students.indexOf(c)]['tags']=[''])
                setStudents(response.students)
                
            })

        
    },[])

    // const handleChange = (e) =>{
    //     setTag(e.target.value)
    // }
    const handleTags = (taglist, index) =>{
        // array.tags = taglist
        // console.log(array)
      
        students[index].tags = taglist
   
    }

    return(
        <div className = "display_box">
            <input className = "name_search" type = "text" placeholder = "Search by name" onChange = {e =>setSearch(e.target.value)}/>
            <input className = "tag_search" type = 'text' placeholder = 'Search by tag' onChange = {e =>setSearchTag(e.target.value)}/>

{/* 
                {students.filter(student => student.firstName.toLowerCase().includes(search) + student.lastName.toLowerCase().includes(search) 
                || student.firstName.toLowerCase().concat(" "+student.lastName.toLowerCase()).includes(search) 
                || student.tags.includes(searchtag)) */}

                {/* {console.log(students.filter(student => student.firstName.toLowerCase().includes(search) + student.lastName.toLowerCase().includes(search)|| student.firstName.toLowerCase().concat(" "+student.lastName.toLowerCase()).includes(search)))} */}

                {/* {console.log(students.filter(student => student.tags.join().includes(searchtag)))} */}
                {students.filter(student => student.tags.join().includes(searchtag)
                && (student.firstName.toLowerCase().includes(search)+ student.lastName.toLowerCase().includes(search)
                || student.firstName.toLowerCase().concat(" "+student.lastName.toLowerCase()).includes(search))
                ).map((current)=>
                    <div key = {current.id} className = "display_content">
                        <img className = "profile_pic_student"src = {current.pic} alt = "profile_pic"/> 
                        <h1 className = "name_student">{current.firstName} {current.lastName}</h1>
                        <p className = 'email'>Email: {current.email}</p>
                        <p className = 'company'>Company: {current.company}</p>
                        <p className = 'skill'>Skill: {current.skill}</p>
                        <p className = 'average'>Average: {current.grades.reduce((prev,current)=>parseInt(prev,10)+parseInt(current,10))/current.grades.length}%</p>
                        <Expand grades = {current.grades} index = {students.indexOf(current)}/>

                        <Tag handleTags = {handleTags} index = {students.indexOf(current)} currenttag = {current.tags}/>
                        {/* <p>{tag}</p>
                        <input type = 'text' onChange = {handleChange} placeholder = "Add a tag"/> */}
                    </div>)}

        </div>
    )



}
export default Main