import React from 'react'
import userdata from '../assets/data/users.json'

const Post = ({ post }) => {
  return (
    <div className='  bg-blue-100 shadow-lg shadow-purple-700 rounded-lg p-4 mb-6  w-full '>
        <div className='flex justify-between items-center mb-2 w-full'>
            <div className='flex items-center gap-2 w-[60%] overflow-hidden'>
                <div className='rounded-full w-10 h-10'>{userdata.id==post.id?(<img src={userdata.avatar} alt="" className='object-contain w-10 h-10 rounded-full' />):null}</div>
                <div className='font-bold'>{post.username}</div>
            </div>
            <div className='w-[10%]'>
                <img src="/images/more.png" alt="more options" className='w-6 cursor-pointer' />
            </div>
        </div>

      <div className='flex justify-center mb-2 '>
        <img src={post.image} alt="" className='object-contain w-full h-[200px] rounded-md' />
      </div>

      <div className='flex justify-around w-full mb-2'>
        <button><img src="/images/heart.png" alt="" className='inline-block' /><span>{post.likes}</span></button>
        <button><img src="/images/commentblue.png" className='inline-block' alt="" /><span>Comment</span></button>
        <button><img src="/images/share.png" className='inline-block' alt="" /><span>Share</span></button>
      </div>

      <div className='w-full text-gray-700'>{post.caption}</div>
    </div>
  )
}

export default Post
