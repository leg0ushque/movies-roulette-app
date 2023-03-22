import React, { Component } from "react";
import "./styles.css";

class GenreSelect extends Component {
  constructor(props) {
    super(props);
  }

  select(genreName) {
    this.props.onSelect(genreName);
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
    const genresButtons = this.props.genres.map((name) =>
      this.createGenreButton(
        name,
        this.props.selected.toLowerCase() === name.toLowerCase(),
        name
      )
    );

    return <ul className="genresList">{genresButtons}</ul>;
  }
}

export default GenreSelect;
