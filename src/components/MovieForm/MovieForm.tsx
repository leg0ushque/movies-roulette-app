import './styles.css';

import React, { type FormEvent } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';

import 'react-datepicker/dist/react-datepicker.css';

import { GenrePlaceholder, MovieUrlPlaceholder, OverviewPlaceholder, ReleaseDatePlaceholder, RuntimePlaceholder, TitlePlaceholder } from '../../shared/constants/placeholders';

import type IGenre from '../../shared/types/IGenre';
import type IMovie from '../../shared/types/IMovie';
import formatInputDate from '../../shared/utils/dateFormat';

const INPUT_RESET_TEXT = 'Reset'
const INPUT_SUBMIT_TEXT = 'Submit'

export interface IMovieFormProps {
  movie: IMovie | null
  genres: IGenre[]
  onSubmit: (movie: IMovie) => void
  recheckGenre: (id: string) => void
}

const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
  event.preventDefault();
  alert('submit!');
  console.dir(event.target as HTMLFormElement)
  console.dir(new FormData(event.target as HTMLFormElement))
  console.log(Object.fromEntries(new FormData(event.target as HTMLFormElement)));
}

const MovieForm: React.FC<IMovieFormProps> = (props) => {
  const genreDropdownItems = props.genres.map((item) => {
    const itemKey = `d-item-${item.name}`;

    return (
      <Form.Check
        id={itemKey}
        key={itemKey}
        type='checkbox'
        checked={props.movie?.genreIds.some((x) => x === item.id)}
        name={itemKey}
        label={item.name}
        onChange={() => { props.recheckGenre(item.id); }}/>
    )
  });

  return (
    <form onSubmit={handleSubmit} className="movieForm">
      <Container>
        <Row className='form-row justify-content-center'>
          <Col md={8} xs={11}>
            <label htmlFor="title">Title</label>
            <input type="text"
              name="title"
              placeholder={TitlePlaceholder}
              defaultValue={props.movie?.title}
              tabIndex={0}></input>
          </Col>
          <Col md={4} xs={11} className='pr-0'>
            <label htmlFor="releaseDate">Release date</label>
            <input
              type='date'
              name='releaseDate'
              defaultValue={formatInputDate(props.movie?.releaseDate ?? new Date())}
              tabIndex={1}/>
          </Col>
        </Row>
        <Row className='form-row justify-content-center'>
          <Col md={8} xs={11}>
            <label htmlFor="movieUrl ">Movie URL</label>
            <input type="text"
              name="movieUrl"
              placeholder={MovieUrlPlaceholder}
              defaultValue={props.movie?.movieUrl}
              tabIndex={2}></input>
          </Col>
          <Col md={4} xs={11} className='pr-0'>
            <label htmlFor="rating">Rating</label>
            <input type="number" min={0.0} max={10.0} step={0.1}
              name="rating"
              placeholder={ReleaseDatePlaceholder}
              defaultValue={props.movie?.rating}
              tabIndex={3}></input>
          </Col>
        </Row>
        <Row className='form-row justify-content-center'>
          <Col md={8} xs={11}>
            <label htmlFor="genre">Genre</label>
            <DropdownButton id="dropdown-basic-button" className='prevent-select' title={GenrePlaceholder}>
              {genreDropdownItems}
            </DropdownButton>
          </Col>
          <Col md={4} xs={11} className='pr-0'>
            <label htmlFor="runtime">Runtime</label>
            <input type="text" min={0.0} max={10.0} step={0.1}
              name="runtime"
              placeholder={RuntimePlaceholder}
              defaultValue={props.movie?.duration}
              tabIndex={3}/>
          </Col>
        </Row>
        <Row className='form-row justify-content-center'>
          <Col md={12} xs={11} className='pr-0'>
            <label htmlFor="description">Overview</label>
            <textarea
              name="description"
              className="description"
              placeholder={OverviewPlaceholder}
              defaultValue={props.movie?.description}
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
