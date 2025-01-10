import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ to, content, icon }) => {
  return (
    <Link to={to} className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center"
    >
      {icon}
      {content}
    </Link>
  );
};

export default Button;