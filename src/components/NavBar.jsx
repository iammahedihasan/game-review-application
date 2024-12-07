import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NavBar = () => {

  const { user, signOutUser } = useContext(authContext)
  const navigate = useNavigate()
  const location = useLocation().pathname
  
  const links = (
    <>
      <li className="text-lg ">
            <NavLink
              className={({ isActive }) =>
                isActive
              ? 'text-[#FFC311]    font-medium'
              : `${location !== "/" && location!== "/add-reviews" ? " text-black text-sm" : "text-white text-sm"
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
              : `${location !== "/" && location !== "/add-reviews" ? " text-black text-sm" : "text-white text-sm"
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
                    : `${location !== "/" && location !== "/add-reviews" ? " text-black text-sm" : "text-white text-sm"
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
                    : `${location !== "/" && location !== "/add-reviews" ? " text-black text-sm" : "text-white text-sm"
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
                    : `${location !== "/" && location !== "/add-reviews" ? " text-black text-sm" : "text-white text-sm"
                    }`
                }
                to="/game-watchlist"
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
      console.log(err);
    })
  }
  return (
    <div className="navbar bg-transparent font-kani px-10">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <div>
          <h2 className={`${location !== "/" && location !== "/add-reviews" ? " text-black font-bold text-2xl uppercase font-Game" : "text-white font-Game font-bold text-2xl uppercase"}`}>Game<span className='text-[#FFC311]'>Review</span></h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="  flex gap-5 items-center px-1 ">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
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
              <button onClick={handleSignOut} className="text-white bg-[#FFC311]  px-4 py-1  font-bold mr-4">Sign Out</button>
           </div>

          </div> : <>
              <Link
                to="/sign-in"
                className="text-white bg-[#FFC311]  px-4 py-1  font-bold mr-4"
              >
                <button>SignIn</button>
              </Link>

              <Link
                to="/sign-up"
                className="text-white bg-[#FFC311]  px-4 py-1  font-bold mr-4"
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