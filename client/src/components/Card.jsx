import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
function Card({
  id = "",
  movieImg,
  movieName = "",
  releaseYear = "",
  genre = "",
  duration = "",
  rating = 9,
}) {

  const navigate = useNavigate()
  return (
    <div
      className={`h-[300px] w-[250px] bg-cover bg-center rounded-2xl group
                 transition duration-300
                flex flex-col cursor-pointer
                shadow-1
                `}
      style={{ backgroundImage: `url(${movieImg})` }}
    >
      <div
        className="opacity-0 group-hover:opacity-100
                    invisible group-hover:visible
                    translate-y-3 group-hover:translate-y-0
                    transition duration-300
                    bg-[linear-gradient(180deg,_rgba(17,37,132,0.6),_rgba(25,25,25,0.6))]
                    rounded-2xl items-start mt-auto h-2/5 p-4
                    w-full
                    
            "
      >
        <h1 className="opacity-100 line-clamp-1">{movieName}</h1>
        <p className="text-gray-400 text-xs line-clamp-1">
          {releaseYear} | {genre} | {duration}
        </p>
        <div className="flex justify-between mt-3">
          <button
            className="mt-1 p-1 px-2 bg-primary 
                     hover:bg-primary-dull rounded-md 
                    cursor-pointer
          "
            onClick={()=>navigate(`movies:${id}`)}
          >
            Book Now
          </button>
          <span className="mt-3 flex items-center justify-between text-gray-300">
            <img src={assets.star} alt="star" className="w-4.5 h-4.5 mx-2" />
            {rating.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
