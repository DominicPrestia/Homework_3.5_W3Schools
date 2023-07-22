import React from 'react'




const UserInput = ({ author, title, content, setAuthor, setTitle, setContent }) => {



    return (
        <>
            <label htmlFor="postTitle">Title: </label>
            <input type="text"
            value={title}
            required
                onChange={e => {setTitle(e.target.value) }}
            />
            <br />
            <label htmlFor="postAuthor">Author: </label>
             <input type="text"
             value={author}
             required
                onChange={e => { setAuthor(e.target.value) }}
            />
            <br />
            <label htmlFor="post">Post: </label>
             <input type="text"
             value={content}
             required
                onChange={e => { setContent(e.target.value) }}
            />

        </>
    )
}

export default UserInput