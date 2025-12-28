import React from 'react';
import { useParams } from 'react-router-dom';
import postdata from '../assets/data/posts.json';
import Post from '../components/Post';
import Emoji from '../assets/login.jpg'
import Sidebar from '../components/Sidebar';
import Comment from '../components/Comment';
import Addcomment from '../components/Addcomment';

const PostDetails = () => {
  const { id } = useParams(); // Get the id from the URL
  const post = postdata.find((p) => p.id === parseInt(id));
  const comments = post.comments;

  if (!post) return <div>Post not found</div>;

  return (
    <div>
     {/* Bigger Screen  */}
    <div className=' hidden sm:flex sm:bg-pink-50'>
        <div className='w-1/3'><Sidebar/></div>
        <div className='w-1/3  flex flex-col items-center justify-center min-h-screen '>
             <Post post={post} className='w-full h-full'/>
          
          {/* <div className='w-full bg-gray-200 mb-4 p-2 rounded-2xl shadow-2xl h-20 fixed bottom-0'><div className=''>Add a comment...</div></div> */}
          {/* <input type="text" placeholder='Add a comment'  className='w-full bg-gray-200  active:border-2 active:border-gray-700 mb-4 p-2 rounded-2xl shadow-2xl h-20'/> */}
          
        </div>
        <div className="w-1/3 fixed right-0 top-0 min-h-screen flex flex-col bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 shadow-xl">

          <div className="p-6 text-purple-900 text-4xl font-semibold border-b border-blue-300">
            Comments
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {comments.map((c) => (
              <Comment key={c.id} comment={c} />
            ))}
          </div>
          <div className="sticky bottom-0 bg-blue-200 p-4 border-t border-blue-300">
            <Addcomment />
          </div>
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


     {/* Mobile Screen  */}
    <div className='bg-[linear-gradient(to_bottom_right,#FFD2A8_0%,#B0D0E0_100%)] h-screen flex sm:hidden'>
      <Sidebar className='' />
      <div className="flex flex-col justify-center items-center overflow-y-scroll w-full">
        <div className="w-[90vw] sm:w-[60vw] max-w-3xl flex flex-col">

          <Post post={post} />
          {comments.map((c) => (
            <Comment key={c.id} comment={c} />
          ))}
          {/* <div className='w-full bg-gray-200  active:border-2 active:border-gray-700 mb-4 p-2 rounded-2xl shadow-2xl h-20'> */}
            <div className="sticky bottom-0 bg-blue-200 p-4 border-t border-blue-300">
            <Addcomment />
          </div>

        </div>
      </div>
    </div>

    </div>
  );
};

export default PostDetails;
