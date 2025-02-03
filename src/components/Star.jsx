import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar, FaStar } from "react-icons/fa6";


const Star = ({ ratting }) => {
  const ratingStar = Array.from({ length: 5 }, (ele, index) => {
    
    let num = index + 0.5;

    return (
      <span key={index}>
        {ratting >= index + 1 ? (
          <FaStar />
        ) : ratting >= num ? (
            <FaStarHalfAlt />
          ) : (
              <FaRegStar />
        )
        
        }
      </span>
    )
  })
  return (
    <div>
      <p className="flex items-center text-[#FFC311]">{ratingStar}</p>
    </div>
  );
};

export default Star;