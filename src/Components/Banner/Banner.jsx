// import axios from "axios";
import React, { useState, useEffect } from "react";
import axios from "../../Utils/axios.jsx";
import request from "../../Utils/request.jsx";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const requests = await axios.get(request.fetchNetflixOriginals);
        console.log(requests);
        setMovie(
          requests.data.results[
            Math.floor(Math.random() * requests.data.results.length)
          ]
        );
      } catch (error) {
        console.log("Error", error);
      }
    })();
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_button">
          <button className="banner_buttons play">play</button>
          <button className="banner_buttons">My list</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="banner_fadeBottom"></div>
    </div>
  );
};

export default Banner;
