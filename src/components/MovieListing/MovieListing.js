import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
import { Settings } from "../../common/settings";

const MovieListing = () => {
  
  const movies = useSelector(getAllMovies);
  let renderMovies= "";
  

  renderMovies =
  movies.Response === "True" ? (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
  ) : (
    <div className="movies-error">
      <h3>{movies.Error}</h3>
    </div>
  );

  
  
  return (
      <div className="movie-wrapper">
          <div className="movie-list">
              <h2>Results for "search"</h2>
              <p>Click on a movie title to learn more about it</p>
              
              
              <div className="movie-container">
                <Slider {...Settings}>{renderMovies}</Slider>
              </div>
          </div>
        
      </div>
  );
};

export default MovieListing;
