import React from 'react'

const Comment = ({ comment }) => {
    return (
        <div>
            <div className='flex flex-col h-20 w-full sm:w-[30vw] bg-gray-200 mb-4 p-2 rounded-2xl shadow-2xl hover:border-2 hover:border-gray-700 '>
                <div className='flex gap-2 items-center justify-start'>
                    <div className='rounded-full bg-amber-500 w-10 h-10'></div>
                    <div className='text-gray-800 font-bold'>{comment.user}</div>
                </div>
                <div className='px-10'>{comment.text}</div>
            </div>
        </div>
    )
}

export default Comment
