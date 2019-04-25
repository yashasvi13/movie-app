import React from "react";

const Movie = props => {
  return (
    <div className="col s12 m6 l3">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          {props.image == null ? (
            <img
              src={`https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjG2ui26ejhAhVMv48KHVEaCNsQjRx6BAgBEAU&url=https%3A%2F%2Fuae.microless.com%2Findex.php%2Fproduct%2Flaptop-hinges-for-the-hp-15-p216ne%2F&psig=AOvVaw2VzgZ74_oSqYsq3lEPxk4L&ust=1556198517003041`}
              alt="no image"
              style={{ width: "100%", height: 400 }}
            />
          ) : (
            <img
              src={`http://image.tmdb.org/t/p/w185${props.image}`}
              alt="movie img"
              style={{ width: "100%", height: 400 }}
            />
          )}
        </div>
        <div className="card-title">{props.title}</div>
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
