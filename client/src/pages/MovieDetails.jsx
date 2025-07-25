import React from "react";
import { useLocation, useParams } from "react-router-dom";
import MovieDetailsHero from "../components/MovieDetailsHero";
import { dummyShowsData } from "../assets/assets.js";
import CastIcon from "../components/CastIcon.jsx";
import Card from "../components/Card.jsx";

function MovieDetails() {
  const { id } = useParams();
  const location = useLocation();
  const show = dummyShowsData.find((item) => item.id === Number(id));
  const casts = show.casts; 
  const bookTickets = location.state?.bookTickets || false;

  return (
    <div className="w-4/5 mx-auto">
      <MovieDetailsHero
        poster_path={show.poster_path}
        title={show.title}
        rating={show.vote_average}
        description={show.overview}
        duration={`${Math.floor(show.runtime / 60)}h ${show.runtime % 60}m`}
        genre={show.genres.map((genre) => genre.name + " ")}
        releaseYear={show.release_date.substring(0, 4)}
        bookTickets={bookTickets}
      />
      <h2 className="text-3xl">Cast</h2>
      <div className="grid grid-cols-10 gap-5 my-5">
        {casts.map((cast) => <CastIcon profile={cast.profile_path} name={cast.name}/>)}
      </div>
      <h2 className="text-3xl mt-5">You may also like</h2>
      <div className="my-5">
        <Card />
      </div>
    </div>
  );
}

export default MovieDetails;
