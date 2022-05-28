import './App.css';
import Navbar from './Components/Navbar';
import Home from  './Pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import ErrorPage from './Pages/ErrorPage'
import About from './Components/About';
import PostPage from './Pages/PostPage';
import AddPostPage from './Pages/AddPostPage';



import {useState, useEffect} from 'react';
import axios from 'axios';





function App() {

    const Aposts = axios.create ({
      baseURL:"http://localhost:3500"
      
    })  

    const [posts, setPosts] = useState([]);
    const [search, setSearch]= useState('');

    const apiUrl = "http://localhost:3500/posts";

  
    const [title, setTitle]=useState("");
    const [date, setDate]=useState("");
    const [body, setBody]=useState("");




    // useEffect(()=>{
    //   getPosts()

    // },[])

    const getPosts = async () => {
      const response = await fetch(apiUrl)
      const data = await response.json()
      setPosts(data)
    }

    const addPost = async (title,date,body) =>{
      const id = posts.length ? posts[posts.length-1].id+1:1;
      const newPost = {id, title,date,body};
     
   

    //   fetch(apiUrl, {
    //     method: 'POST',
    //     'headers': {
    //         'Content-Type': 'application/json'
    //     },
    //     body:JSON.stringify(newPost)
    // })

    //Axios
      try{
        const response = await Aposts.post('/posts', newPost)
        const totalPosts = [...posts, response.data]
        setPosts(totalPosts)
      }
      catch(err){
        console.log(err.message)
      }


    }

    const handlesubmit = (e) => {
      e.preventDefault();
      if (!title) return;
        addPost(title,date,body)
        setTitle('')
        setDate('')
        setBody('')
  
    }

    const deletePost = async (id) => {
      // const listPosts = posts.filter(post => post.id !== id);
      // setPosts(listPosts)

    //   fetch(`${apiUrl}/${id}`, {
    //     method: 'DELETE',
    //     'headers': {
    //         'Content-Type': 'application/json'
    //     }
    // })

     //Axios
     try{
      await Aposts.delete(`/posts/${id}`)
      const listPosts = posts.filter(post => post.id !== id);
      setPosts(listPosts)
    }
    catch(err){
      console.log(err.message)
    }

    }

    
    const handleupdates = async (id) =>{
      const listPosts = posts.map(post => post.id === id ? {...post, title, date, body }: post);      
    
      const myPost = listPosts.filter((post) => post.id === id);
      console.log(myPost)

      fetch(`${apiUrl}/${id}`, {
        method: 'PATCH',
        'headers': {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(myPost)
      })   
      
    

    }


    // Use of Axios

    useEffect(()=> {
      const fetchPosts = async () =>{
        try{
          const response = await Aposts.get("/posts")
          setPosts(response.data);

        }
        catch(err){
          if(err.response){

            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)}
          
          else{console.log(err.message)}

        }
      }

      fetchPosts();
    },[])






  return (
  <Router>
     <Navbar
      search={search}
      setSearch={setSearch}
     />
    
      <Routes>
       <Route path='/' 
          element={<Home
          posts={posts.filter(post => ((post.title).toLowerCase()).includes(search.toLowerCase()) || ((post.body).toLowerCase()).includes(search.toLowerCase()))}         
          />}/>

       <Route path='/about' element={<About/>}/>

       <Route path='/new' element={<AddPostPage
          title={title}
          setTitle={setTitle}
          date={date}
          setDate={setDate}
          body={body}
          setBody={setBody}
          handlesubmit={handlesubmit}

       />}/>

       <Route path='/post:id' element={<PostPage 
          posts={posts}
          deletePost={deletePost}
          />}
          />

       
       <Route path='*' element={<ErrorPage/>}/>
      </Routes> 

  </Router>
   
  
  );
}
 
export default App;
