import logo from "../assets/logo.png"; 
import { NavLink } from 'react-router-dom';
function Sidebar() {
  return (
    <div className= "w-72 h-screen bg-neutral-800 text-white flex flex-col px-4 space-y-4" >
        <img src={logo} alt="Logo" className="w-24 h-24 mx-auto mb-4" />
        <NavLink to="/" className={({isActive})=> `m-1 p-2 transition ${isActive ? 'bg-red-900' : 'text-whitebg'}`}>Dashboard</NavLink>
        <NavLink to="/data" className={({isActive})=> `m-1 p-2 transition ${isActive ? 'bg-red-900' : 'text-whitebg'}`}>Data</NavLink>
    </div>
  )
}

export default Sidebar