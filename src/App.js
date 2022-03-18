import React from 'react';
import {  BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <div className="container">        
          <Routes>
            <Route path={process.env.PUBLIC_URL + '/'} element={<Home />} />
            <Route path= '/' element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes> 
          </div>       
        
      </BrowserRouter>
     
    </div>
  );
}

export default App;
