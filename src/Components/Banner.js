import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import "../Components/Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        background: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">{movie.name}</h1>
        <div className="banner__button">
          <button className="banner__buttons" id="">
            Play
          </button>
          <button className="banner__buttons" id="">
            My List
          </button>
          <h1 className="banner__discription">
            {truncate(movie.overview, 150)}
          </h1>
        </div>
      </div>
      <div className="banner__fadeaway"></div>
    </header>
  );
}

export default Banner;
