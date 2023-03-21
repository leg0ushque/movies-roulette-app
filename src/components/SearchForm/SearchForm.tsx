import React, { type ChangeEvent, type FormEvent } from 'react';
import './styles.css';

const DEFAULT_VALUE = '';
const INPUT_PLACEHOLDER_TEXT = 'What do you want to watch?';
const INPUT_SUBMIT_TEXT = 'SEARCH';

interface ISearchFormProps {
  initialValue: string
  onSearch: (value: string) => void
}

interface ISearchFormState {
  value: string
  onSearch: (value: string) => void
}

class SearchForm extends React.Component<ISearchFormProps, ISearchFormState> {
  state = {
    value: DEFAULT_VALUE,
    onSearch: (value: string) => {}
  };

  defaultProps = {
    value: DEFAULT_VALUE
  }

  constructor (props: ISearchFormProps) {
    super(props);
    this.state.value = props.initialValue;
    this.state.onSearch = props.onSearch;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event: ChangeEvent<HTMLInputElement>): void {
    this.setState({ value: event.target.value });
  }

  handleSubmit (event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    this.state.onSearch(this.state.value);
    this.setState((state) => {
      return {
        value: '',
        onSearch: state.onSearch
      };
    });
  }

  render (): JSX.Element {
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
