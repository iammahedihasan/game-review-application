import { MdDeleteSweep, MdOutlineEdit } from "react-icons/md";
import Star from "./Star";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyreviewCard = ({ review, setReview, myReview }) => {
  const {_id, image, title, description, rating, year, genre } = review

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/all-reviews/${id}`, {
          method: 'DELETE',

        })
          .then(res => res.json())
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
    });
  }
  

  return (
    <div className="flex justify-center">
     
        <table>
        
          
          <tbody>
           
            <tr className="flex gap-44 items-center mb-6">
              
              <td className="w-[500px] ">
              <div className="flex items-center  gap-3 justify-start">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={image}
                        alt="Avatar" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{title}</div>
                    <div className="text-sm opacity-50"> <div className="flex items-center  gap-8  "><span><span className="font-bold mr-2">{genre}.</span> <span className="text-[#FFC311]">PUblish: {year}</span></span> <span><Star ratting={rating} /></span></div></div>
                  </div>

                  
                </div>
               
            </td>
            
            <td className="flex flex-col justify-start"><div className="flex gap-8 items-center">
              <Link to={`/update-reviews/${_id}`}><button className="text-white flex items-center gap-2 px-4 py-1 bg-[#FFC311] tooltip" data-tip='Update Your Review'><MdOutlineEdit />Update</button></Link>
              <button onClick={() => handleDelete(_id)} className="text-2xl text-[#FFC311] tooltip" data-tip='Delete Your Review'><MdDeleteSweep /></button>
            </div></td>
              
              
             
              
            </tr>
            
          </tbody>
         
        </table>
      </div>
    
  );
};

export default MyreviewCard;