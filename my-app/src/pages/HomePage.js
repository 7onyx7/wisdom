import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-700 text-white">
      <header>
        <Navbar />
      </header>
      
      <main className="container mx-auto p-6">
        <Hero />
      </main>
    </div>
  );
};

export default HomePage; 