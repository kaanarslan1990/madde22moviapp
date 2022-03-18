import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/MovieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/MoviesSlice";

const Home = () => {
    const movieText = "Khan";
    const dispatch = useDispatch();

  useEffect(() => {

    const fetchMovies = async () => {
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${movieText}&type=movie`
      )
        .catch((err) => {
            console.log("Err :", err);
        });
        dispatch(addMovies(response.data));
    };

    fetchMovies();
  }, [dispatch]);


  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;