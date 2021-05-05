import React, {useState, useEffect} from 'react'

function Tag(props){
    const [tag, setTag] = useState('')
    const [taglist, setTagList] = useState([])
    const [display, setDisplay] = useState(false)
    const [index] = useState(props.index)

    const handleChange = (e) =>{
        setTag(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!taglist.includes(tag) && tag !== '')

            setTagList([...taglist, tag])
            setDisplay(true)
            setTag('')
        
    }
    useEffect (()=>{
        props.handleTags(taglist, index)

    })

    return(
        <div>
            <div className = 'tag_display_container'>
                {display ? taglist.map(c=><p className = "tag_display"key={c}>{c}</p>) : ''}
            </div>
            <form onSubmit = {handleSubmit}>
                <input className = "add_tag" type = "text" value = {tag} onChange = {handleChange} placeholder = "Add a tag"/>
                
            </form>
        </div>
    )

}

export default Tag