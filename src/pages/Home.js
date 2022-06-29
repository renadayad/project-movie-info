import React, { useEffect ,useContext} from "react";
import { useState } from "react";
import Card from "../compount/Card";
import Carousel from "../compount/Carousel";
import MovieContext from "../context/MovieContext";
function Home() {
  

  const { movies, getDataFromApi } = useContext(MovieContext);

  useEffect(() => {
   
    getDataFromApi();
    console.log(movies);
  }, []);
  return (
    <>
      <Carousel />

      <div className="container">
        <div className="grid">
          {movies.map((movieReq) => (
            <Card key={movieReq.id} {...movieReq} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
