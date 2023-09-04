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
      <div 
  className="flex items-center pl-2 pr-4" 
  style={{
    padding: '5px 25px 5px 15px',
    fontFamily: 'Tahoma, sans-serif',
    borderRadius: '0px 10px 15px 0px',
    boxShadow: '0px 5px 10px #79ce71 inset',
    background: 'radial-gradient(circle, #5eac56 0%, #3c873c 100%) center/cover no-repeat'
  }}
>
  <div className='max-w-[30px] mr-2'><img src={windowsicon} alt="windows icon"></img></div>
  <span className='text-xl text-white italic font-semibold'>Start</span>
</div>

      {/* Middle Section */}
      <div className="flex-grow flex items-center pl-4 ml-[-4px]" style={{
    background: 'linear-gradient(to bottom, #245edb 0%, #3f8cf3 9%, #245edb 18%, #245edb 92%, #333 100%) center/cover no-repeat'
  }}>
        {/* Internet Explorer Icon */}
        <div className='mr-2'><img src={expicon} alt="internet icon"></img></div>
        {/* Notes Icon */}
        <div><img src={notesblockicon} alt="Notes block icon"></img></div>
      </div>

      {/* Right Side Section */}
      <div className="flex items-center pr-4 pl-2" style={{ backgroundColor: "#0592ED" }}>
        {/* Speaker Icon */}
        <div className='max-w-[30px] max-h-[30px]'><img src={xpspeaker} alt="speaker icon"></img></div>
        {/* Timestamp (placeholder for now) */}
        <span className="text-white">{time}</span>
      </div>
    </div>
  );
}

export default Taskbar;
