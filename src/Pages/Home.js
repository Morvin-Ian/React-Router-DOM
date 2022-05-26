import React from 'react'
import Post from '../Components/Post'

const Home = ({posts}) => {

    return (
        <div className="posts">

            {posts.map((post =>
                    < Post post={post}/>
                
                ))}
        </div>
    )
}

export default Home;
