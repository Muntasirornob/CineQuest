

import { useEffect, useState } from "react"
import { Card } from "../Card"
import { useFetch } from "../../hooks/useFetch";

 export const MovieList = () => {

  const {data:movies} = useFetch("https://api.themoviedb.org/3/movie/popular?api_key=a829b171a6b7de1d77ee3bfa8d0c6fab");




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
 