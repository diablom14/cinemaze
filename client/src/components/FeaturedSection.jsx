import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { dummyShowsData } from "../assets/assets.js";
import Card from "./Card";
function FeaturedSection({ classNames = "" }) {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(dummyShowsData.length);
  const path = useLocation().pathname;
  console.log(path);

  useEffect(() => {
    const updateVisibleCount = () => {
      const cardWidth = 250 + 32; //card width + gap-8
      const screenWidth = window.innerWidth - 192; // p-5 used this 40
      const cardsPerRow = Math.floor(screenWidth / cardWidth);
      setVisibleCount(cardsPerRow);
    };

    updateVisibleCount();

    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);
  console.log(classNames);

  return (
    <div
      className={`overflow-hidden
        bg-[linear-gradient(135deg,_#0b1234,_#000000)] ${classNames}`}
    >
      <div className=" flex items-start pt-16 justify-between">
        <p className="text-gray-300 text-lg font-medium">Now Showing</p>
        {path != "/movies" && (
          <button
            className="flex pb-10 cursor-pointer
                hover:translate-x-2.5 transition duration-200"
            onClick={() => navigate("/movies")}
          >
            View All
            <ArrowRight />
          </button>
        )}
      </div>

      {path != "/movies" && (
        <div className="p-5 flex gap-8">
          {dummyShowsData.slice(0, visibleCount).map((show) => (
            <Card
              key={show.id}
              movieImg={show.poster_path}
              movieName={show.title}
              duration={show.duration}
              genre={show.genres.map((genre) => genre.name + " ")}
              releaseYear={show.release_date}
              rating={show.vote_average}
              id={show.id}
            />
          ))}
        </div>
      )}
      {path == "/movies" && (
        <div className="p-5 flex flex-wrap gap-8">
          {dummyShowsData.map((show) => (
            <Card
              key={show.id}
              movieImg={show.poster_path}
              movieName={show.title}
              duration={show.duration}
              genre={show.genres.map((genre) => genre.name + " ")}
              releaseYear={show.release_date}
              rating={show.vote_average}
              id={show.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default FeaturedSection;
