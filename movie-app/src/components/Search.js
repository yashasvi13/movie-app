import React from "react";

const Search = props => {
  return (
    <div className="container">
      <br />
      <div className="row card">
        <div className="col s4 offset-s4">
          <form action="" onSubmit={props.handleSubmit}>
            <div className="input-field">
              <input
                type="text"
                placeholder="Search movie..."
                onChange={props.handleChange}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
