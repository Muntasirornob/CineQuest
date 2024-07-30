import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


export const MovieDetail = () => {
  const params =useParams();
  const [data,setData]=useState({});

  useEffect(() => {
    async function fetchMovie(){
      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=b80d59c33d6d57ed9c7e3713f91c188a`);
      console.log(response);
      const json = await response.json()
      setData(json);
      console.log(json);
    }
    fetchMovie();
  }, [params.id]);

  return (
    <main>{data.title}</main>
  )
}
