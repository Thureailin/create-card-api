import React from 'react'
import { Link } from 'react-router-dom'
import { useGetDeleteBlogMutation } from '../feature/services/blogApi'

const BlogCard = ({blog}) => {
    const [getDeleteBlog] = useGetDeleteBlogMutation();

  return (
    <div className=''>
        <div data-theme="business" className='card bg-base-100 flex flex-col w-72  border shadow rounded-[6px] hover:scale-75 origin-top-left  transition-all transform-gpu'>
            <img className='h-[250px]  rounded-[6px] ' src={blog?.image} alt=''/>
           <div className='p-4 flex-col gap-4'>
            <h2 className='text-info font-semibold'>{blog.title}</h2>
            <p className='text-secondary'>{blog.description}</p>
            <div className='card-actions  flex justify-between mt-10'>
            <Link to={`/detail/${blog?.id}`}>
            <button className='btn btn-outline btn-secondary rounded-[8px] text	info-content px-5 py-1'>Detail</button>
            </Link>
            <button onClick={()=>getDeleteBlog(blog?.id)} className='btn btn-outline btn-accent rounded-[8px]  text-white px-5 py-1'>Delete</button>
            </div>
            </div>
        </div>
        
    </div>
  )
}

export default BlogCard