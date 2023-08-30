import './App.css';
import blissImage from './images/bliss.jpg';
import Taskbar from './components/Taskbar';
import DesktopIcon from './components/DesktopIcon';
import notesblockicon from './images/notesblockicon.png';
import expicon from './images/expicon.png';
import cmdicon from './images/cmdicon.png';
import defragmenticon from './images/defragmenticon.png';
import keyboardicon from './images/keyboardicon.png';
import mouseicon from './images/mouseicon.png';
import thispcicon from './images/thispcicon.png';
import trashicon from './images/trashicon.png';
import TurnOff from './components/TurnOff';


function App() {
  return (
    <div className="App">
       <div className="h-screen w-screen" style={{ backgroundImage: `url(${blissImage})` }}>
        <TurnOff />
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
        <Taskbar />
    </div>
    </div>
  );
}

export default App;
