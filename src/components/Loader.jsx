import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex space-x-3">
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce-slow"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce-normal delay-75"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce-slow delay-150"></div>
      </div>
    </div>
  );
};


export default Loader;