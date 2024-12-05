import { FaGithub, FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";


const SignUp = () => {
  
  return (
    <div className="bg-Gaming">
      <div className="px-10">
        <NavBar/>
     </div>
      <div className="min-h-screen flex justify-center items-center">
     
        <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10 rounded-2xl">
          <h2 className="text-3xl font-bold text-center">SignUp Account</h2>
          <form className="card-body">
  
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
          <p className="text-center">
            AllReady Have An Account ?{' '}
            <Link className="text-[#FFC311] font-bold" to="/sign-in">
              SignIn
            </Link>
          </p>
  
          <div className="my-5 flex justify-center gap-3">
            <button className="p-3 bg-[#FFC311] rounded-lg"><FaGoogle /></button>
            <button className="p-3 bg-[#FFC311] rounded-lg"><FaGithub /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;