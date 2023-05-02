import "../styles/Movies.css";
import React, { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";

import NoImg from "../../public/static/images/NoImage.jpg";
import axios from "axios";

const TvShows = () => {
  const [showData, setShowData] = useState([]);
  const [inputValue, setInputValue] = useState();
  const input = inputValue;
  const Shown = input ? 'search' : 'discover'
  const Api = `https://api.themoviedb.org/3/${Shown}/tv`
  const Images = "https://image.tmdb.org/t/p/w500/"

  const TvShows = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: "231b479daa91a827bb35fb80d134cd6c",
        query: input
      },
    });
    const results = data.data.results;
    setShowData(results);
  };
  useEffect(() => {
    TvShows();
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
        <h2>Latest Tv Shows</h2>
      </div>

      {showData.map((shows) => {
        return (
          <main className="main">
            <div className="movie">
              <img
                src={
                  shows.poster_path ? `${Images}${shows.poster_path}` : NoImg
                }
                alt=""
              />
              <div className="movie-info">
                <h3 className={shows.name.length > 28 ? "smaller_Text" : ""}>
                  {shows.name}
                </h3>
                <span className="rating">{shows.vote_average}</span>
              </div>
            </div>
          </main>
        );
      })}
    </section>
  );
};

export default TvShows;
