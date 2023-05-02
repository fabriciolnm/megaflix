import "../styles/Movies.css";
import React, { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";

import NoImg from "../../public/static/images/NoImage.jpg";
import axios from "axios";

const Movies = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [inputValue, setInputValue] = useState();
  const input = inputValue;
  const Shown = input ? 'search' : 'discover'
  const Api = `https://api.themoviedb.org/3/${Shown}/movie`
  const Images = "https://image.tmdb.org/t/p/w500/"

  const MovieCall = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: "231b479daa91a827bb35fb80d134cd6c",
        query: input
      },
    });
    const results = data.data.results;
    setMoviesData(results);
  };
  useEffect(() => {
    MovieCall();
  }, [input]);

  return (
    <section className="movie-section">
      <div className="hero">
        <h3 className="title">Megaflix</h3>
        <form action="" className="search-bar">
          <input type="text" placeholder="Search movies" onChange={(e) => setInputValue(e.target.value)}/>
          <button type="submit">
            <GoSearch />
          </button>
        </form>
      </div>
      <div className="section-title">
        <h2>Latest Movies</h2>
      </div>

      {moviesData.map((movie) => {
        return (
          <main className="main">
            <div className="movie">
              <img
                src={
                  movie.poster_path ? `${Images}${movie.poster_path}` : NoImg
                }
                alt=""
              />
              <div className="movie-info">
                <h3 className={movie.title.length > 28 ? "smaller_Text" : ""}>
                  {movie.title}
                </h3>
                <span className="rating">{movie.vote_average}</span>
              </div>
            </div>
          </main>
          
        );
      })}
      
    </section>
  );
};

export default Movies;
