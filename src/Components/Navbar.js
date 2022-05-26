import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = ({search, setSearch}) => {
    return (
        <ul className='nav'>
            <h1>Brace Blogs (React)</h1> <br/>

            <form onSubmit={(e)=> e.preventDefault()}>

                <input
                    type="text"
                    placeholder='Search Post'
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                />

            </form>

            <Link className='link'  to="/">Home</Link>
            <Link className='link' to="/post/:id">Post</Link>
            <Link className='link' to="/new">New Post</Link>
            <Link className='link' to="/about">Contact</Link>
         
        </ul>
    )
}

export default Navbar
