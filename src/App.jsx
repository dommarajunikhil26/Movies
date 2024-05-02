import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import api from './api/axiosConfig';
import Home from './components/home/Home';
import Header from "./components/header/Header";
import Trailer from "./components/trailer/Trailer";

const App = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      setMovies(response.data);
    } catch (e) {
      console.log(e);
    }
  }


  useEffect(() => {
    getMovies();
  }, [])
  return (
    <div className="m-0 p-0 b-0 bg-black">
      <Header />
      <Routes>
        <Route path="/home" element={<Home movies={movies} />} />
        <Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
      </Routes>
    </div>
  )
}

export default App;