

import { useEffect, useState } from "react"
import { Card } from "../Card"

 export const MovieList = () => {

  const [movies,setMovies] =useState([]);
  useEffect(()=>{
    async function fetchMovies(){
      const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=a829b171a6b7de1d77ee3bfa8d0c6fab");
      const data = await response.json();
      console.log((data))
      setMovies(data.results);
    }
    fetchMovies();
  },[])


   return (
     <main>
         <section className="max-w-7xl mx-auto py-7">
         <div className="flex justify-start flex-wrap other:justify-evenly"> 
          {movies.map((movie)=>(
            <Card key={movie.id} movie ={movie}/>
          ))}
            
         </div>
         </section>
     </main>
   )
 }
 