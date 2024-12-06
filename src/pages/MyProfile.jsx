import { FaUser } from "react-icons/fa";
import { authContext } from "../provider/AuthProvider";
import { useContext } from "react";
import NavBar from "../components/NavBar";


const MYProfile = () => {

  const { user } = useContext(authContext);

  

  return (
   <div className="bg-slate-300 min-h-screen">
      <div className="px-10 ">
        <NavBar/>
        <div className="flex items-center gap-2 bg-profile h-40 py-10 px-4 text-white justify-center mt-6">
          <FaUser className="text-2xl" />{' '}
          <span className=" text-xl md:text-2xl font-bold">
            Your Profile Information
          </span>
        </div>
  
        <div className="flex items-center justify-center gap-40 mt-10">
          <div className="my-6 flex flex-col justify-center items-center gap-3">
            <h4 className="font-bold text-5xl text-[#FFC311] mb-3">Your Profile Image</h4>
            <img className="w-52 rounded-full" src={user.photoURL} alt="" />
            <h2 className=" text-lg mt-2">
              Your Name: <span className="font-bold">{user.displayName}</span>
            </h2>
            <h2>
              Your Mail: <span className="font-bold">{user.email}</span>
            </h2>
          </div>
  
          
        </div>
      </div>
   </div>
  );
};

export default MYProfile;