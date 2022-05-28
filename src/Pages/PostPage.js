import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const PostPage = ({posts, deletePost}) => {
    const  { id }  = useParams(); 
    // id comes inform of ":1" therefore to pick the id only id[2] 
    const post = posts.find(post => (post.id).toString() === id[1]);

 
    return (
        <div className='individual-post'>

            {post &&
                <>
                    <h3>{post.title}</h3>
                    <small><em>{post.date}</em> <br/></small>
                    <small>{post.body}</small> <br/>
                    <button id='del'> <Link to={`/edit/${post.id}`}>Update</Link> </button>
                    <button id='del' onClick={()=>deletePost(post.id)}>Delete</button>
                 
                </>
            }

        </div>
    )
}

export default PostPage
