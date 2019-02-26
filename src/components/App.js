import React from 'react';
import Products from '../containers/Products';
import Menu from './Menu';
import { Grid, Row } from 'react-bootstrap';

const App = () => (
  <div>
    <Menu />
    <Grid>
      <Row className="list-products">
        <Products />
      </Row>
    </Grid>
  </div>
)

export default App;
