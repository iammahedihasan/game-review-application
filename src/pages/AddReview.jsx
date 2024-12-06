import { useContext } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { authContext } from "../provider/AuthProvider";


const AddReview = () => {
  const {user} =useContext(authContext)
  return (
    <div>
      <div className="bg-review min-h-screen">
        <header className="w-11/12 mx-auto">
          <NavBar/>
        </header>
  
        <main>
            <div className="min-h-screen flex justify-center items-center">

              <div className="card bg-base-100  shrink-0 p-10 rounded-2xl">
                <h2 className="text-3xl font-bold text-center">Add Reviews</h2>
                <form  className="card-body space-y-2">

                 <div className="flex items-center gap-4">
                    <div className="form-control">
                      <input
                        type="text"
                        name="image"
                      placeholder="Game Cover Image"
                        className="input border-2 border-[#F3F3F3] rounded-2xl"
                        required
                      />
  
                    </div>
                    <div className="form-control">
                      <input
                        type="text"
                        name="title"
                      placeholder="Game Title"
                        className="input border-2 border-[#F3F3F3] rounded-2xl"
                        required
                      />
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="form-control">
  
                      <input
                        type="text"
                        name="discription"
                      placeholder="Review Description"
                        className="input border-2 border-[#F3F3F3] rounded-2xl"
                        required
                      />
                    </div>
                    <div className="form-control">
  
                      <input
                        type="number"
                      name="rating"
                      placeholder="Rating"
                        className="input border-2 border-[#F3F3F3] rounded-2xl"
                        required
                      />
  
  
                  </div>
                 </div>
              <div className="flex items-center gap-4">
                  
                  <div className="form-control">
  
                    <input
                      type="publishing-year"
                      name="rating"
                      placeholder="Publishing Year"
                      className="input border-2 border-[#F3F3F3] rounded-2xl"
                      required
                    />
  
  
                  </div>
  
                  <div className="form-control">
  
                    <select className="select w-[215px] border-2 border-[#F3F3F3] rounded-2xl">
                      <option disabled selected>Genres </option>
                      <option value={'Action'}>Action</option>
                      <option value={'RPG'}>RPG</option>
                      <option value={'Adventure'}>Adventure</option>
                    </select>
  
  
                  </div>
  
              </div>
                <div className="flex items-center gap-4">
                  <div className="form-control">
  
                    <input
                      type="text"
                      name="name"
                      defaultValue={user?.displayName} readOnly
                      className="input border-2 border-[#F3F3F3] rounded-2xl"
                      required
                    />
  
  
                  </div>
  
                  <div className="form-control">
  
                    <input
                      type="email"
                      name="useremail"
                      defaultValue={user?.email} readOnly
                      className="input border-2 border-[#F3F3F3] rounded-2xl"
                      required
                    />
  
  
                  </div>
                </div>



                  <div className="form-control mt-2">
                    <button className="btn bg-[#FFC311] rounded-lg text-white">Add Review</button>
                  </div>
                </form>
                
              </div>
            </div>
        
        </main>
  
        
        
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AddReview;