import React, { useState } from 'react';
import './App.css';
import blissImage from './images/bliss.jpg';
import Taskbar from './components/Taskbar';
import TurnOff from './components/TurnOff';
import DesktopIcon from './components/DesktopIcon';
import notesblockicon from './images/notesblockicon.png';
import expicon from './images/expicon.png';
import cmdicon from './images/cmdicon.png';
import defragmenticon from './images/defragmenticon.png';
import keyboardicon from './images/keyboardicon.png';
import mouseicon from './images/mouseicon.png';
import thispcicon from './images/thispcicon.png';
import trashicon from './images/trashicon.png';
import {motion} from "framer-motion"

function App() {
  const [isRestartHovered, setIsRestartHovered] = useState(false);
  const [isDesaturated, setIsDesaturated] = useState(false);
  const [showDesktopIcons, setShowDesktopIcons] = useState(true);
  const [showTurnOffBox, setShowTurnOffBox] = useState(true);
  const [showTaskBar, setShowTaskBar] = useState(true);
  const [showBlissImage, setShowBlissImage] = useState(true);


  return (
    <div className="App" style={{ position: 'relative' }}>
    {/* Grey overlay */}
    {isRestartHovered && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(64, 64, 64, 0.9)',
          zIndex: 1
        }}
      ></motion.div>
    )}

    {/* TurnOff Box (taken out of the main content and given higher z-index) */}
    {showTurnOffBox && (
    <div style={{ position: 'relative', zIndex: 3 }}>
      <TurnOff 
        setIsRestartHovered={setIsRestartHovered} 
        setIsDesaturated={setIsDesaturated}
        setShowDesktopIcons={setShowDesktopIcons}
        setShowTurnOffBox={setShowTurnOffBox}
        setShowTaskBar={setShowTaskBar}
        setShowBlissImage={setShowBlissImage}
      />
    </div>
    )}

      {/* Main Content */}
      {showBlissImage && (
        
      <motion.div 
  className={`h-screen w-screen ${isDesaturated ? 'desaturate' : ''}`} 
  style={{ backgroundImage: `url(${blissImage})` }}
  initial={{ filter: "grayscale(0%)" }}
  animate={{ filter: isDesaturated ? "grayscale(50%)" : "grayscale(0%)" }}
  transition={{ duration: 3 }}
>
        {/* Desktop Icons */}
        {showDesktopIcons && (
          <div className="desktop-icons absolute top-0 left-0 flex flex-col space-y-4 p-4">
          <DesktopIcon iconPath={notesblockicon} iconName="Notesblock" />
          <DesktopIcon iconPath={expicon} iconName="My Documents" />
          <DesktopIcon iconPath={cmdicon} iconName="Cmd" />
          <DesktopIcon iconPath={defragmenticon} iconName="Defrag drive" />
          <DesktopIcon iconPath={keyboardicon} iconName="Keyboard" />
          <DesktopIcon iconPath={mouseicon} iconName="Mouse settings" />
          <DesktopIcon iconPath={thispcicon} iconName="This PC" />
          <DesktopIcon iconPath={trashicon} iconName="Recycle bin" />
          </div>
        )}
        

        {/* Taskbar */}
        {showTaskBar && (
        
          <Taskbar />
        )}
      </motion.div>
      )
      }
    </div>
  );
}

export default App;
