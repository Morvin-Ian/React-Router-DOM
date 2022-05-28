import React from 'react'
import {Link} from 'react-router-dom'

const Post = ({post}) => {
    return (
      <div className='post'>

            <Link className='post-link' to={`/post/:${post.id}`}>
                <p >
                    <strong>{post.title} </strong> <br/>
                    <small>
                        {post.date} <br/>
                        {(post.body).length <= 20 ? post.body : `${(post.body).slice(0,20)}...`}

                    </small>
                </p>    
            </Link>
      </div>
    )
}

export default Post
