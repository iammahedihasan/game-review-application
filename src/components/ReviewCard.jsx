import { Link } from "react-router-dom";
import Star from "./Star";


const ReviewCard = ({ r }) => {
  const {_id, image, title, description, rating, year, genre } = r
  
  
  return (
    <div className="w-72 font-Popins">
      <div >
        <img className=" h-96 object-cover object-center" src={image} alt="" />
      </div>
      <div className="pt-2  pb-3">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[22px] uppercase font-bold  text-[#FFC311]">{title}</h2>
          <Link to={`/explore-details/${_id}`}><button className="bg-[#FFC311] px-3 py-1 text-xs text-white font-bold">Details</button></Link>
        </div>
        <div className="flex items-center justify-between gap-3 mb-3 text-xs"><span><span className="font-bold mr-2">{genre}.</span> <span className="text-[#FFC311]">{year}</span></span> <span><Star ratting={rating} /></span></div>
        
      </div>
      
    </div>
  );
};

export default ReviewCard;