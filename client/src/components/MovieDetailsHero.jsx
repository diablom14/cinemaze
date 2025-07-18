import { dummyShowsData } from "../assets/assets.js";
import { assets } from "../assets/assets";
import { CirclePlay } from "lucide-react";

function MovieDetailsHero({
  poster_path = "",
  title = "",
  rating = 9,
  description = "",
  duration = "2h5m",
  genre = "Action, Adventure",
  releaseYear = 2025,
}) {
  return (
    <div className="flex mt-20 p-5">
      <div className="w-1/3 p-5">
        <img
          className="rounded-2xl mx-auto"
          src={poster_path}
          alt="Poster"
          width={300}
        />
      </div>
      <div className="w-2/3 p-5">
        <h2 className="text-[#5170ff] text-2xl mt-5">ENGLISH</h2>
        <h1 className="text-5xl max-w-100 mt-5">
          {title}
        </h1>
        <span className="mt-3 flex text-gray-300">
          <img
            src={assets.star}
            alt="star"
            className="w-4.5 h-4.5 mr-2 my-auto"
          />
          {rating.toFixed(1)} User Ratings
        </span>
        <p className="max-w-150 mt-3 min-h-20">
          {description}
        </p>
        <p className="text-gray-400 mt-2">
          {duration} | {genre} | {releaseYear}
        </p>
        <div className="flex gap-5 mt-3">
          <button className="rounded-xl bg-gray-800 h-15 w-40 cursor-pointer">
            <span className="flex gap-2 p-3.5">
              <CirclePlay />
              Watch Trailer
            </span>
          </button>
          <button className="rounded-xl bg-[#5170ff] h-15 w-40 cursor-pointer font-bold">
            Book Tickets
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsHero;
