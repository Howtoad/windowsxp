import React from 'react';
import expicon from '../images/expicon.png';
import notesblockicon from '../images/notesblockicon.png';
import windowsicon from '../images/windowsicon.png';
import xpspeaker from '../images/xpspeaker.webp';
import { useState, useEffect } from 'react';

function Taskbar() {
    function formatTime(date) {
        let hours = date.getHours();
        const minutes = date.getMinutes();
    
        // Convert to 12-hour time if it's greater than 12.
        if (hours > 12) {
            hours -= 12;
        }
    
        return `${hours}:${minutes.toString().padStart(2, '0')} ${date.getHours() >= 12 ? 'PM' : 'AM'}`;
    }
    
    const [time, setTime] = useState(formatTime(new Date()));




    useEffect(() => {
        const interval = setInterval(() => {
            setTime(formatTime(new Date()));
        }, 1000);
    
        return () => {
            clearInterval(interval);
        };
    }, []);
    
    
  return (
    <div className="fixed bottom-0 left-0 w-full h-12 bg-blue-900 flex">
      {/* Start Menu Section */}
      <div className="flex items-center pl-2 pr-4 rounded-r-lg z-20" style={{ backgroundColor: "#3E9541" }}>
        {/* Windows Icon (placeholder for now) */}
        <div className='max-w-[32px] max-h-[32px] mr-2'><img src={windowsicon}></img></div>
        <span className="text-white font-bold mr-4">Start</span>
      </div>

      {/* Middle Section */}
      <div className="flex-grow flex items-center pl-4 ml-[-4px]" style={{ backgroundColor: "#1E5BDF" }}>
        {/* Internet Explorer Icon */}
        <div className='mr-2'><img src={expicon}></img></div>
        {/* Notes Icon */}
        <div><img src={notesblockicon}></img></div>
      </div>

      {/* Right Side Section */}
      <div className="flex items-center pr-4 pl-2" style={{ backgroundColor: "#0592ED" }}>
        {/* Speaker Icon */}
        <div className='max-w-[30px] max-h-[30px]'><img src={xpspeaker}></img></div>
        {/* Timestamp (placeholder for now) */}
        <span className="text-white">{time}</span>
      </div>
    </div>
  );
}

export default Taskbar;
