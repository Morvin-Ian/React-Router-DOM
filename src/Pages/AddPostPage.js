import React from 'react'

const AddPostPage = ({title,setTitle,date,setDate,body,setBody, handlesubmit}) => {
  return (
    <form className='form' onSubmit={handlesubmit}>
    
            <input

                autoFocus
                id='name'
                type='text'
                placeholder='Post Title'
                required
                value={title}
                onChange ={(e)=> setTitle(e.target.value)}

            /> <br/>
            <input

                autoFocus
                id='name'
                type='text'
                placeholder='Date'
                required
                value={date}
                onChange ={(e)=> setDate(e.target.value)}

                /> <br/>
            <textarea

                placeholder='Post Description'
                required
                value={body}
                onChange ={(e)=> setBody(e.target.value)}

            /> <br/>
            <button id='submit' type='submit'>Add Post</button>            
        </form>
  )
}

export default AddPostPage