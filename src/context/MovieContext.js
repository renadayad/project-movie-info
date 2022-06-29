import { createContext,useState} from "react";

const MovieContext = createContext();

export const MovieProvider=({children})=>{
 const[movies,setMovies]=useState([]);
 const getDataFromApi = async () => {
    const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=7c6f458bd84f28577290171116fcb594"
    const request = await fetch(API_URL);

   const data=await request.json();
  
   console.log(data);
   setMovies(data.results)
 }
  

return (
    <MovieContext.Provider
      value={{movies,getDataFromApi}}
    >
      {children}
    </MovieContext.Provider>
  );
}

export default MovieContext;

