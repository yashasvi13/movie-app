import React from "react";

const KnowMore = props => {
  return (
    <div>
      <div className="container">
        <div
          className="row"
          onClick={props.closeMovie}
          style={{ cursor: "pointer", paddingTop: 50 }}
        >
          <span
            className="grey darken-3 white-text btn"
            style={{ marginLeft: 10 }}
          >
            Go back
          </span>
        </div>
        <div className="row">
          <div className="col s12 m4">
            {props.currentMovie.poster_path == null ? (
              <img
                className=""
                src={`https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjG2ui26ejhAhVMv48KHVEaCNsQjRx6BAgBEAU&url=https%3A%2F%2Fuae.microless.com%2Findex.php%2Fproduct%2Flaptop-hinges-for-the-hp-15-p216ne%2F&psig=AOvVaw2VzgZ74_oSqYsq3lEPxk4L&ust=1556198517003041`}
                alt="no image"
                style={{ width: "100%", height: 350 }}
              />
            ) : (
              <img
                className=""
                src={`http://image.tmdb.org/t/p/w185${
                  props.currentMovie.poster_path
                }`}
                alt="Card image"
                style={{ width: "100%", height: 350 }}
              />
            )}
          </div>
          <div className="col s12 m8">
            <div className="info-container card">
              <p
                className="card-title center"
                style={{ fontWeight: "bold", paddingTop: 5 }}
              >
                {" "}
                {props.currentMovie.title}
              </p>
              <p className="card-content">
                Release Date: {props.currentMovie.release_date}
              </p>
              <p className="card-content">
                Overview: {props.currentMovie.overview}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowMore;
