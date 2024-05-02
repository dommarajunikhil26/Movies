import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import api from './api/axiosConfig';
import Home from './components/home/Home';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);
  const [reviews, setReviews] = useState([]);

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      setMovies(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`);
      const singleMovie = response.data;
      setMovie(singleMovie);
      setReviews(singleMovie.reviews);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMovies();
  }, [])
  return (
    <div className="m-0 p-0 b-0 bg-black">
      <Routes>
        <Route path="/home" element={<Home movies={movies} />} />
        {/* <Route path="/Reviews/:movieId" element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews} />}></Route> */}
      </Routes>
    </div>
  )
}

export default App;