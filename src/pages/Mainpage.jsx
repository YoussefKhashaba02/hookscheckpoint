import React, { useState } from "react";
import ActionsBar from "../components/ActionsBar";
import MovieList from "../components/MovieList";
const MainPage = () => {
    const [movies, setMovies] = useState([
      {
        id: 1,
        name: "fight club",
        rate: "9"
      },
      {
        id: 2,
        name: "maze runner", 
        rate: "8"
      },
      {
        id: 3,
        name: "shutter island" ,
        rate: "9"
      }
    ]);
    const [nameFilter, setNameFilter] = useState("");
    const [rateFilter, setRateFilter] = useState("");
    const filteredMovies = () =>
    movies.filter((movie) => {
      return (
        movie.name.toLowerCase().includes(nameFilter.toLowerCase())&&
        movie.rate.includes(rateFilter)
      );
    });
    const addNewMovie = (newMovie) => {
        setMovies([
          ...movies,
          {
            id: movies.length + 1,
            ...newMovie
          },
        ]);
      };
    return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <ActionsBar nameFilter={nameFilter} setNameFilter={setNameFilter} rateFilter={rateFilter} setRateFilter={setRateFilter} addNewMovie={addNewMovie}/>
          <MovieList list={filteredMovies(movies)} />
        </div>);
}
export default MainPage;