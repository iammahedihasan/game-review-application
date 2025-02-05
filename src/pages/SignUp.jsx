import {  FaGoogle } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useContext } from "react";
import { authContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";


const SignUp = () => {
  const { createUser, signUpGoogle, updateUser } = useContext(authContext)
  const navigate = useNavigate()
  const location = useLocation()

  const handleSignUp = e => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const photo = form.photo.value
    const email = form.email.value
    const password = form.password.value


    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!passwordRegex.test(password)) {

      toast.error('Uppercase,Lowercase,Length 6 character');
      return;
    }


    createUser(email, password)
      .then(res => {
        
        updateUser({ displayName: name, photoURL: photo });
        Swal.fire({
          title: "SignUp",
          text: "SignUp Successfull",
          icon: "success"
        });
        form.reset()
        setTimeout(() => {
          navigate(location?.state ? location?.state : '/');
        }, 1000)
      })
      .catch(err => {
       
        toast.error('SignUp Unsuccessfull')
      })
    
  }

  const handleGoogle = () => {
    signUpGoogle()
      .then(res => {
        
     toast.success('SignUp Successfull')
        setTimeout(() => {
          navigate(location?.state ? location?.state : '/');
        }, 1000)
      })
      .catch(err => {
        
        toast.error('SignUp Unsuccessfull')
    })
  }

 
  
  return (
    <div className="bg-Gaming bg-cover bg-center min-h-screen">
      <Toaster/>
      <div>
        <NavBar/>
     </div>
      <div className=" h-[800px] mx-10 flex justify-center items-center">
     
        <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10 rounded-2xl">
          <h2 className="md:text-3xl text-xl font-bold text-center mb-4 md:mb-0">SignUp Account</h2>
          <form onSubmit={handleSignUp} className="card-body p-0 md:p-8">
  
            <div className="form-control mb-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input border-2 border-[#F3F3F3] rounded-2xl"
                required
              />
              
            </div>
            <div className="form-control mb-3">
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input border-2 border-[#F3F3F3] rounded-2xl"
                required
              />
            </div>
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
  
             
            </div>
  
            <div className="form-control mt-2">
              <button className="btn bg-[#FFC311] rounded-lg text-white">SignUp</button>
            </div>
          </form>
          <p className="text-center mt-4 md:mt-0">
            AllReady Have An Account ?{' '}
            <Link className="text-[#FFC311] font-bold" to="/sign-in">
              SignIn
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

export default SignUp;