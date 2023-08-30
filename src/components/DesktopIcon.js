const DesktopIcon = ({iconPath, iconName}) => {
    return ( 
        <div className="desktop-icon flex flex-col items-center">
      <img src={iconPath} alt={iconName} className="w-12 h-12 mb-2" />
      <span className="text-sm text-white" style={{ textShadow: '2px 2px 3px rgba(0, 0, 0, 0.5)' }}>{iconName}</span>
    </div>
     );
}
 
export default DesktopIcon;