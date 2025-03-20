import React from 'react';
import logo from '../logo.svg';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <img src={logo} className="h-32 w-32 animate-spin-slow mb-8" alt="logo" />
      <h2 className="text-4xl font-bold mb-6">Welcome to Your AI Assistant</h2>
      <p className="text-xl max-w-2xl text-center mb-8">
        This powerful application combines React for the frontend with a FastAPI backend
        to deliver an intelligent assistant experience.
      </p>
      <div className="flex space-x-4">
        <button className="bg-blue-500 hover:bg-blue-600 transition-colors px-6 py-3 rounded-lg font-bold">
          Get Started
        </button>
        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 transition-colors px-6 py-3 rounded-lg font-bold">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero; 