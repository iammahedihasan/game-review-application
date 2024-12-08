import { TbHeartsOff } from "react-icons/tb";
import Star from "./Star";
import { useContext } from "react";
import { authContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";


const WatchListsTable = ({ w, setWatchLists, watchLists }) => {
  const { user } = useContext(authContext)
  const {email} = user
  const { image, title, description, rating, year, genre } = w

  

  return (
    <div>
      <div className="flex justify-center ">

        <table>


          <tbody>

            <tr className="flex items-center mb-6">

              <td className="w-80 flex ">
                <div className="flex items-center  gap-3 ">
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

              




            </tr>

          </tbody>

        </table>
      </div>
    </div>
  );
};

export default WatchListsTable;