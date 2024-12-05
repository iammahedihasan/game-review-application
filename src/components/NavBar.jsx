import { Link, NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

const NavBar = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const links = (
    <>
      <li className="text-lg">
            <NavLink
              className={({ isActive }) =>
                isActive
              ? 'text-[#FFC311]    font-medium'
                  : 'text-white text-sm'
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
              ? 'text-[#FFC311]     font-medium'
                  : 'text-white text-sm'
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
              ? 'text-[#FFC311]   font-medium'
                  : 'text-white text-sm'
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
              ? 'text-[#FFC311] px-6 py-2 rounded-none  font-medium'
              : 'text-white text-sm'
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
              ? 'text-[#FFC311] px-6 py-2 rounded-none  font-medium'
              : 'text-white text-sm'
          }
          to="/game-watchlist"
        >
          Game WatchList
        </NavLink>
      </li>
    </>

    
  );
  return (
    <div className="navbar bg-transparent">
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
        <div>
          <h2 className='font-Game text-white font-bold text-2xl uppercase'>Game<span className='text-[#FFC311]'>Review</span></h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="  flex gap-5 items-center px-1 ">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to="/sign-in"
          className="text-white bg-[#FFC311]  px-4 py-1  font-bold mr-4"
        >
          SignIn
        </Link>
      </div>
    </div>
  );
};

export default NavBar;