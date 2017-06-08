import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import HeaderInitial from '../components/HeaderInitial';
import Footer from '../components/Footer';

const LayoutEntry = ({ children }) => {
  console.log(children);
  return (<div>
    <HeaderInitial />
    <Grid fluid>
      <Row>
        <Col lgOffset={1} lg={10}>
          <Row>
            {(Array.isArray(children) ? children : [children])
              .map(element => <Col lg={4}>{element}</Col>)}
          </Row>
        </Col>
      </Row>
    </Grid>
    <Footer />
  </div>);
};

LayoutEntry.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutEntry;
