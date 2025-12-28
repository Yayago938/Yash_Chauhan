import React from 'react'
import Sidebar from '../components/Sidebar'
import postdata from '../assets/data/posts.json'
import Post from '../components/Post'
import { Link } from 'react-router-dom'
const Home = () => {

    return (
        <div>
       {/* Bigger Screens  */}
       <div className=' hidden sm:flex sm:bg-purple-100 w-full'>
        <div className='w-64'><Sidebar/></div>
        <div className='  flex-1 flex flex-wrap gap-4 justify-center mt-[12vh] bottom-20'>

            {postdata.map((post) => (
                        <Link key={post.id} to={`/post/${post.id}`} className="w-1/4">
                            <Post post={post} />
                        </Link>
                    ))}
        </div>
        {/* <div className='w-1/3 flex flex-col min-h-screen p-4 gap-12 right-0 fixed  bg-gradient-to-r  from-blue-100 via-blue-200 to-blue-300'>
            <div className='flex gap-2'>
                <div className='rounded-full bg-amber-500 w-10 h-10'></div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-black font-extrabold'>Name</div>
                    <div className='text-gray-800'>Username</div>
                </div>
            </div>

            <div className='text-red-600  text-shadow-lg text-shadow-purple-400 font-extrabold text-4xl'>Suggested for you</div>
            <div className='flex gap-2'>
                <div className='rounded-full bg-amber-500 w-10 h-10'></div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-blue-600 text-shadow-purple-300 text-shadow-lg font-extrabold'>Name</div>
                    <div className='text-blue-800'>Username</div>
                </div>
            </div>
        </div> */}
       </div>
       
       
       
       {/* Mobile Screen */}


        <div className='bg-[linear-gradient(to_bottom_right,#FFD2A8_0%,#B0D0E0_100%)] h-full flex sm:hidden'>
            <Sidebar className='' />
            <div className="flex flex-col justify-center items-center w-full">
                <div className="w-[90vw] sm:w-[60vw] max-w-3xl">
                    {postdata.map((post) => (
                        <Link key={post.id} to={`/post/${post.id}`} className="w-full">
                            <Post post={post} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>



        </div>
    )
}

export default Home
