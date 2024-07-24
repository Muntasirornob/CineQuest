import { useState,useEffect } from "react";


export const useFetch = (url) => {

    const [data,setData]=useState([]); 
    
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