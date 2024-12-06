import { useContext } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { authContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";


const AddReview = () => {
  const { user } = useContext(authContext)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const form = e.target
      const image = form.image.value
      const title = form.title.value
      const description = form.description.value
      const rating = form.rating.value
      const year = form.year.value
      const genre = form.genre.value
      const userEmail = user.email
      const userName = user.displayName
    
   const allInfo = {image, title, description, rating, year, genre, userEmail, userName};
    
    fetch('http://localhost:5000/all-reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(allInfo)
    })
    .then(res=> res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Review",
            text: "Submit Successfull",
            icon: "success"
          });
        }
        form.reset()
        form.genre.value = "Genres"
    })
  }

  
  return (
    <div>
      <div className="bg-review ">
        <header className="px-10">
          <NavBar/>
        </header>
  
        <main>
            <div className="h-[600px] flex justify-center items-center">

              <div className="card bg-base-100  shrink-0 p-10 rounded-2xl">
                <h2 className="text-3xl font-bold text-center">Add Reviews</h2>
                <form onSubmit={handleSubmit}  className="card-body space-y-2">

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
                        name="description"
                      placeholder="Review Description"
                        className="input border-2 border-[#F3F3F3] rounded-2xl"
                        required
                      />
                    </div>
                    <div className="form-control">
  
                      <input
                        type="number"
                      name="rating"
                      placeholder="Rating 1-5"
                      step="any"
                      min="1"
                      max="5"
                      className="input border-2 border-[#F3F3F3] rounded-2xl [&::-webkit-inner-spin-button]:appearance-none "
                        required
                      />
  
  
                  </div>
                 </div>
              <div className="flex items-center gap-4">
                  
                  <div className="form-control">
  
                    <input
                      type="text"
                      name="year"
                      placeholder="Publishing Year"
                      className="input border-2 border-[#F3F3F3] rounded-2xl"
                      required
                    />
  
  
                  </div>
  
                  <div className="form-control">
  
                    <select name="genre" className="select w-[215px] border-2 border-[#F3F3F3] rounded-2xl">
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
                      defaultValue={user?.displayName} readOnly
                      className="input border-2 border-[#F3F3F3] rounded-2xl"
                      required
                    />
  
  
                  </div>
  
                  <div className="form-control">
  
                    <input
                      type="email"
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