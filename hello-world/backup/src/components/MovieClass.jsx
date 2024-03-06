import React from "react";

class MovieClass extends React.Component {
  movie = "Jumanji";
  actor = "kevin Hart";

  render() {
    return (
      <div>
        <h1>Movie:{this.movie}</h1>
        <h1>Actor: {this.actor}</h1>
      </div>
    );
  }
}

export default MovieClass;
