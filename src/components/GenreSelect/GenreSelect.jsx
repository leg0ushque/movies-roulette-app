import React, { Component } from "react";
import "./styles.css";

const ALL_GENRE_BUTTON = "All";

class GenreSelect extends Component {
  state = {
    genres: [],
    selected: "",
    onSelect: (genre) => {},
  };

  constructor(props) {
    super(props);
    this.state.genres = Array.from(props.genres) || [];
    this.state.selected = props.selected || ALL_GENRE_BUTTON;
    this.state.onSelect = props.onSelect;
  }

  select(genreName) {
    this.state.onSelect(genreName);
  };

  createGenreButton(genreName, isSelected, elementKey) {
    return (
      <li
        key={elementKey}
        className={isSelected ? "selected" : ""}
        onClick={() => (!isSelected ? this.select(genreName) : {})}
      >
        {genreName}
      </li>
    );
  }

  render() {
    const genresButtons = [ALL_GENRE_BUTTON, ...this.state.genres].map((name) =>
      this.createGenreButton(
        name,
        this.state.selected.toLowerCase() === name.toLowerCase(),
        name
      )
    );

    return <ul className="genresList">{genresButtons}</ul>;
  }
}

export default GenreSelect;
