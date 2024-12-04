import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/app-logo.png'

const NavBar = () => {
  const links = (
    <>
      <li className="text-lg">
            <NavLink
              className={({ isActive }) =>
                isActive
              ? 'text-white bg-[#0185D0]  px-6 py-2 rounded-full  font-medium'
                  : ''
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="text-lg">
            <NavLink
              className={({ isActive }) =>
                isActive
              ? 'text-white bg-[#0185D0]  px-6 py-2 rounded-none  font-medium'
                  : ''
              }
              to="/all-reviews"
            >
          All Reviews
            </NavLink>
          </li>
          <li className="text-lg">
            <NavLink
              className={({ isActive }) =>
                isActive
              ? 'text-white bg-[#0185D0]  px-6 py-2 rounded-none  font-medium'
                  : ''
              }
              to="/add-reviews"
            >
          Add Review
            </NavLink>
          </li>
       
      
      <li className="text-lg">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-white bg-[#0185D0]  px-6 py-2 rounded-none  font-medium'
              : ''
          }
          to="/my-reviews"
        >
          My Reviews
        </NavLink>
      </li>

      <li className="text-lg">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-white bg-[#0185D0]  px-6 py-2 rounded-none  font-medium'
              : ''
          }
          to="/game-watchlist"
        >
          Game WatchList
        </NavLink>
      </li>
    </>
  );
  return (
    <div className='w-11/12 mx-auto my-3'>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
             {links}
            </ul>
          </div>
          <div className='flex items-center gap-2'>
            <img src={logo} className='h-16 pb-2' alt="" />
            <h2><a className="font-bold cursor-pointer px-0 text-3xl ">Game Review</a></h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="  flex gap-8 items-center px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to="/game-review/login"
            className="text-white bg-[#0185D0] rounded-full  px-6 py-2  font-bold mr-4"
          >
            SignIn
          </Link>
          <Link
            to="/game-review/login"
            className="text-white bg-[#0185D0] rounded-full  px-6 py-2  font-bold"
          >
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;