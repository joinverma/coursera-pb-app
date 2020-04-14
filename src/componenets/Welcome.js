import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Welcome = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h5 className='display-4'>Welcome</h5>
          <p className='lead'>You can Visualise your Portfolio positons</p>
          <h5 className='display-5'>Stay Home, Stay safe, COVID-19 Advisory</h5>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Welcome;
