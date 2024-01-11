import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import { movieData } from "./data";
import Filter from "./components/filter";
import { Route, Routes } from "react-router-dom";
import { Movie } from "@mui/icons-material";
import MovieTrailer from "./components/MovieTrailer";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [movies, setMovies] = useState(movieData);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);
  const admin = true;
  return (
    <div>
      <Filter
        setFilterTitle={setFilterTitle}
        filterRating={filterRating}
        setFilterRating={setFilterRating}
        admin={admin}
      />
      <Routes>
        <Route
          path="/"
          element={
            <MovieList
              movies={movies}
              setMovies={setMovies}
              filterTitle={filterTitle}
              filterRating={filterRating}
            />
          }
        />
        <Route path="/:title" element={<MovieTrailer movies={movies} />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute admin={admin}>
              {" "}
              <Profile />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
