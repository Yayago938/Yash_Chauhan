import React from 'react';

const Searchbar = () => {
  return (
    <div className="w-full">
      <div className="
        flex items-center gap-3 
        bg-gradient-to-r from-purple-200/60 to-blue-200/60 
        backdrop-blur-xl
        border border-white/30
        rounded-3xl shadow-xl 
        px-5 py-3 
        transition-all duration-300
        focus-within:ring-2 focus-within:ring-purple-500
      ">
        
        {/* Search Icon */}
        <img 
          src="/images/search.png" 
          alt="search" 
          className="w-6 h-6 opacity-70"
        />

        {/* Input Field */}
        <input
          type="text"
          placeholder="Search..."
          className="
            bg-transparent 
            outline-none 
            text-gray-700 
            placeholder-gray-500 
            w-full 
            text-lg
          "
        />
      </div>
    </div>
  );
};

export default Searchbar;
