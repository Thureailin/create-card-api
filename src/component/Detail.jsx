import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetSingleBlogQuery } from '../feature/services/blogApi'

const Detail = () => {
    const {id} = useParams()
    const {data : blog} = useGetSingleBlogQuery(id);
    // console.log(data)
  return (
    <>
   
    <div className='flex flex-wrap gap-10 justify-center mt-20'>
        <div className='flex flex-col w-72  border shadow'>
            <img className='h-[250px]' src={blog?.image} alt=''/>
            <div className='p-4 flex-col gap-4'>
            <h2>{blog?.title}</h2>
            <p>{blog?.description}</p>
            <div className='flex justify-between'>
            <Link to={'/'}>
            <button className="btn  btn-accent rounded-[8px]">Back</button>
            </Link>
            <Link to={`/edit/${blog?.id}`}>
            <button className="btn  btn-success  rounded-[8px]">Edit</button>
            </Link>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Detail