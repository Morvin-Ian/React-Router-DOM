import React from 'react'
import Post from '../Components/Post'

const Home = ({posts}) => {

    return (
        <div className="posts">

            {posts.length ? 
                posts.map((post =>
                        < Post key={post.id} post={post}/>
                    
                    )):"Empty Posts"}
        </div>
    )
}

export default Home;
