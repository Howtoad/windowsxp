import windowsIcon from "../images/windowsicon.png";
import standByIcon from "../images/standbyicon.png";
import turnOffIcon from "../images/turnofficon.png";
import restartIcon from "../images/restarticon.png";


const TurnOff = ({setIsRestartHovered, setIsDesaturated}) => {
    return ( 
        <div 
        className="turn-off-box  text-white w-96"
        style={{
          position: 'fixed',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: "#00339C",
          border: '2px solid black'
        }}
      >
        {/* Top Part */}
        <div className="flex justify-between items-center bg-blue-800 h-[55px] pl-3 pr-3">
          <span className="text-2xl">Turn off computer</span>
          <img src={windowsIcon} alt="Windows icon" className="w-8 h-8" />
        </div>
        {/* Middle Part */}
        <div
        className="flex flex-row justify-around items-center p-4"
        style={{
          background: 'linear-gradient(to left, #658CE7, #8FB1F4, #658CE7)'
        }}
      >
        <div className="text-center pt-7">
          <img src={standByIcon} alt="Stand By" className="w-12 h-12 mx-auto cursor-pointer" />
          <button className="pb-1 rounded">Stand by</button>
        </div>
        <div className="text-center pt-7">
          <img src={turnOffIcon} alt="Turn Off" className="w-12 h-12 mx-auto cursor-pointer" />
          <button className="pb-1 rounded">Turn off</button>
        </div>
        <div className="text-center pt-7">
          <img src={restartIcon} alt="Restart" className="w-12 h-12 mx-auto cursor-pointer" 
         onMouseEnter={() => {
          setIsRestartHovered(true);
          setIsDesaturated(true);
        }} 
        onMouseLeave={() => {
          setIsRestartHovered(false);
          setIsDesaturated(false);
        }}/>
          <button className="pb-1 rounded">Restart</button>
        </div>
      </div>
        {/* Bottom Part */}
        <div className="bg-blue-800 h-[55px]">
          {/* Add anything here if needed */}
        </div>
      </div>
     );
}
 
export default TurnOff;