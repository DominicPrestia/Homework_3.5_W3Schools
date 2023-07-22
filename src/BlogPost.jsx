import React, {useState} from 'react'
import UserInput from './UserInput'

const BlogPost = ({addToList, deletePost}) => {

   
    let [author,setAuthor] = useState('')
    let [title,setTitle] = useState('')
    let [content,setContent] = useState('')


    function handleSubmit(e){
        e.preventDefault()
        let postDate = new Date().toLocaleDateString();
        let postTime = new Date().toLocaleTimeString();
        
        let post = {author, title, content, postDate, postTime}
        addToList(post)
        
       
        setAuthor('')
        setContent('')
        setTitle('')

    } 


  return (
    <>
    
    <form onSubmit={handleSubmit}>
        <UserInput title={title} author={author} content={content} setAuthor={setAuthor} setTitle={setTitle} setContent={setContent}/>
        <br />
        <br />
        <button>Submit Post</button>
        <button type='button' onClick={deletePost}>Delete</button>

    </form>
    
    </>
  )
}

export default BlogPost