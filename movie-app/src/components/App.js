import React, { Component } from "react";
import "../App.css";
import Navbar from "./Navbar";
import Search from "./Search";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchInput: ""
    };
    this.apiKey = process.env.REACT_APP_API;
  }
  handleSubmit = e => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${
        this.state.searchInput
      }    `
    )
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({
          movies: [data.results]
        });
      });
  };
  handleChange = e => {
    this.setState({
      searchInput: e.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <Navbar />
        <Search
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
