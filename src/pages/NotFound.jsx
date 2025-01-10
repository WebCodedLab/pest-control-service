import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        The page you are looking for does not exist.
      </p>
      <Link to="/" className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-colors duration-200">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;