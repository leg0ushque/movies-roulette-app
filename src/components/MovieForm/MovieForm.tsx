import './styles.css';

import { withFormik, type FormikProps } from 'formik';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import * as Yup from 'yup';

import { FORM_RESET_BUTTON_TEXT, FORM_SUBMIT_BUTTON_TEXT } from '../../shared/constants/form';
import {
  GenrePlaceholder, MovieUrlPlaceholder, OverviewPlaceholder, RatingPlaceholder,
  RuntimePlaceholder, TitlePlaceholder
} from '../../shared/constants/placeholders';
import URL_PATTERN from '../../shared/constants/regex';
import testData from '../../shared/constants/test-data';
import CheckboxGroup from '../CheckboxGroup';
import CustomDatePicker from '../CustomDatePicker';

import type IGenre from '../../shared/types/IGenre';

interface IFormValues {
  title: string
  description: string
  duration: string
  releaseDate: Date | null
  rating: number
  genreIds: string[]
  movieUrl: string
}

export interface IOtherProps {
  genres: IGenre[]
  onSubmit: (formData: object) => void
}

const InnerForm = (props: IOtherProps & FormikProps<IFormValues>): JSX.Element => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  } = props;

  const [genreDropdownIsShown, setGenreDropdownIsShown] = useState(false);

  const showHideGenres = (): void => {
    setGenreDropdownIsShown(!genreDropdownIsShown);
  }

  const genreDropdownItems = testData.genres.map((item) =>
    <CheckboxGroup.Item label={item.name} value={item.name} key={item.name} />
  );

  return (
    <form onSubmit={ handleSubmit } className="movieForm">
      <Container className='p-0'>
        <Row className='form-row justify-content-center'>
          <Col md={8} xs={12} className=''>
            <label htmlFor="title">Title</label>
            <input type="text"
              name="title"
              placeholder={TitlePlaceholder}
              tabIndex={0}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              className={errors.title ? 'incorrect' : ''}
              autoFocus />
            {touched.title && errors.title && <p className='error-message'>{errors.title}</p>}
          </Col>
          <Col md={4} xs={12} className='pr-0'>
            <label htmlFor="releaseDate">Release date</label>
            <CustomDatePicker name="releaseDate" />
            {touched.releaseDate && errors.releaseDate && <p className='error-message'>{errors.releaseDate}</p>}
          </Col>
        </Row>
        <Row className='form-row justify-content-center'>
          <Col md={8} xs={12}>
            <label htmlFor="movieUrl">Movie URL</label>
            <input type="text"
              name="movieUrl"
              placeholder={MovieUrlPlaceholder}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.movieUrl}
              className={errors.movieUrl ? 'incorrect' : ''}
              tabIndex={2}
            />
            {touched.movieUrl && errors.movieUrl && <p className='error-message'>{errors.movieUrl}</p>}
          </Col>
          <Col md={4} xs={12} className='pr-0'>
            <label htmlFor="rating">Rating</label>
            <input type="number" min={0.0} max={10.0} step={0.1}
              name="rating"
              placeholder={RatingPlaceholder}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.rating}
              className={errors.rating ? 'incorrect' : ''}
              tabIndex={3} />
              {touched.rating && errors.rating && <p className='error-message'>{errors.rating}</p>}
          </Col>
        </Row>
        <Row className='form-row justify-content-center'>
          <Col md={8} xs={12} className='dropdown-col prevent-select'>
            <label htmlFor="genre">Genre</label>
            <div
              className={`button-dropdown${genreDropdownIsShown ? ' down' : ''}${errors.genreIds ? ' incorrect' : ''}`}
              onClick={showHideGenres}
              role="dropdown-button"
              >
                {GenrePlaceholder}
              </div>
            <div className={`genresList${genreDropdownIsShown ? ' shown' : ''}`}>
              <CheckboxGroup name="genreIds">
                {genreDropdownItems}
              </CheckboxGroup>
            </div>
            {touched.genreIds && errors.genreIds && <p className='error-message'>{errors.genreIds}</p>}
          </Col>
          <Col md={4} xs={12} className='pr-0'>
            <label htmlFor="duration">Runtime</label>
            <input type="text" min={1} max={500} step={1}
              name="duration"
              placeholder={RuntimePlaceholder}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.duration}
              className={errors.duration ? 'incorrect' : ''}
              tabIndex={3}/>
              {touched.duration && errors.duration && <p className='error-message'>{errors.duration}</p>}
          </Col>
        </Row>
        <Row className='form-row justify-content-center'>
          <Col xs={12} className='pr-0'>
            <label htmlFor="description">Overview</label>
            <textarea
              name="description"
              className={`description${errors.description ? ' incorrect' : ''}`}
              placeholder={OverviewPlaceholder}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              tabIndex={3}/>
              {touched.description && errors.description && <p className='error-message'>{errors.description}</p>}
          </Col>
        </Row>
        <Row className='form-row'>
          <Col md={{ span: 5, offset: 7 }} xs={12} className='justify-content-end'>
            <Row>
              <Col md={6} xs={6} >
                <input className="button button-black" type="reset" value={FORM_RESET_BUTTON_TEXT} />
              </Col>
              <Col md={6} xs={6} >
                <input className="button button-red" disabled={isSubmitting} type="submit" role="submitButton" value={FORM_SUBMIT_BUTTON_TEXT} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </form>
  );
};

export interface IMovieFormInitialValues {
  initialTitle?: string
  initialDescription?: string
  initialDuration?: string
  InitialReleaseDate?: Date | null
  initialRating?: number
  initialGenreIds?: string[]
  initialMovieUrl?: string
  onSubmit: (formData: object) => void
}

const MovieForm = withFormik<IMovieFormInitialValues, IFormValues>({
  mapPropsToValues: props => {
    const values: IFormValues = {
      title: props.initialTitle ?? '',
      description: props.initialDescription ?? '',
      duration: props.initialDuration ?? '0',
      releaseDate: props.InitialReleaseDate ?? new Date(),
      rating: props.initialRating ?? 0.0,
      genreIds: props.initialGenreIds ?? [],
      movieUrl: props.initialMovieUrl ?? ''
    }

    return values;
  },

  validationSchema: Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    duration: Yup.string().required('Duration is required'),
    releaseDate: Yup.date().required('Release date is required'),
    rating: Yup.number().required('Rating is required'),
    genreIds: Yup.array().of(Yup.string()).min(1, 'At least one genre must be selected'),
    movieUrl: Yup.string().matches(URL_PATTERN, 'Enter correct URL!').required('Please enter website')
  }),

  handleSubmit: (values, formikBag) => {
    formikBag.props.onSubmit(values);
  }

})(InnerForm);

export default MovieForm;
