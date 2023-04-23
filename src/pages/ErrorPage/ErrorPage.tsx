import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import AppName from '../../components/AppName';

const ErrorPage: React.FC = () => {
  // const routeError = useRouteError();

  const APP_NAME: JSX.Element = (
    <AppName onClick={() => {}} />
  )

  return (
    <div className='error-page'>
      <div className='page-header'>
        <Row className='app-name-addMovie'>
          <Col md={10} xs={12} className='app-name-col'>
        <Link to='/' className="app-name">{ APP_NAME }</Link>
          </Col>
          <Col md={2} xs={12} className='right-header-button-col'>
          </Col>
        </Row>
        <Row className='header-title'>
          <Col xs={12} className='p-0 prevent-select'>
            <h1>Error</h1>
            <h3>bla bla bla</h3>
            <Link to='/'><button className='button b-0 button-gray button-back'>Back</button></Link>
          </Col>
        </Row>
      </div>
      <div className='page-content'>
      </div>
      <Row className='page-footer'>
        <Link to='/' className="app-name">{ APP_NAME }</Link>
      </Row>
    </div>
  )
};

export default ErrorPage;
