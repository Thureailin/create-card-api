import React, { useState } from 'react'
import { useGetCreateBlogMutation } from '../feature/services/blogApi';
import {  useNavigate } from 'react-router-dom';

const Create = () => {
    const [title,setTitle] = useState("");
    const [description,setDescripton] = useState("");
    const [image,setImage] = useState("");
    const [getCreateBlog] = useGetCreateBlogMutation();
    const nav = useNavigate()
    const createHandler = (e)=>{
        e.preventDefault()
        const newData ={id:Date.now(),title,description,image}
        getCreateBlog(newData)
        nav('/')
    }
    
  return (
    <div className='flex  justify-center items-center h-screen'>
        <form data-theme="dark" onSubmit={createHandler} className='flex flex-col gap-10 p-7 shadow-lg w-96 border-success'>
            <h2 className='text-2xl text-primary font-semibold '>Create Card</h2>
            <div className=''>
            <input type="text" placeholder="Title...." onChange={(e)=>setTitle(e.target.value)} className="input input-bordered input-success w-full max-w-xs" />
            </div>
            <div className=''>
            <input type="text" placeholder="Description...." onChange={(e)=>setDescripton(e.target.value)} className="input input-bordered input-warning w-full max-w-xs" />
            </div>
            <div className=''>
            <input type="text" placeholder="Image...." onChange={(e)=>setImage(e.target.value)} className="input input-bordered input-secondary w-full max-w-xs" />
            </div>
           
            <button className="btn  btn-primary">Create</button>
            
        </form>
    </div>
  )
}

export default Create