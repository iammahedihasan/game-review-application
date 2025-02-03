import {  FaGoogle } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useContext } from "react";
import { authContext } from "../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";


const SignIn = () => {
  const { signInUser, signUpGoogle } = useContext(authContext)
  const navigate = useNavigate()
  const location = useLocation()
  const handleSignIn = e => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value

    
    signInUser(email, password)
      .then(res => {
        
        toast.success('SignIn Successfull')
        form.reset()
        setTimeout(() => {
          navigate(location?.state ? location?.state : '/');
        }, 1000);

      })
      .catch(err => {
        
        toast.error('Enter Correct Email & Pass')
    })
  }

  const handleGoogle = () => {
    signUpGoogle()
      .then(res => {
        
        toast.success('SignIn Successfull')
        setTimeout(() => {
          navigate(location?.state ? location?.state : '/');
        }, 1000)
      })
      .catch(err => {
        
        toast.error('SignIn Unsuccessfull')
      })
  }

  
  return (
    <div className="bg-Gaming bg-cover bg-center min-h-screen">
      <Toaster />
      
      <div>
        <NavBar />
      </div>
      <div className=" flex justify-center items-center h-[800px] mx-10">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10  rounded-2xl">
          <h2 className="md:text-3xl text-xl font-bold text-center mb-4 md:mb-0">SignIn Account</h2>
          <form onSubmit={handleSignIn} className="card-body p-0 md:p-8">
            <div className="form-control mb-3">
              
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="input border-2 border-[#F3F3F3] rounded-2xl"
                required
              />
            </div>
            <div className="form-control">
              
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input border-2 border-[#F3F3F3] rounded-2xl"
                required
              />
  
              <label className="label">
                <a href="#" className="label-text-alt link link-hover text-gray-400">
                  Forgot password
                </a>
              </label>
            </div>
  
            <div className="form-control mt-2">
              <button className="btn bg-[#FFC311] rounded-lg text-white">SignIn</button>
            </div>
          </form>
          <p className="text-center mt-4 md:mt-0">
            Dont’t Have An Account ?{' '}
            <Link className="text-[#FFC311] font-bold" to="/sign-up">
              SignUp
            </Link>
          </p>
  
          <div className="my-5 flex justify-center gap-3">
            <button onClick={handleGoogle} className="p-3 bg-[#FFC311] rounded-lg"><FaGoogle /></button>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;