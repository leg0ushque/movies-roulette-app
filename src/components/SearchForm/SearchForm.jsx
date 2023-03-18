import React, { Component } from "react";
import "./styles.css";

const defaultValue = "";

class SearchForm extends Component {
  state = {
    defaultValue: defaultValue,
    onSearch: (value) => {},
  };

  constructor(props) {
    super(props);
    this.state.defaultValue = props.defaultValue || defaultValue;
    this.state.onSearch = props.onSearch;
  }

  search = () => {
    let searchInput = document.getElementById("searchInput");
    this.state.onSearch(searchInput.value);
  };

  render() {
    return (
      <>
        <div className="search-form">
          <input
            type="text"
            placeholder="What do you want to watch?"
            id="searchInput"
            className="search-input"
            defaultValue={this.state.defaultValue}
          ></input>
          <button type="button" className="search-button" onClick={this.search}>
            SEARCH
          </button>
        </div>
      </>
    );
  }
}

export default SearchForm;
