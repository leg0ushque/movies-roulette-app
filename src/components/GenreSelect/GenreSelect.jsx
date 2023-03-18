import React, { Component } from "react";
import "./styles.css";

const defaultSelected = "All";

class GenreSelect extends Component {
  state = {
    genres: [],
    selected: "",
    onSelect: (genre) => {},
  };

  constructor(props) {
    super(props);
    this.state.genres = Array.from(props.genres) || new Array() < "" > 0;
    this.state.selected = props.selected || defaultSelected;
    console.log(this.state.selected);
    this.state.onSelect = props.onSelect;
  }

  select = (genreName) => {
    this.state.onSelect(genreName);
  };

  render() {
    const genresButtons = this.state.genres.map((name) =>
      this.createGenreButton(name, this.state.selected.toLowerCase() === name.toLowerCase()
      )
    );

    return (
      <>
        <ul className="genresList">
          {this.createGenreButton("All", this.state.selected.toLowerCase() === "all")}
          {genresButtons}
        </ul>
      </>
    );
  }

  createGenreButton(genreName, selected) {
    return (
      <li
        className={selected ? "genreButton selected" : "genreButton"}
        genre={genreName}
        onClick={(e) =>
          !selected ? this.select(e.target.attributes.genre.value) : {}
        }
      >
        {genreName}
      </li>
    );
  }
}

export default GenreSelect;
