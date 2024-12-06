import { FaGithub, FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useContext } from "react";
import { authContext } from "../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";


const SignIn = () => {
  const { signInUser, signUpGoogle, signUpGithub } = useContext(authContext)
  const navigate = useNavigate()
  const handleSignIn = e => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value

    
    signInUser(email, password)
      .then(res => {
        console.log(res);
        toast.success('SignIn Successfull')
        form.reset()
        setTimeout(() => {
          navigate('/')
        }, 2000);

      })
      .catch(err => {
        console.log(err.massage);
        toast.error('Enter Correct Email & Pass')
    })
  }

  const handleGoogle = () => {
    signUpGoogle()
      .then(res => {
        console.log(res);
        toast.success('SignIn Successfull')
        setTimeout(() => {
          navigate('/')
        }, 2000)
      })
      .catch(err => {
        console.log(err);
        toast.error('SignIn Unsuccessfull')
      })
  }

  const handleGithub = () => {
    signUpGithub()
      .then(res => {
        console.log(res);
        toast.success('SignIn Successfull')
        setTimeout(() => {
          navigate('/')
        }, 1500)

      })
      .catch(err => {
        console.log(err);
        toast.error('SignIn Unsuccessfull')
      })
  }
  return (
    <div className="bg-Gaming">
      <Toaster />
      
      <div className="px-10">
        <NavBar />
      </div>
      <div className="min-h-screen flex justify-center items-center ">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10 rounded-2xl">
          <h2 className="text-3xl font-bold text-center">SignIn Account</h2>
          <form onSubmit={handleSignIn} className="card-body">
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
          <p className="text-center">
            Dont’t Have An Account ?{' '}
            <Link className="text-[#FFC311] font-bold" to="/sign-up">
              SignUp
            </Link>
          </p>
  
          <div className="my-5 flex justify-center gap-3">
            <button onClick={handleGoogle} className="p-3 bg-[#FFC311] rounded-lg"><FaGoogle /></button>
            <button onClick={handleGithub} className="p-3 bg-[#FFC311] rounded-lg"><FaGithub /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;