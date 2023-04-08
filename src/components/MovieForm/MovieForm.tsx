import './styles.css';

import React, { type FormEvent } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { GenrePlaceholder, MovieUrlPlaceholder, ReleaseDatePlaceholder, RuntimePlaceholder, TitlePlaceholder } from '../../shared/constants/placeholders';

import type IGenre from '../../shared/types/IGenre';
import type IMovie from '../../shared/types/IMovie';

const INPUT_RESET_TEXT = 'Reset'
const INPUT_SUBMIT_TEXT = 'Submit'

export interface IMovieFormProps extends IMovie {
  movie: IMovie
  genres: IGenre[]
  onSubmit: (movie: IMovie) => void
}

const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
  event.preventDefault();
  alert('submit!');
  console.log(Object.fromEntries(new FormData(event.target as HTMLFormElement)));
}

const MovieForm: React.FC<IMovieFormProps> = (props) => {
  const genreDropdownItems = props.genres.map((item) => (
    <li
      key={item.name}
    // onClick={() => { handleDropdownChange(item.id); }}
    >
      {
          props.movie.genreIds.some((x) => x === item.id)
            ? (
              <div>
                <input type="checkbox" checked/>
              </div>
              )
            : (
              <input type="checkbox"/>
              )
        }
        <label htmlFor="coding">{item.name}</label>
    </li>
  ));

  return (
    <form onSubmit={handleSubmit} className="movieForm">
      <Container>
        <Row className='form-row justify-content-center'>
          <Col md={8} xs={11}>
            <label htmlFor="title">Title</label>
            <input type="text"
              className="title"
              placeholder={TitlePlaceholder}
              defaultValue={props.movie.title}
              tabIndex={0}></input>
          </Col>
          <Col md={4} xs={11} className='pr-0'>
            <label htmlFor="releaseDate">Release date</label>
            <input type="date"
              className="releaseDate"
              placeholder={ReleaseDatePlaceholder}
              defaultValue={props.movie.releaseDate?.toDateString()}
              tabIndex={1}></input>
          </Col>
        </Row>
        <Row className='form-row justify-content-center'>
          <Col md={8} xs={11}>
            <label htmlFor="movieUrl ">Movie URL</label>
            <input type="text"
              className="movieUrl"
              placeholder={MovieUrlPlaceholder}
              defaultValue={props.movie.movieUrl}
              tabIndex={2}></input>
          </Col>
          <Col md={4} xs={11} className='pr-0'>
            <label htmlFor="rating">Rating</label>
            <input type="number" min={0.0} max={10.0} step={0.1}
              className="rating "
              placeholder={ReleaseDatePlaceholder}
              defaultValue={props.movie.rating}
              tabIndex={3}></input>
          </Col>
        </Row>
        <Row className='form-row justify-content-center'>
          <Col md={8} xs={11}>
            <label htmlFor="genre">Genre</label>
            <div className="genresDropdown prevent-select">
                {GenrePlaceholder}
                &nbsp;<span className='dropdown-triangle'>&#9660;</span>
              <ul className="dropdown-content">
                {genreDropdownItems}
              </ul>
            </div>
          </Col>
          <Col md={4} xs={11} className='pr-0'>
            <label htmlFor="runtime">Runtime</label>
            <input type="text" min={0.0} max={10.0} step={0.1}
              className="runtime"
              placeholder={RuntimePlaceholder}
              defaultValue={props.movie.duration}
              tabIndex={3}/>
          </Col>
        </Row>
        <Row>
          <Col md={5}></Col>
          <Col md={7}>
            <input type="reset" value={INPUT_RESET_TEXT} />
            <input type="submit" value={INPUT_SUBMIT_TEXT} />
          </Col>
        </Row>
      </Container>
    </form>
  );
};

export default MovieForm;
