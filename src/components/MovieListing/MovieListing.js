import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/MoviesSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
import { Settings } from "../../common/setting";

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
              <h2>Movies</h2>
              <div className="movie-container">
                <Slider {...Settings}>{renderMovies}</Slider>
              </div>
          </div>         
      </div>
  );
};

export default MovieListing;