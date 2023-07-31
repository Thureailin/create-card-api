import React from 'react'
import { useGetBlogsQuery } from '../feature/services/blogApi'
import BlogCard from './BlogCard'
import { Link } from 'react-router-dom'

const Blog = () => {
    const{data : blogs} = useGetBlogsQuery()
    // console.log(blog)
  return (
    <>
    <div className='text-center mt-10 '>
    <Link to={'/create'}>
    <button className="btn btn-outline btn-active btn-secondary px-5 rounded-[8px]">Create</button>
        </Link>
        </div> 
    <div className='flex flex-wrap justify-center gap-8 mt-10'>
        {blogs?.map( blog => {
            return(
                <BlogCard key={blog.id} blog={blog}/>
            )
        })}
    </div>
    </>
  )
}

export default Blog