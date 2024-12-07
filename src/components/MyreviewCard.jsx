import { MdDeleteSweep, MdOutlineEdit } from "react-icons/md";
import Star from "./Star";
import Swal from "sweetalert2";


const MyreviewCard = ({ review, setReview, myReview }) => {
  const {_id, image, title, description, rating, year, genre } = review
  const ratting = parseFloat(rating)

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/all-reviews/${id}`, {
      method: 'DELETE',

    })
    .then(res=> res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Delete",
            text: "Deleted Successfull",
            icon: "success"
          });
          const remaining = myReview.filter(r => r._id !== id)
          setReview(remaining)
        }
    })
  }
  

  return (
    <div>
      <div className="hero mb-20 ">
        <div className="hero-content  items-start flex-col ">
          <img
            src={image}
            className="h-[400px] w-full object-cover rounded-lg shadow-2xl" />
          <div>
            <div className="flex justify-between items-center">
              <h1 className="text-5xl font-bold text-[#FFC311]">{title}</h1>
              <div className="flex gap-8 items-center">
                <button  className="text-5xl text-[#FFC311] tooltip" data-tip='Update Your Review'><MdOutlineEdit /></button>
                <button onClick={()=>handleDelete(_id)} className="text-5xl text-[#FFC311] tooltip" data-tip='Delete Your Review'><MdDeleteSweep /></button>
              </div>
           </div>
            <div className="flex items-center  gap-8 mb-3  px-2 my-4"><span><span className="font-bold mr-2">{genre}.</span> <span className="text-[#FFC311]">PUblish: {year}</span></span> <span><Star ratting={ratting} /></span></div>
            <h3 className="bg-[#FFC311] px-3 py-2 text-white uppercase"> <span className="font-bold"></span></h3>
            <p className="py-6 text-lg font-medium">
              <span className="font-bold text-[#FFC311]  mr-2">You have reviewed {title}</span>
              {description}
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyreviewCard;