import { useState,useEffect } from "react";


export const useFetch = (apiPath) => {

    const [data,setData]=useState([]); 
    const url =`https://api.themoviedb.org/3/${apiPath}?api_key=a829b171a6b7de1d77ee3bfa8d0c6fab`
    
    useEffect(()=>{
    async function fetchMovies(){
      const response = await fetch(url);
      const json = await response.json();
      console.log((json))
      setData(json.results);
    }
    fetchMovies();
  },[url])

  return {data}
}