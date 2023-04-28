import './styles.css';

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

import { useNavigateRedirections } from '../../hooks';
import AppName from '../AppName';
import SearchForm from '../SearchForm';

const SearchFormHeader: React.FC = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search')

  const { redirectWithCurrentQuery } = useNavigateRedirections();

  const handleSearch = (value: string): void => {
    redirectWithCurrentQuery('/', [['search', value]])
  }

  const clearMovieSelection = (): void => {
    redirectWithCurrentQuery('/', [['search', '']])
  }

  return (
    <div className={'page-header search-form'}>
      <Row className='app-name-addMovie'>
        <Col md={10} xs={12} className='app-name-col'>
          <AppName onClick={clearMovieSelection} />
        </Col>
        <Col md={2} xs={12} className='right-header-button-col'>
          <button className='button b-0 button-gray add-movie'>+ Add movie</button>
        </Col>
      </Row>
      <Row key='header-title'>
        <Col xs={12} className='p-0 prevent-select'>
          <h1>Find your movie</h1>
          <SearchForm initialValue={searchQuery ?? ''} onSearch={handleSearch} key='search-form'/>
        </Col>
      </Row>
    </div>
  );
}

export default SearchFormHeader
