import './styles.css';

import React, { useState, type FormEvent } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

import { FORM_RESET_BUTTON_TEXT, FORM_SUBMIT_BUTTON_TEXT } from '../../shared/constants/form';
import {
  GenrePlaceholder, MovieUrlPlaceholder, OverviewPlaceholder, ReleaseDatePlaceholder,
  RuntimePlaceholder, TitlePlaceholder
} from '../../shared/constants/placeholders';
import formatInputDate from '../../shared/utils/dateFormat';
import setMovieValues from '../../shared/utils/setMovieValues';

import type IGenre from '../../shared/types/IGenre';
import type IMovie from '../../shared/types/IMovie';
export interface IMovieFormProps {
  movie?: IMovie
  genres: IGenre[]
  onSubmit: (formData: object) => void
}

const MovieForm: React.FC<IMovieFormProps> = ({ movie, genres, onSubmit }) => {
  const [genreDropdownIsShown, setGenreDropdownIsShown] = useState(false);

  const showHideGenres = (): void => {
    setGenreDropdownIsShown(!genreDropdownIsShown);
  }

  const propsMovie: IMovie = setMovieValues(movie);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement)

    const genreCheckboxInputs = Array.from((event.target as HTMLFormElement).elements)
      .filter((el: Element) => (el.getAttribute('type') === 'checkbox')) as HTMLInputElement[];

    const checkedGenreIds = genreCheckboxInputs
      .filter((el: HTMLInputElement) => el.checked)
      .map(el => el.value)

    const objectFromEntries = {
      ...Object.fromEntries(formData),
      genreIds: checkedGenreIds
    };

    onSubmit(objectFromEntries)
  }

  const genreDropdownItems = genres.map((item) =>
    <Form.Check
      id={item.id}
      key={item.name}
      type='checkbox'
      defaultChecked={movie?.genreIds.some((x) => x === item.id)}
      name='genreIds'
      label={`  ${item.name}`}
      value={item.id}/>
  );

  return (
    <form onSubmit={handleSubmit} className="movieForm">
      <Container>
        <Row className='form-row justify-content-center'>
          <Col md={8} xs={12}>
            <label htmlFor="title">Title</label>
            <input type="text"
              name="title"
              placeholder={TitlePlaceholder}
              defaultValue={propsMovie?.title}
              tabIndex={0}
              autoFocus />
          </Col>
          <Col md={4} xs={12} className='pr-0'>
            <label htmlFor="releaseDate">Release date</label>
            <input
              type='date'
              name='releaseDate'
              defaultValue={formatInputDate(propsMovie?.releaseDate ?? new Date())}
              tabIndex={1}/>
          </Col>
        </Row>
        <Row className='form-row justify-content-center'>
          <Col md={8} xs={12}>
            <label htmlFor="movieUrl">Movie URL</label>
            <input type="text"
              name="movieUrl"
              placeholder={MovieUrlPlaceholder}
              defaultValue={propsMovie?.movieUrl}
              tabIndex={2}></input>
          </Col>
          <Col md={4} xs={12} className='pr-0'>
            <label htmlFor="rating">Rating</label>
            <input type="number" min={0.0} max={10.0} step={0.1}
              name="rating"
              placeholder={ReleaseDatePlaceholder}
              defaultValue={propsMovie?.rating}
              tabIndex={3} />
          </Col>
        </Row>
        <Row className='form-row justify-content-center'>
          <Col md={8} xs={12} className='dropdown-col prevent-select'>
            <label htmlFor="genre">Genre</label>
            <button
              className={`dropdown${genreDropdownIsShown ? ' down' : ''}`}
              onClick={showHideGenres}
              role="dropdown-button"
              >
                {GenrePlaceholder}
              </button>
            <div className={`genresList${genreDropdownIsShown ? ' shown' : ''}`}>
              {genreDropdownItems}
            </div>
          </Col>
          <Col md={4} xs={12} className='pr-0'>
            <label htmlFor="runtime">Runtime</label>
            <input type="text" min={0.0} max={10.0} step={0.1}
              name="runtime"
              placeholder={RuntimePlaceholder}
              defaultValue={propsMovie?.duration}
              tabIndex={3}/>
          </Col>
        </Row>
        <Row className='form-row justify-content-center'>
          <Col xs={12} className='pr-0'>
            <label htmlFor="description">Overview</label>
            <textarea
              name="description"
              className="description"
              placeholder={OverviewPlaceholder}
              defaultValue={propsMovie?.description}
              tabIndex={3}/>
          </Col>
        </Row>
        <Row className='form-row'>
          <Col md={{ span: 5, offset: 7 }} xs={12} className='justify-content-end'>
            <Row>
              <Col md={6} xs={6} >
                <input className="button button-black" type="reset" value={FORM_RESET_BUTTON_TEXT} />
              </Col>
              <Col md={6} xs={6} >
                <input className="button button-red" type="submit" role="submitButton" value={FORM_SUBMIT_BUTTON_TEXT} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </form>
  );
};

export default MovieForm;
