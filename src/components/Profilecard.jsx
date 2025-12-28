import React from 'react'

const Profilecard = ({ profile }) => {
  return (
    <div className="flex justify-center">
      <div className="bg-blue-100 shadow-lg shadow-purple-700 hover:shadow-purple-700 transition-shadow duration-300 rounded-2xl w-full max-w-sm p-6 flex flex-col items-center text-center">
        
        {/* Avatar */}
        <img 
          src={profile.avatar} 
          alt={profile.name} 
          className="w-24 h-24 rounded-full border-2 border-blue-800 object-cover mb-4"
        />
        
        {/* Name & Username */}
        <h2 className="text-xl font-bold text-gray-800">{profile.name}</h2>
        <p className="text-sm text-gray-500 mb-3">@{profile.username}</p>

        {/* Bio */}
        <p className="text-gray-600 text-sm mb-5 px-4">{profile.bio}</p>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-800 transition-all">
            Follow
          </button>
          <button className="px-4 py-2 border border-purple-600 text-purple-600 rounded-full hover:bg-blue-50 transition-all">
            Message
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profilecard
