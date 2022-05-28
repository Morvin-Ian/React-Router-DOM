import React from 'react'
import { useParams } from 'react-router-dom'
import {useEffect} from 'react'

const EditPage = (posts, editTitle, setEditTitle, editDate, setEditDate, editBody, setEditBody, handleupdates) => {
    const  { id }  = useParams(); 
    // id comes inform of ":1" therefore to pick the id only id[2] 

    //The post arrives as an object format
    const ArrayingPost = posts['posts']
    const post = ArrayingPost.find(Arraypost => (Arraypost.id).toString() === id[1]);
    console.log(post["date"])
    // useEffect(()=>{
    //     //Accessed as objects
    //         // setEditTitle(post["title"])
    //         // setEditDate(post["date"])
    //         // setEditBody(post["body"])
        
    // },[])


  return (
        <main>
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
                <button id='upd' onClick={()=> handleupdates(`${post["id"]}`)} type='submit'>Update Post</button>            
            </form>
        
        </main>
  )
}

export default EditPage; 