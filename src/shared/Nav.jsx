import { Link, NavLink } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa6";
import useAuth from "../hooks/useAuth";

const Nav = () => {
   const { user, logOut } = useAuth();
   return (
      <nav className="border-b bg-gray-50">
         <div className="flex items-center justify-between py-3 max-w-7xl mx-auto px-3">
            <Link to='/' className="flex items-center space-x-2">
               <FaGraduationCap className="text-4xl text-primary-500" />
               <h3 className="text-xl font-semibold font-serif">RTK College</h3>
            </Link>
            <ul className="flex items-center space-x-6 text-[#7b7979] font-semibold text-sm nav">
               <NavLink to='/'>Home</NavLink>
               <NavLink to='/colleges'>Colleges</NavLink>
               <NavLink to='/admission'>Admission</NavLink>
               <NavLink to='/my-college'>My College</NavLink>
               {
                  user ? <><span onClick={() => logOut()} className="text-white bg-red-600  px-1 py-0.5 rounded-lg cursor-pointer">Logout</span>
                     <img src={user?.photoURL} referrerPolicy="no-referrer" alt="" className="w-10 h-10 rounded-full object-cover" /></> : <NavLink to='/register'>Register</NavLink>
               }


            </ul>

         </div>
      </nav>
   );
};

export default Nav;