import './styles.css';

import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import { Col, Row } from 'react-bootstrap';

export const DEFAULT_VALUE = '';
export const INPUT_PLACEHOLDER_TEXT = 'What do you want to watch?';
export const INPUT_SUBMIT_TEXT = 'SEARCH';

export interface ISearchFormProps {
  initialValue?: string
  onSearch: (value: string) => void
}

const SearchForm: React.FC<ISearchFormProps> = ({ initialValue, onSearch }) => {
  const [value, setValue] = useState(initialValue ?? DEFAULT_VALUE);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    onSearch(value);
    setValue(DEFAULT_VALUE);
  }

  return (
    <form onSubmit={handleSubmit} className="search">
      <Row>
        <Col md={9} xs={12}>
          <input
            type="text"
            placeholder={INPUT_PLACEHOLDER_TEXT}
            value={value}
            onChange={handleChange}
            required
          ></input>
        </Col>
        <Col md={3} xs={12}>
          <input type="submit" value={INPUT_SUBMIT_TEXT} />
        </Col>
      </Row>
    </form>
  );
}

export default SearchForm;
