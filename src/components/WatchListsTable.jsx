import { TbHeartsOff } from "react-icons/tb";
import Star from "./Star";
import Swal from "sweetalert2";
import { useContext } from "react";
import { authContext } from "../provider/AuthProvider";


const WatchListsTable = ({ w, setWatchLists, watchLists }) => {
  const {user} = useContext(authContext)
  const {_id, image, title, description, rating, year, genre } = w
  
  const ratting = parseFloat(rating)
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
        fetch(`http://localhost:5000/watchlists?email=${user.email}&id=${id}`, {
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
              const remaining = watchLists.filter(r => r._id !== id)
              setWatchLists(remaining)
            }
          })
      }
    });
  }

  return (
    <div>
      <div className="flex justify-center">

        <table>


          <tbody>

            <tr className="flex gap-44 items-center mb-6">

              <td className="w-96 ">
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
                    <div className="text-sm opacity-50"> <div className="flex items-center  gap-8  "><span><span className="font-bold mr-2">{genre}.</span> <span className="text-[#FFC311]">PUblish: {year}</span></span> <span><Star ratting={ratting} /></span></div></div>
                  </div>


                </div>

              </td>

              <td className="flex flex-col justify-start"><div>
                <button onClick={()=> handleDelete(_id)} className="text-2xl text-[#FFC311] tooltip" data-tip='Delete Your WatchList'><TbHeartsOff /></button>
              </div></td>




            </tr>

          </tbody>

        </table>
      </div>
    </div>
  );
};

export default WatchListsTable;