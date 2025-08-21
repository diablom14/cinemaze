import axios from "axios"
import Movie from "../models/movies.model.js";
import Show from "../models/shows.model.js";


// Method to get now playing movies
export const getNowPlayingMovies = async (req, res)=>{
    try {
        const {data} = await axios.get("https://api.themoviedb.org/3/movie/now_playing",
            {
                headers:{
                    Authorization:`Bearer ${process.env.TMDB_API_KEY}`
                }
            }
        )

        const movies = data.results;
        res.json({success:true, movies:movies})
    } catch (err) {
        console.log(err);
        res.json({success:false, message:err.message})
    }
}

// Method to add movies in database if it's not there
export const addMovies = async(req, res)=>{
    try {
        const {movieId, showsInput, showPrice} = req.body

        let movie = await Movie.findById(movieId);
        if(!movie)
        {
            movieDetailsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`,
                {
                headers:{
                    Authorization:`Bearer ${process.env.TMDB_API_KEY}`
                }
                }
            );

            movieCreditsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`,
                {
                headers:{
                    Authorization:`Bearer ${process.env.TMDB_API_KEY}`
                }
                }
            );

            const movieApiData = movieDetailsResponse.data;
            const movieCreditsData = movieCreditsResponse.data;

            const movieDetails = {
                _id:movieId,
                title:movieApiData.title,
                overview:movieApiData.overview,
                poster_path:movieApiData.poster_path,
                backdrop_path:movieApiData.backdrop_path,
                release_date:movieApiData.release_date,
                original_language:movieApiData.original_language || "",
                tagline: movieApiData.tagline || "",
                genres:movieApiData.genres,
                casts:movieCreditsData.cast,
                vote_average:movieApiData.vote_average,
                runtime:movieApiData.runtime
            }

            // Add movie to database
            await Movie.create(movieDetails)

            const showsToCreate = []

            showsInput.forEach((show) => {
                const showDate = show.date;
                show.time.forEach((time)=>{
                    const dateTimeString = `${showDate}T${time}`;
                    showsToCreate.push({
                        movie:movieId,
                        showDateTime:new Date(dateTimeString),
                        showPrice:showPrice,
                        occupiedSeats:{}
                    })
                })
            });

            if(showsToCreate.length>0)
            {
                await Show.insertMany(showsToCreate)
            }

        }

        res.json({success:true, message:"Show Added succesfully"})
    } catch (err) {
        console.log(err);
        res.json({success:false, message:err.message})
    }
}

// Get all shows from database

export const getShows = async (req,res)=>{
    try {
        const shows = await Show
        .find({
            showDateTime:{
                $gte:new Date()
            }
        })
        .populate('movie')
        .sort({showDateTime:1})
    
        const uniqueShows = new Set(shows.map((show)=>show.movie))
    
        res.json({success:true, shows:Array.from(uniqueShows)})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }

}