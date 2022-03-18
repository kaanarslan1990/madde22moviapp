import React, { useEffect, useState } from "react";
import MovieListing from "../MovieListing/MovieListing";

import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../../features/movies/movieSlice";
import "./Home.scss";

const Home = () => {
  const [term, setTerm] = useState("");
    
    const dispatch = useDispatch();
    const movieText = "khan";
    const submitHandler = (e) => {
      e.preventDefault();
      if(term === "") return alert("Please enter search term!");
      dispatch(fetchAsyncMovies(term));
      setTerm("");
  }
    

  useEffect(() => {    
    dispatch(fetchAsyncMovies(movieText));
    
  }, [dispatch]);


  return (
    <div className="home">
      <div className="banner-img"></div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search Movies"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            Search
          </button>
        </form>
      </div>
      <MovieListing />
    </div>
  );
};

export default Home;
