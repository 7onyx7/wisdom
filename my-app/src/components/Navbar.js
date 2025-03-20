import React from 'react';

const Navbar = () => {
  return (
    <nav className="container mx-auto p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Wisdom App</h1>
        <div>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-blue-300 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-blue-300 transition-colors">Dashboard</a></li>
            <li><a href="#" className="hover:text-blue-300 transition-colors">Login</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 