import React, { useState } from "react";
import { ResultCard } from "./ResultCard";

export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });

    };
    const clearInput = () => {
      setQuery([]);
      setResults("");
    }

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <h1 className="header-1">Search for movies and add them to your lists</h1>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search movies..."
              value={query}
              onChange={onChange}
            />
            <button className="search-btn" onClick={clearInput}><i class="fa-solid fa-xmark"></i></button>
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
