import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
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
  }, [requests.fetchNetflixOriginals]);
  console.log(movie);
  return (
    <header>
      <div className="banner__content">
        <h1>{movie.name}</h1>
        <div className="button">
          <button type="button">Play</button>
        </div>
      </div>
    </header>
  );
}

export default Banner;
