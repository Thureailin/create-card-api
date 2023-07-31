import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useGetEditBlogMutation, useGetSingleBlogQuery } from '../feature/services/blogApi';

const Edit = () => {
    const{id} = useParams()
    const {data : blog } = useGetSingleBlogQuery(id);

    const [title,setTitle] = useState(blog?.title);
    const [description,setDescription] = useState(blog?.description);
    const [image,setImage] = useState(blog?.image);

    const nav = useNavigate();
    const [getEditBlog] = useGetEditBlogMutation();
    
    const editHandler = (e) =>{
        e.preventDefault()
        const newData = {id,title,description,image}
        getEditBlog(newData)
        nav('/')
    }
  return (
  
           <div className='flex  justify-center items-center h-screen'>
        <form onSubmit={editHandler}  className='flex flex-col gap-10 p-7 shadow-lg w-96'>
            <h2 className='text-2xl text-gray-700 font-semibold'>Create Card</h2>
            <div className=''>
            <input type='text' defaultValue={title} onChange={(e)=>setTitle(e.target.value)}  placeholder='Title......' className='outline-none border-b border-b-gray-700'/>
            </div>
            <div className=''>
            <input type='text'defaultValue={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Description.....' className='outline-none border-b border-b-gray-700' />
            </div>
            <div className=''>
            <input type='text'defaultValue={image} onChange={(e)=>setImage(e.target.value)} placeholder='Which image you create.....' className='outline-none border-b border-b-gray-700'/>
            </div>
            <div className='flex justify-between'>
           
            <button className='bg-yellow-900 text-white py-1 px-4 rounded-[6px]' >Done</button>
            
            <Link to={'/'}>
            <button className='bg-lime-800 text-white py-1 px-4 rounded-[6px]' type='submit'>Back</button>
            </Link>
            </div>
            
        </form>
   
        </div>
      
  )
}

export default Edit
