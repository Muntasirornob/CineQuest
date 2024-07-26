import { Routes,Route } from "react-router-dom";
import { MovieList,MovieDetail,Search,PageNotFound } from "../pages";



export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element= { <MovieList apiPath="movie/now_playing" /> } />
        <Route path="movie/:id" element= { <MovieDetail/> } />
        <Route path="movies/trending" element= { <MovieList apiPath="movie/top_rated" /> } />
        <Route path="movies/popular" element= { <MovieList apiPath="movie/popular" /> } />
        <Route path="movies/upcoming" element= { <MovieList apiPath="movie/upcoming"/> } />
        <Route path="search" element= { <Search apiPath="search/movie" /> } />
    </Routes>
    </>
  )
}
