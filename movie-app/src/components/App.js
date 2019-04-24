import React, { Component } from "react";
import "../App.css";
import Navbar from "./Navbar";
import Search from "./Search";
import MovieList from "./MovieList";
import KnowMore from "./KnowMore";
// const API_KEY=process.env.REACT_APP_API
class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchInput: "",
      currentMovie: null
    };
    // this.apiKey = process.env.REACT_APP_API;
  }
  handleSubmit = e => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=af4d09c2564d324375f6423212eb7f0e&query=${
        this.state.searchInput
      }    `
    )
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({
          movies: [...data.results]
        });
      });
  };
  handleChange = e => {
    this.setState({
      searchInput: e.target.value
    });
  };
  knowMore = id => {
    let filteredMovie;
    this.state.movies.forEach((movie, i) => {
      if (movie.id === id) {
        filteredMovie = movie;
      }
    });

    this.setState({ currentMovie: filteredMovie });
  };
  closeMovie = () => {
    this.setState({ currentMovie: null });
  };
  render() {
    return (
      <div className="App">
        <Navbar />
        {this.state.currentMovie == null ? (
          <div>
            <Search
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            />
            <MovieList knowMore={this.knowMore} movies={this.state.movies} />
          </div>
        ) : (
          <KnowMore
            closeMovie={this.closeMovie}
            currentMovie={this.state.currentMovie}
          />
        )}
      </div>
    );
  }
}

export default App;
