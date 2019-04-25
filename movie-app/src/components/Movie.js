import React from "react";

const Movie = props => {
  return (
    <div className="col s12 m6 l3">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          {props.image == null ? (
            <img
              src={`https://www.spartantool.com/media/image/800/0/404-not-found.png`}
              alt="no image"
              style={{ width: "100%", height: 250 }}
            />
          ) : (
            <img
              src={`http://image.tmdb.org/t/p/w185${props.image}`}
              alt="movie img"
              style={{ width: "100%", height: 250 }}
            />
          )}
        </div>
        <div className="card-content head">{props.title}</div>
        <div className="card-action">
          <a href="#" onClick={() => props.knowMore(props.movieId)}>
            Know more!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Movie;
