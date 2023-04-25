import React from "react";
import MovieCard from "./MovieCard"
function MovieList({list}) {
    return (
        <div style={{display: "flex",flexWrap:"flex",gap:"2rem",justifyContent:"center"}}>
           {list.map((movie)=>(
            <MovieCard key={movie.id} {...movie}/>
           )
           )}
        </div>
    );}
    export default MovieList;