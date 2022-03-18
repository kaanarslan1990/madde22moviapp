import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    
    const response = await movieApi
      .get(`?apiKey=${APIKey}&s=${term}&type=movie`
      );
    return response.data;
  }
);


export const fetchAsyncMovieDetail = createAsyncThunk(
  "movies/fetchAsyncMovieDetail",
  async (id) => {
    const response = await movieApi
      .get(`?apiKey=${APIKey}&i=${id}&Plot=full`
      );
    return response.data;
  }
);

const initialState = {
  movies: {},
  selectedMovie: {},
  // removeSelectedMovie: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovie: (state) => {
      state.selectedMovie = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
   
    [fetchAsyncMovies.fulfilled]: (state, { payload}) => {
      console.log("Fetched Successfully!");
      return {...state, movies: payload};
    },
    
    
    [fetchAsyncMovies.rejected]: (state, { payload}) => {
      console.log("Rejected!");
    },
  
    [fetchAsyncMovieDetail.fulfilled]: (state, { payload}) => {
      console.log("Fetched Successfully!");
      return {...state, selectedMovie: payload};
    },
  }
});

export const { removeSelectedMovie } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getSelectedMovie = (state) => state.movies.selectedMovie;
export default movieSlice.reducer;