"use strict";
(function () {
  const title = document.getElementById("title");
  title.innerHTML = localStorage.getItem("movieName");

  const rntime = document.getElementById("runtime");

  const yrs = document.getElementById("year");

  const poster = document.getElementById("poster");

  const rating = document.getElementById("rating");

  const plt = document.getElementById("plot");

  const cstName = document.getElementById("cast-names");

  const genrale = document.getElementById("genre");

  const directorName = document.getElementById("director-names");

  fetchMovies(title.innerHTML);

  async function fetchMovies(search) {
    const url = `https://www.omdbapi.com/?t=${search}&type=movie&apikey=d19cd846`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      yrs.innerHTML = data.yrs;
      rntime.innerHTML = data.Runtime;
      rating.innerHTML = `${data.imdbRating}/10`;
      poster.setAttribute("src", `${data.Poster}`);
      plt.innerHTML = data.Plot;
      directorName.innerHTML = data.Director;
      cstName.innerHTML = data.Actors;
      genrale.innerHTML = data.Genre;
    } catch (err) {
      console.log(err);
    }
  }
})();
