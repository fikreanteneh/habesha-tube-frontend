import { NavLink, useLocation } from 'react-router-dom';
import Headphone from '../assets/images/Headphone.svg';
import { useSelector } from 'react-redux';


export const Header = () => {
    
    const authStatus = useSelector(state => state.auth.authStatus)
    const location = useLocation();
    const activeStyle = {true: 'py-3 text-black-500 border-b-[3px] border-red-500 font-semibold', false: 'py-3 text-gray-500 hover:text-red-500'}


  return (
    <div className='bg-white border-b shadow-sm sticky z-10'>
        <header className='flex justify-between items-center px-4 max-w-3xl mx-auto'>
            <div className='flex items-center'>
                <img src={Headphone} className='h-7 cursor-pointer'></img>
                <h1 className='ml-2 py-3 text-black-500 font-semibold'> Habeshan Tube</h1>
            </div> 
            <div>
                <nav className='flex space-x-6'>
                    <NavLink to="/"  className={activeStyle[location.pathname == "/"]}>Home</NavLink>
                    {authStatus == "authenticated" ? 
                        <NavLink to="/profile"  className={activeStyle[location.pathname == "/profile"]}>Profile</NavLink> :
                        <NavLink to="/signin"  className={activeStyle[location.pathname == "/signin"]}>Sign In</NavLink>}
                </nav>
            </div>            
        </header>
    </div>
  )
}
