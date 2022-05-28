import React from 'react'
import { useParams } from 'react-router-dom'
import {useEffect} from 'react'

const EditPage = (posts, editTitle,setEditTitle,editDate,setEditDate,editBody,setEditBody, handleupdates) => {
    const  { id }  = useParams(); 
    // id comes inform of ":1" therefore to pick the id only id[2] 
    const post = posts.find(post => (post.id).toString() === id[1]);

    useEffect({
        if(post){
            setEditTitle(post.title)
            setEditDate(post.date)
            setEditBody(post.body)
        }
    },[post, setEditTitle,setEditDate, setEditBody])


  return (

    <form className='form' onSubmit={(e)=>e.preventDefault()}>
    
    <input

        autoFocus
        id='name'
        type='text'
        placeholder='Post Title'
        required
        value={editTitle}
        onChange ={(e)=> setEditTitle(e.target.value)}

    /> <br/>
    <input

        autoFocus
        id='name'
        type='text'
        placeholder='Date'
        required
        value={editDate}
        onChange ={(e)=> setEditDate(e.target.value)}

        /> <br/>
    <textarea

        placeholder='Post Description'
        required
        value={editBody}
        onChange ={(e)=> setEditBody(e.target.value)}

    /> <br/>
    <button id='upd' onClick={()=> handleupates(post.id)} type='submit'>Update Post</button>            
</form>
  )
}

export default EditPage; 