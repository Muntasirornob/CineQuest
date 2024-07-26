
import { useEffect, useState } from "react";

import { Card } from "../Card";
import { useFetch } from "../../hooks/useFetch";
import { useSearchParams } from "react-router-dom";


export const Search = ({apiPath}) => {
  
  
  const [searchParams] = useSearchParams();
  const query=searchParams.get("q");
  const {data:movies} = useFetch(apiPath,query);
  console.log();
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
