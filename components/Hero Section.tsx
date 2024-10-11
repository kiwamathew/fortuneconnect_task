import React from 'react';

const HeroSection = () => {
  return (
    <section 
      id="home"
      className="bg-black text-center text-white py-20 h-screen flex flex-col justify-center items-center bg-cover bg-center"
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl leading-tight">
        Welcome to <span className="text-yellow-500">FortuneConnect 500 Klub</span>
      </h2>
      
      <p className="mb-8 text-lg md:text-xl max-w-lg">
        Connecting businesses with <span className="text-yellow-500">opportunities</span>.
      </p>

      <a 
        href="#" 
        className="bg-white text-yellow-500 px-8 py-3 rounded-full font-semibold text-lg md:text-xl hover:bg-yellow-500 hover:text-white hover:shadow-lg transform hover:scale-105 transition duration-300"
      >
        Get Started
      </a>
    </section>
  );
};

export default HeroSection;
