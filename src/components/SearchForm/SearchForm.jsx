import React, { Component } from "react";
import "./styles.css";

const DEFAULT_VALUE = "";
const INPUT_PLACEHOLDER_TEXT = "What do you want to watch?";
const INPUT_SUBMIT_TEXT = "SEARCH";

class SearchForm extends Component {
  state = {
    value: DEFAULT_VALUE,
    onSearch: (value) => {},
  };

  constructor(props) {
    super(props);
    this.state.value = props.initialValue || DEFAULT_VALUE;
    this.state.onSearch = props.onSearch;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.state.onSearch(this.state.value);
    this.setState((state) => {
      return {
        value: "",
        onChange: state.onChange,
      };
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="search">
        <input
          type="text"
          placeholder={INPUT_PLACEHOLDER_TEXT}
          value={this.state.value}
          onChange={this.handleChange}
          required
        ></input>
        <input type="submit" value={INPUT_SUBMIT_TEXT} />
      </form>
    );
  }
}

export default SearchForm;
