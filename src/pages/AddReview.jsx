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
    const rating = parseFloat(form.rating.value)
    const year = form.year.value
    const genre = form.genre.value
    const userEmail = user.email
    const userName = user.displayName

    const allInfo = { image, title, description, rating, year, genre, userEmail, userName };

    fetch('https://game-review-server-sandy.vercel.app/all-reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(allInfo)
    })
      .then(res => res.json())
      .then(data => {

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
    <div >

      <div className="bg-review">


        <header>
          <NavBar />
        </header>



        <main className="mt-16">
          <div className="h-[800px] md:h-[600px] flex justify-center items-center">

            <div className="card bg-base-100  shrink-0 md:p-10 p-0 rounded-2xl">
              <h2 className="text-3xl font-bold text-center mt-4 md:mt-0">Add Reviews</h2>
              <form onSubmit={handleSubmit} className="card-body  space-y-2">

                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="form-control">
                    <input
                      type="text"
                      name="image"
                      placeholder="Game Cover Image"
                      className="input border-2 border-[#F3F3F3] rounded-2xl w-72 md:w-full "
                      required
                    />

                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      name="title"
                      placeholder="Game Title"
                      className="input border-2 border-[#F3F3F3] rounded-2xl w-72 md:w-full"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="form-control">

                    <input
                      type="text"
                      name="description"
                      placeholder="Review Description"
                      className="input border-2 border-[#F3F3F3] rounded-2xl w-72 md:w-full"
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
                      className="input border-2 border-[#F3F3F3] rounded-2xl [&::-webkit-inner-spin-button]:appearance-none w-72 md:w-full"
                      required
                    />


                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4">

                  <div className="form-control">

                    <input
                      type="text"
                      name="year"
                      placeholder="Publishing Year"
                      className="input border-2 border-[#F3F3F3] rounded-2xl w-72 md:w-full"
                      required
                    />


                  </div>

                  <div className="form-control">

                    <select name="genre" className="select md:w-[215px] w-72 border-2 border-[#F3F3F3] rounded-2xl">
                      <option disabled selected>Genres </option>
                      <option value={'Action'}>Action</option>
                      <option value={'RPG'}>RPG</option>
                      <option value={'Adventure'}>Adventure</option>
                    </select>


                  </div>

                </div>
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="form-control">

                    <input
                      type="text"
                      defaultValue={user?.displayName} readOnly
                      className="input border-2 border-[#F3F3F3] rounded-2xl w-72 md:w-full"
                      required
                    />


                  </div>

                  <div className="form-control">

                    <input
                      type="email"
                      defaultValue={user?.email} readOnly
                      className="input border-2 border-[#F3F3F3] rounded-2xl w-72 md:w-full"
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