import './App.css';
import blissImage from './images/bliss.jpg';
import Taskbar from './components/Taskbar';


function App() {
  return (
    <div className="App">
       <div className="h-screen w-screen" style={{ backgroundImage: `url(${blissImage})` }}>
        <Taskbar />
    </div>
    </div>
  );
}

export default App;
