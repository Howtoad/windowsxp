import React, { useState, useEffect } from 'react';
import windowsicon from '../images/windowsicon.png';

const RestartScreen = () => {
  const [statusText, setStatusText] = useState('Logging off...');
  
  useEffect(() => {
    const timers = [
      setTimeout(() => setStatusText('Saving your settings...'), 3000),
      setTimeout(() => setStatusText('Windows is shutting down...'), 4000),
      // Add more status texts here if necessary
    ];
  
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <div 
      className="restart-screen text-white flex flex-col"
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: "#00339C",
      }}
    >
      {/* Top Part */}
      <div className="flex justify-between items-center bg-blue-800 h-[80px]">
      </div>
      
      {/* Middle Part */}
      <div
  className="flex flex-col justify-center items-center flex-grow relative"
  style={{
    background: 'linear-gradient(to left, #658CE7, #8FB1F4, #658CE7)',
    paddingLeft: '200px'
  }}
>
  <div className="flex flex-col items-center">
    <div className="flex">
      <p className="mt-auto mr-3 text-xs">Microsoft ©</p>
      <img src={windowsicon} alt="Windows XP" className="w-20 h-20" />
    </div>
    <h1 className="text-4xl font-bold leading-5">
      Windows{' '}
      <span
        className="text-amber-500 text-xl"
        style={{ position: 'relative', top: '-10px' }}
      >
        XP
      </span>
    </h1>
    
  </div>
  <div className="text-2xl text-right w-[600px]" style={{
    marginRight: '480px'
  }}>
      {statusText}
    </div>
</div>
      
      {/* Bottom Part */}
      <div className="bg-blue-800 h-[80px]">
        
      </div>
    </div>
  );
};

export default RestartScreen;
