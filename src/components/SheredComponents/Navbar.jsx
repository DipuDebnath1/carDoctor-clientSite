import { NavLink } from "react-router-dom";
import logo from '../../assets/assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
    const {user, Logout} = useContext(AuthContext);

    const navItem = <>
           <li> <NavLink to={'/'}>Home</NavLink></li>
           <li> <NavLink to={'/about'}>About</NavLink></li>
           <li>{user ? <button onClick={Logout}>SignOut</button> : <NavLink to={'/signin'}>SignIn</NavLink>}</li>
           <li>{user && <NavLink to={`booking`}>Booking</NavLink>}</li>
    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                       {navItem}
                    </ul>
                </div>
                <img src={logo} />
            </div>
            <div className="navbar-center hidden lg:flex gap-3">
                <ul className="menu menu-horizontal px-1">
                {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn border-orange-500  text-orange-500">Appointment</a>
            </div>
        </div>
    );
};

export default Navbar;