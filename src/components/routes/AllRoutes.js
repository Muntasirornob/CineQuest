import { Routes,Route } from "react-router-dom";
import { MovieList,MovieDetail,Search,PageNotFound } from "../pages";



export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element= { <MovieList/> } />
        <Route path="movie/:id" element= { <MovieDetail/> } />
        <Route path="movies/trending" element= { <MovieList/> } />
        <Route path="movies/popular" element= { <MovieList/> } />
        <Route path="movies/upcoming" element= { <MovieList/> } />
        <Route path="search" element= { <Search/> } />
    </Routes>
    </>
  )
}
