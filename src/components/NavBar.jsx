import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { authContext } from '../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoSunnySharp } from 'react-icons/io5';
import { CiDark } from 'react-icons/ci';

const NavBar = () => {

  const { user, signOutUser } = useContext(authContext)
  const navigate = useNavigate()
  const location = useLocation().pathname
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")

  const handleToggle = (e) => {
    if (e.target.checked) {
  setTheme("dark")
    } else {
      setTheme("light")
}
  }
  
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme" ,localTheme)
  },[theme])
  
  const links = (
    <>
      <li className="text-lg ">
            <NavLink
              className={({ isActive }) =>
                isActive
              ? 'text-[#FFC311]    font-medium'
              : `${location !== "/" && location!== "/add-reviews" && theme !== "dark" ? " text-black text-sm" : "text-white text-sm"
          }`
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
              : `${location !== "/" && location !== "/add-reviews" && theme !== "dark" ? " text-black text-sm" : "text-white text-sm"
              }`
              }
              to="/all-reviews"
            >
          All Reviews
            </NavLink>
          </li>
      {
        user && (
          <>
            <li className="text-lg">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#FFC311]   font-medium'
                    : `${location !== "/" && location !== "/add-reviews" && theme !== "dark" ?  " text-black text-sm" : "text-white text-sm"
                    }`
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
                    ? 'text-[#FFC311]  rounded-none  font-medium'
                    : `${location !== "/" && location !== "/add-reviews" && theme !== "dark" ?  " text-black text-sm" : "text-white text-sm"
                    }`
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
                    ? 'text-[#FFC311] rounded-none  font-medium'
                    : `${location !== "/" && location !== "/add-reviews" && theme !== "dark" ? " text-black text-sm" : "text-white text-sm"
                    }`
                }
                to="/my-watchlist"
              >
                Game WatchList
              </NavLink>
            </li>
          </>
        )
         }
    </>
  );

  const handleSignOut = () => {
    
    signOutUser()
      .then(() => { 
        toast.success('SignOut Successfull')

        setTimeout(() => {
          navigate('/sign-in')
        }, 1000)
      })
      .catch(err => {
      
    })
  }
  return (
    <div className="navbar bg-transparent font-kani px-0 md:px-10">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
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
            className={`${location !== "/" && location !== "/add-reviews" ? " text-black bg-white menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow" : "text-white bg-black menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow"}`}>
            {links}
          </ul>
        </div>
        <div>
          <h2 className={`${location !== "/" && location !== "/add-reviews" ? " text-black font-bold md:text-2xl text-base uppercase font-Game" : "text-white font-Game font-bold md:text-2xl text-base uppercase"}`}>Game<span className='text-[#FFC311]'>Review</span></h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="  flex gap-5 items-center px-1 ">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {/* dark mode toogle */}
        <label className="swap swap-rotate mr-6">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" onChange={handleToggle} />

          {/* sun icon */}
          <IoSunnySharp className={`swap-on h-10 w-10 fill-current text-3xl ${theme == "dark" ? "text-white" : "text-black"}`} />

          {/* moon icon */}
          <CiDark className={`swap-off h-10 w-10 fill-current text-3xl ${theme == "dark" ? "text-white": "text-black"}`} />
        </label>


        {
          user ? <div className='flex items-center'>
            <div className="tooltip  tooltip-left" data-tip={user.displayName}>
              <div className="dropdown dropdown-hover">
                <img className='h-10 rounded-full mr-4' src={user.photoURL} alt="" />
                <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] w-32 p-2 shadow">
                  <li className='bg-[#FFC311] text-white '><Link to='/my-profile'>My Profile</Link></li>
                </ul>
              </div>
            </div>
            <div>
              <button onClick={handleSignOut} className="text-white text-sm md:text-base bg-[#FFC311]  px-4 py-1  font-bold mr-4">Sign Out</button>
           </div>

          </div> : <>
              <Link
                to="/sign-in"
                className="text-white bg-[#FFC311]  px-4 py-1  font-bold mr-4 text-sm md:text-base"
              >
                <button>SignIn</button>
              </Link>

              <Link
                to="/sign-up"
                className="text-white bg-[#FFC311]  px-4 py-1  font-bold mr-4 text-sm md:text-base"
              >
                <button>SignUp</button>
              </Link>
            </>
        }
      </div>
    </div>
  );
};

export default NavBar;