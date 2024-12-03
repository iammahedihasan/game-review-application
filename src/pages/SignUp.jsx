
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [password, showPassword] = useState(true)
  
  const handleSignUp = e => {
    e.preventDefault()

  }
  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div>
      </div>
      <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10 rounded-none">
        <h2 className="text-3xl font-bold text-center">
          SignUp your account
        </h2>
        <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input bg-[#F3F3F3]  rounded-none "
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo-Url"
              className="input bg-[#F3F3F3] rounded-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input bg-[#F3F3F3] rounded-none"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              type={password ? 'text' : 'password'}
              name="password"
              placeholder="password"
              className="input bg-[#F3F3F3] rounded-none"
              required
            />
            <div
              onClick={() => showPassword(!password)}
              className="absolute right-4 top-[51px] cursor-pointer"
            >
              {password ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#1Db76f] rounded-none text-white">
              Register
            </button>
          </div>
        </form>
        <p className="text-center">
          AllReady Have An Account ?{' '}
          <Link className="text-red-500  font-bold" to="/game-review/login">
            Login
          </Link>
        </p>

        <div className="my-5 flex justify-center">
          <button
            
            className="py-4 px-10 md:px-20 border-2 border-black flex items-center justify-center rounded-lg gap-2"
          >
            <FcGoogle className="text-2xl" /> Continiue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;